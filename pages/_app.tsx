import './index.css';

import CategoryContextProvider from 'contexts/Category';
import type { AppProps } from 'next/app';
import React from 'react';
import GlobalStyle from 'theme/global/GlobalStyle';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <CategoryContextProvider>
      <Component {...pageProps} />
    </CategoryContextProvider>
  </>
);

export default App;
