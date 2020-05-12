import React from "react";

import { Cold, Warm, Hot, VeryHot, Win } from "./styles";
import { useApp } from "../../contexts/app";

export const Info: React.FC = () => {
  const { info, luckyNumber } = useApp();

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

  if (info === "veryveryhot") {
    return (
      <VeryHot>
        <h1>Quente quente quente</h1>
      </VeryHot>
    );
  }

  if (info === "win") {
    return (
      <Win>
        <h1>
          Yeah! O número correto é <br />
          <span>{luckyNumber}</span>
        </h1>
      </Win>
    );
  }

  return <></>;
};
