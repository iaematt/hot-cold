import React from "react";

import { Container, ButtonReset, ButtonInfo } from "./styles";
import { useApp } from "../../contexts/app";

export const Reset: React.FC = () => {
  const { allGuess, reset } = useApp();

  if (allGuess?.length !== 0) {
    return (
      <Container>
        <ButtonReset onClick={reset}>Reiniciar</ButtonReset>
      </Container>
    );
  }

  return <></>;
};

export const HowToPlay: React.FC = () => {
  const { openModal } = useApp();

  return (
    <Container onClick={openModal}>
      <ButtonInfo>Como jogar?</ButtonInfo>
    </Container>
  );
};
