import Button from 'components/Button';
import Column from 'components/Column';
import Footer from 'components/Footer';
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

const EXPERIENCE_HEADER_ID = 'experience';
const PROJECTS_HEADER_ID = 'projects';

const Menu = styled(Column)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 32px 0 0 32px;
`;

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
      {screenSize === 'desktop' && (
        <Menu>
          <Typography as="h5">Sections</Typography>
          <Spacer height={8} />
          <Button href={`#${EXPERIENCE_HEADER_ID}`}>Experience</Button>
          <Spacer height={4} />
          <Button href={`#${PROJECTS_HEADER_ID}`}>Projects</Button>
          <Spacer height={16} />
          <Typography as="h5">More</Typography>
          <Spacer height={8} />
          <Button href="/resume.pdf">View as PDF</Button>
        </Menu>
      )}
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
