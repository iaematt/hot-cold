import styled from "styled-components";

export const Content = styled.h1`
  font-size: 22px;
  color: #555555;
`;

export const Color = styled.span`
  color: ${(props) => props.color};
`;
