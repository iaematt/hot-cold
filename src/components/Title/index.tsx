import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

import { Container, Color, Content, Button } from "./styles";
import { useApp } from "../../contexts/app";

export const Title: React.FC = () => {
  const { openModal } = useApp();

  return (
    <Container>
      <Content>
        <Color color="#db4550">Quente</Color> ou{" "}
        <Color color="#3cb2da">Frio</Color>
      </Content>

      <Button>
        <FaQuestionCircle size={17} onClick={openModal} />
      </Button>
    </Container>
  );
};
