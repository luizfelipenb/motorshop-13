import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.brand.brand1};
    border-radius: 20px;
  }

  @media screen and (min-width: 1200px) {
    ::-webkit-scrollbar {
      width: 0;
    }
  }
  }

  body {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.grey.grey9};
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5{
    font-family: 'Lexend', sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
    cursor:pointer;
    outline: 0;
    border: 0; 
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;
