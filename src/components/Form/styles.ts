import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  color: #888888;
  font-weight: 500;
`;

export const Input = styled.input`
  border: 1px solid #333333;
  background-color: #292929;
  color: #dddddd;
  font-size: 20px;
  padding: 7px 10px;
  margin: 5px 0 3px;
  border-radius: 2px;

  :placeholder {
    color: #444444;
  }
`;

export const Button = styled.button`
  background: #cae8a2;
  border: 1px solid #cae8a2;
  border-radius: 2px;
  padding: 8px 0;
  color: #222222;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 3px;

  :hover {
    background: #cae8a2;
  }
`;
