import React, { createContext, useContext, useEffect, useState } from "react";

import { generateRadomNumber } from "../util";

interface Guess {
  guess: number | undefined;
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
  value: string;
  setValue: (event: any) => void;
  loading: boolean;
}

const AppContext = createContext<AppData>({} as AppData);

export const AppProvider: React.FC = ({ children }) => {
  const [allGuess, setAllGuess] = useState<Guess[] | []>([]);
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState("");
  const [block, setBlock] = useState(false);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLuckyNumber(generateRadomNumber());

    setLoading(false);
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();

    if (!block) {
      setAllGuess([{ guess: Number(value) }, ...allGuess]);

      const absMath = Math.abs(Number(value) - luckyNumber);

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

      setValue("");
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
        value,
        setValue,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  return useContext(AppContext);
}
