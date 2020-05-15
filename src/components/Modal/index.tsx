import React from "react";
import { Modal as ModalCP, Separator } from "devbsb-ui-kit";

import { useApp } from "../../contexts/app";

export const Modal: React.FC = () => {
  const { modal, openModal } = useApp();

  if (modal) {
    return (
      <ModalCP open={modal} setOpen={openModal} title="Regras do jogo">
        <strong>
          Este é um jogo de adivinhação de números com as seguintes regras:
        </strong>
        <Separator />
        <span>1.</span> A máquina escolhe um número aleatório entre 1 e 100 e o
        mantém secreto.
        <br />
        <span>2.</span> Você precisa adivinhar até encontrar o número secreto.
        <br />
        <span>3.</span> Você receberá comentários sobre o quão próximo ou
        distante seu palpite está na forma das seguintes palavras: frio, morno,
        quente, muito quente.
      </ModalCP>
    );
  }

  return <></>;
};
