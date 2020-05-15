import React from "react";
import { Input, Button } from "devbsb-ui-kit";
import { MdDialpad } from "react-icons/md";

import { useApp } from "../../contexts/app";
import { Container } from "./styles";

export const Form: React.FC = () => {
  const { handleSubmit, block, allGuess, value, setValue } = useApp();

  if (block) {
    return <></>;
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="number"
        name="guess"
        placeholder="Digite seu palpite"
        value={value}
        setValue={setValue}
        min={0}
        max={100}
        icon={<MdDialpad />}
        required
      />

      <Button color="#111111">
        {allGuess?.length === 0 ? "Tentar a sorte" : "Tentar"}
      </Button>
    </Container>
  );
};
