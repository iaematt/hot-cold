import React from "react";

import { Container, Title, Guess } from "./styles";
import { useApp } from "../../contexts/app";

export const Progress: React.FC = () => {
  const { allGuess, block } = useApp();

  return (
    <Container>
      {allGuess?.length !== 0 && (
        <>
          <Title>
            {block ? (
              <>
                Você ganhou em {allGuess?.length}{" "}
                {allGuess?.length === 1 ? "tentativa" : "tentativas"}
              </>
            ) : (
              <>
                {allGuess?.length}{" "}
                <span>
                  {allGuess?.length === 1 ? "tentativa" : "tentativas"}
                </span>
              </>
            )}
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
