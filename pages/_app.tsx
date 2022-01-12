import './index.css';

import type { AppProps } from 'next/app';
import React from 'react';
import { setAppElement } from 'react-modal';
import GlobalStyle from 'theme/GlobalStyle';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

setAppElement('#__next');

export default App;
