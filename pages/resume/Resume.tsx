import Column from 'components/Column';
import Footer from 'components/Footer';
import Menu, {
  EXPERIENCE_HEADER_ID,
  PROJECTS_HEADER_ID,
} from 'components/Menu';
import Page from 'components/Page';
import Row from 'components/Row';
import Spacer from 'components/Spacer';
import Typography from 'components/Typography';
import Head from 'next/head';
import React from 'react';
import ExperienceSection from 'sections/Experience';
import { EXPERIENCE_SECTION } from 'sections/Experience/types';
import ProjectSection from 'sections/Project';
import { PROJECT_SECTION } from 'sections/Project/types';
import { COLUMN_GAP_SIZE, MAX_COLUMN_WIDTH } from 'sections/styles';
import styled from 'styled-components';
import { MOBILE_THRESHOLD, useScreenSize } from 'utils/useScreenSize';

const MainPage = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled(Row)`
  width: ${2 * MAX_COLUMN_WIDTH + COLUMN_GAP_SIZE}px;

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    width: auto;
  }
`;

const Resume: React.FC = () => {
  const screenSize = useScreenSize();

  return (
    <>
      <Head>
        <title>Chris{"'"}s Resume</title>
        <meta
          name="description"
          content="Take a look at Chris Krogh's resume."
        />
      </Head>
      {screenSize === 'desktop' && <Menu />}
      <MainPage>
        <Spacer height={48} />
        <HeaderWrapper id={EXPERIENCE_HEADER_ID}>
          <Typography as="h1">Experience</Typography>
        </HeaderWrapper>
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
        <HeaderWrapper id={PROJECTS_HEADER_ID}>
          <Typography as="h1">Projects</Typography>
        </HeaderWrapper>
        <Spacer height={48} />
        {Object.values(PROJECT_SECTION).map((value: PROJECT_SECTION, index) => (
          <Column key={value}>
            {index > 0 && <Spacer height={16} />}
            <ProjectSection section={value} reverse={index % 2 === 0} />
          </Column>
        ))}
        <Spacer height={32} />
        <Footer />
      </MainPage>
    </>
  );
};

export default Resume;
