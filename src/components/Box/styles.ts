import styled from "styled-components";

export const Container = styled.div`
  background-color: #222222;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  color: #eeeeee;
  padding: 20px;
  width: 300px;

  p {
    margin-top: 15px;
    text-align: center;
  }

  @media screen and (max-width: 760px) {
    width: 90%;
  }
`;
