import type { AppProps } from 'next/app';
import React from 'react';
import GlobalStyle from 'theme/global/GlobalStyle';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;