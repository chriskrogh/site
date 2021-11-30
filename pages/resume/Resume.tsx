import Column from 'components/Column';
import Footer from 'components/Footer';
import Spacer from 'components/Spacer';
import Typography from 'components/Typography';
import Head from 'next/head';
import React from 'react';
import ExperienceSection from 'sections/Experience';
import { EXPERIENCE_SECTION } from 'sections/Experience/types';
import ProjectSection from 'sections/Project';
import { PROJECT_SECTION } from 'sections/Project/types';

const Resume: React.FC = () => {
  return (
    <>
      <Head>
        <title>Chris{"'"}s Resume</title>
        <meta
          name="description"
          content="Take a look at Chris Krogh's resume."
        />
      </Head>
      <Column alignItems="center" fullWidth>
        <Spacer height={32} />
        <Typography as="h1">Experience</Typography>
        <Spacer height={32} />
        {Object.values(EXPERIENCE_SECTION).map(
          (value: EXPERIENCE_SECTION, index) => (
            <Column key={value}>
              {index > 0 && <Spacer height={16} />}
              <ExperienceSection section={value} reverse={index % 2 === 0} />
            </Column>
          ),
        )}
        <Spacer height={32} />
        <Typography as="h1">Projects</Typography>
        <Spacer height={32} />
        {Object.values(PROJECT_SECTION).map((value: PROJECT_SECTION, index) => (
          <Column key={value}>
            {index > 0 && <Spacer height={16} />}
            <ProjectSection section={value} reverse={index % 2 === 0} />
          </Column>
        ))}
        <Spacer height={32} />
        <Footer />
      </Column>
    </>
  );
};

export default Resume;
