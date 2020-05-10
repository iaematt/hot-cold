import React, { createContext, useContext, useEffect, useState } from "react";

import { generateRadomNumber } from "../util";

interface Guess {
  guess: number;
}

interface AppData {
  allGuess: Guess[] | null;
  attempts: number;
  guess: number | undefined;
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
  const [guess, setGuess] = useState(0);
  const [allGuess, setAllGuess] = useState<Guess[] | []>([]);
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState("");
  const [block, setBlock] = useState(false);

  useEffect(() => {
    setLuckyNumber(generateRadomNumber());
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();

    if (!block) {
      setGuess(event.target.elements.guess.value);
      setAllGuess([{ guess: event.target.elements.guess.value }, ...allGuess]);
      setAttempts(attempts + 1);

      const absMath = Math.abs(event.target.elements.guess.value - luckyNumber);

      if (absMath === 0) {
        setInfo("win");
        setBlock(true);
      } else if (absMath < 4 && absMath !== 0) {
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
    setGuess(0);
    setAllGuess([]);
    setAttempts(0);
    setInfo("");
    setBlock(false);
    setLuckyNumber(generateRadomNumber());
  }

  return (
    <AppContext.Provider
      value={{
        allGuess,
        attempts,
        guess,
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
