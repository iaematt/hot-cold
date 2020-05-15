import React from "react";
import { Button } from "devbsb-ui-kit";

import { useApp } from "../../contexts/app";

export const Reset: React.FC = () => {
  const { allGuess, reset } = useApp();

  if (allGuess?.length !== 0) {
    return (
      <Button onClick={reset} backgroundColor="#e86841" outlined>
        Reiniciar
      </Button>
    );
  }

  return <></>;
};
