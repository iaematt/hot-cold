import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: "Roboto", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  }

  html {
    --blue-color: #3cb2da;
    --green-color: #3bb85d;
    --red-color: #db4e44;
    --yellow-color: #f7bc44;
    --cyan-color: #3bbeb0;
    --orange-color: #e86740;
    --pink-color: #b377d9;
    --purple-color: #7479d5;
  }

  body {
    background: linear-gradient(to left, var(--blue-color), var(--red-color));
    color: #222222;
    font-size: 16px;
  }

  button {
    width: 100%;
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
      font-weight: 700;
  }

  strong {
    font-weight: 700;
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
