import Page from 'components/Page';
import Head from 'next/head';
import React from 'react';
import Hero from 'sections/Hero';

const Landing: React.FC = () => {
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
      <Page>
        <Hero />
      </Page>
    </>
  );
};

export default Landing;
