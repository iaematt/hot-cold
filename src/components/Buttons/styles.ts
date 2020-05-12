import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
`;

export const ButtonReset = styled.button`
  background: #e86841;
  border: none;
  border-radius: 2px;
  height: 35px;
  color: #222222;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background: ${darken(0.1, "#e86841")};
  }
`;
