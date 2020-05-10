import React from "react";

import { Color, Content } from "./styles";

export const Title: React.FC = () => {
  return (
    <Content>
      <Color color="#FF8080">Quente</Color> ou{" "}
      <Color color="#ADDDEB">Frio</Color>
    </Content>
  );
};
