import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.h1`
  font-size: 22px;
  color: #999999;
`;

export const Color = styled.span`
  color: ${(props) => props.color};
`;

export const Button = styled.div`
  height: 17px;
  display: flex;
  flex-direction: row;

  svg {
    cursor: pointer;
    fill: #3cb2da;
    transition: fill 0.2s ease-in-out;

    margin-left: 5px;
  }

  svg:hover {
    fill: ${darken(0.1, "#3cb2da")};
  }
`;
