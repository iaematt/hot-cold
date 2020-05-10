import styled from "styled-components";

export const Container = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
`;

export const ButtonReset = styled.button`
  background: #ff8080;
  border: 1px solid #ff7575;
  border-radius: 2px;
  padding: 6px 0;
  color: #222222;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background: #ff7575;
  }
`;

export const ButtonInfo = styled.button`
  background: #bae4e5;
  border: 1px solid #7bbcbd;
  border-radius: 2px;
  padding: 6px 0;
  color: #222222;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background: #7bbcbd;
  }
`;
