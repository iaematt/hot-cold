import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h3`
  color: #888888;
  margin: 10px 0;

  span {
    color: #666666;
  }
`;

export const Guess = styled.div`
  margin: 10px 0;
  background-color: #292929;
  padding: 7px 3px;
  border-radius: 2px;
  font-size: 14px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  text-align: center;

  span {
    background-color: #252525;
    padding: 2px 0;
    margin: 0 1px;
  }
`;
