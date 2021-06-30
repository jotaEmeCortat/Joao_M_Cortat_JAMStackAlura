import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  h1, h2, p {
    margin: 0;
    padding: 0;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
