import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-family: Roboto;
    font-size: 52px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 3;
  }
  h2 {
    font-family: Roboto;
    font-size: 44px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 2;
  }
  h3 {
    font-family: Roboto;
    font-size: 36px;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 1;
  }
  h4 {
    font-family: Source Sans Pro;
    font-size: 28px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 1;
  }
  h5 {
    font-family: Source Sans Pro;
    font-size: 22px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.5;
  }
  p: {
    font-family: Source Sans Pro;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.25;
  }
`;

export default GlobalStyle;
