import React, { createContext, useContext, useEffect, useState } from "react";

import { generateRadomNumber } from "../util";

interface Guess {
  guess: number;
}

interface AppData {
  allGuess: Guess[] | null;
  handleSubmit(event: any): void;
  luckyNumber: number;
  modal: boolean;
  openModal(): void;
  reset(): void;
  info: string;
  block: boolean;
}

const AppContext = createContext<AppData>({} as AppData);

export const AppProvider: React.FC = ({ children }) => {
  const [allGuess, setAllGuess] = useState<Guess[] | []>([]);
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState("");
  const [block, setBlock] = useState(false);

  useEffect(() => {
    setLuckyNumber(generateRadomNumber());
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();

    if (!block) {
      setAllGuess([{ guess: event.target.elements.guess.value }, ...allGuess]);

      const absMath = Math.abs(event.target.elements.guess.value - luckyNumber);

      if (absMath === 0) {
        setInfo("win");
        setBlock(true);
      } else if (absMath < 2 && absMath !== 0) {
        setInfo("veryveryhot");
      } else if (absMath >= 2 && absMath < 4) {
        setInfo("veryhot");
      } else if (absMath >= 4 && absMath < 10) {
        setInfo("hot");
      } else if (absMath >= 10 && absMath < 20) {
        setInfo("warm");
      } else {
        setInfo("cold");
      }

      event.target.elements.guess.value = "";
    }
  }

  function openModal() {
    setModal(modal ? false : true);
  }

  function reset() {
    setAllGuess([]);
    setInfo("");
    setBlock(false);
    setLuckyNumber(generateRadomNumber());
  }

  return (
    <AppContext.Provider
      value={{
        allGuess,
        handleSubmit,
        luckyNumber,
        modal,
        openModal,
        reset,
        info,
        block,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  return useContext(AppContext);
}
