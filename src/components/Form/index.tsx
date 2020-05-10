import React from "react";

import { useApp } from "../../contexts/app";
import { Container, Label, Input, Button } from "./styles";

export const Form: React.FC = () => {
  const { handleSubmit, block } = useApp();

  if (block) {
    return <></>;
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Label>Digite seu palpite...*</Label>
      <Input type="number" name="guess" min="0" max="100" required />
      <Button>Tentar a sorte</Button>
    </Container>
  );
};
