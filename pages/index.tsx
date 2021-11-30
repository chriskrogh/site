import Footer from 'components/Footer';
import Page from 'components/Page';
import Spacer from 'components/Spacer';
import Head from 'next/head';
import React from 'react';
import Contact from 'sections/Contact';
import Hero from 'sections/Hero';
import styled from 'styled-components';

const MainPage = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Landing: React.FC = () => {
  return (
    <>
      <Head>
        <title>Chris Krogh</title>
        <meta
          name="description"
          content="Chris Krogh is a software engineer from Trinidad and Tobago who likes to build cool things."
        />
      </Head>
      <MainPage>
        <Spacer height={24} />
        <Hero />
        <Spacer height={16} />
        <Contact />
        <Spacer height={16} />
        <Footer />
      </MainPage>
    </>
  );
};

export default Landing;
