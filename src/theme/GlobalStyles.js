import {createGlobalStyle} from "styled-components";

const GlobalStyles=createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`

export default GlobalStyles