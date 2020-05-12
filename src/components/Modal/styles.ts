import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 95%;
  max-width: 450px;
  padding: 15px;
  background: #222222;
  color: #eeeeee;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    line-height: 20px;
  }

  span {
    color: var(--blue-color);
    font-weight: 500;
  }
`;

export const Button = styled.button`
  background: var(--blue-color);
  border: none;
  border-radius: 2px;
  height: 35px;
  color: #222222;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 10px;

  :hover {
    background: ${darken(0.1, "#3cb2da")};
  }
`;
