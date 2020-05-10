import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(to left, #ADDDEB, #FF8080);
    color: #222222;
    font-size: 13px;
    font-weight: 400;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-weight: 500;
  }

  strong {
    font-weight: 500;
  }

  a {
    color: #4285f4;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-weight: 500;
  }

  a:hover {
    color: #555555;
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
