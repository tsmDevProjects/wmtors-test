import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background: #f3f5f8;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  #app {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px;
  }

  button {
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }
`;
