import React from "react";

import { Container, Title, Guess } from "./styles";
import { useApp } from "../../contexts/app";

export const Progress: React.FC = () => {
  const { attempts, allGuess } = useApp();

  return (
    <Container>
      {allGuess?.length !== 0 && (
        <>
          <Title>
            {attempts}{" "}
            <span>{attempts === 1 ? "tentativa" : "tentativas"}</span>
          </Title>

          <Guess>
            {allGuess?.map((item, index) => (
              <span key={index}>{item.guess}</span>
            ))}
          </Guess>
        </>
      )}
    </Container>
  );
};
