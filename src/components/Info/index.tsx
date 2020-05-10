import React from "react";

import { Cold, Warm, Hot, VeryHot, Win } from "./styles";
import { useApp } from "../../contexts/app";

export const Info: React.FC = () => {
  const { info } = useApp();

  if (info === "cold") {
    return (
      <Cold>
        <h1>Frio</h1>
      </Cold>
    );
  }

  if (info === "warm") {
    return (
      <Warm>
        <h1>Morno</h1>
      </Warm>
    );
  }

  if (info === "hot") {
    return (
      <Hot>
        <h1>Quente</h1>
      </Hot>
    );
  }

  if (info === "veryhot") {
    return (
      <VeryHot>
        <h1>Muito quente</h1>
      </VeryHot>
    );
  }

  if (info === "win") {
    return (
      <Win>
        <h1>Yeah! Você ganhou!</h1>
      </Win>
    );
  }

  return <></>;
};