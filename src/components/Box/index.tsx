import React from "react";

import { Container } from "./styles";
import { Loading } from "../Loading";
import { useApp } from "../../contexts/app";

export const Box: React.FC = ({ children }) => {
  const { loading } = useApp();

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          {children}

          <p>
            Copyright © 2020{" "}
            <a
              href="https://devbsb.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevBSB
            </a>
          </p>
        </>
      )}
    </Container>
  );
};
