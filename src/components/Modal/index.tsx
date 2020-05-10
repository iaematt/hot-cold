import React from "react";

import { Container, Content, Button } from "./styles";
import { useApp } from "../../contexts/app";

export const Modal: React.FC = () => {
  const { modal, openModal } = useApp();

  if (modal) {
    return (
      <Container>
        <Content>
          <h1>Regras do jogo</h1>

          <p>
            <strong>
              Este é um jogo de adivinhação de números com as seguintes regras:
            </strong>
            <br />
            <span>1.</span> A máquina escolhe um número aleatório entre 1 e 100
            e o mantém secreto.
            <br />
            <span>2.</span> Você precisa adivinhar até encontrar o número
            secreto.
            <br />
            <span>3.</span> Você receberá comentários sobre o quão próximo ou
            distante seu palpite está na forma das seguintes palavras: frio,
            morno, quente, muito quente.
          </p>

          <Button onClick={openModal}>Ok, vou jogar!</Button>
        </Content>
      </Container>
    );
  }

  return <></>;
};
