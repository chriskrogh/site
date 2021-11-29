import Column from 'components/Column';
import Footer from 'components/Footer';
import Page from 'components/Page';
import Spacer from 'components/Spacer';
import { CategoryContext } from 'contexts/Category';
import { CATEGORY } from 'contexts/Category/types';
import Head from 'next/head';
import React, { useContext } from 'react';
import Contact from 'sections/Contact';
import ExperienceSection from 'sections/Experience';
import { EXPERIENCE_SECTION } from 'sections/Experience/types';
import Hero from 'sections/Hero';
import Nav from 'sections/Nav';
import ProjectSection from 'sections/Project';
import { PROJECT_SECTION } from 'sections/Project/types';
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
      </Head>
      <MainPage>
        <Spacer height={24} />
        <Hero />
        <Spacer height={16} />
        <Contact />
        <Spacer height={16} />
        <Nav />
        <Spacer height={16} />
        {category === CATEGORY.EXPERIENCE
          ? Object.values(EXPERIENCE_SECTION).map(
              (value: EXPERIENCE_SECTION, index) => (
                <Column key={value}>
                  {index > 0 && <Spacer height={16} />}
                  <ExperienceSection
                    section={value}
                    reverse={index % 2 === 0}
                  />
                </Column>
              ),
            )
          : category === CATEGORY.PROJECTS
          ? Object.values(PROJECT_SECTION).map(
              (value: PROJECT_SECTION, index) => (
                <Column key={value}>
                  {index > 0 && <Spacer height={16} />}
                  <ProjectSection section={value} reverse={index % 2 === 0} />
                </Column>
              ),
            )
          : null}
        <Footer />
      </MainPage>
    </>
  );
};

export default Landing;
