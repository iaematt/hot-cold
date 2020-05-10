import React from "react";

import { Container } from "./styles";

export const Box: React.FC = ({ children }) => {
  return (
    <Container>
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
    </Container>
  );
};
