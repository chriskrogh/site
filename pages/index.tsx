import Footer from 'components/Footer';
import Page from 'components/Page';
import Spacer from 'components/Spacer';
import { CategoryContext } from 'contexts/Category';
import { CATEGORY } from 'contexts/Category/types';
import Head from 'next/head';
import React, { useContext } from 'react';
import Contact from 'sections/Contact';
import Experience from 'sections/Experience';
import Hero from 'sections/Hero';
import Nav from 'sections/Nav';
import Projects from 'sections/Projects';
import styled from 'styled-components';

const MainPage = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Landing: React.FC = () => {
  const { category } = useContext(CategoryContext);

  return (
    <>
      <Head>
        <title>Chris Krogh</title>
        <meta
          name="description"
          content="Who is Chris Krogh? Learn more about the Trinidadian Software Engineer here!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MainPage>
        <Spacer height={24} />
        <Hero />
        <Spacer height={16} />
        <Contact />
        <Spacer height={16} />
        <Nav />
        <Spacer height={16} />
        {category === CATEGORY.EXPERIENCE ? (
          <Experience />
        ) : category === CATEGORY.PROJECTS ? (
          <Projects />
        ) : null}
        <Footer />
      </MainPage>
    </>
  );
};

export default Landing;
