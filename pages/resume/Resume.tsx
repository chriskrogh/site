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
import React, { useState } from 'react';
import ExperienceSection from 'sections/Experience';
import ProjectSection from 'sections/Project';
import { COLUMN_GAP_SIZE, MAX_COLUMN_WIDTH } from 'sections/styles';
import styled from 'styled-components';
import {
  EXPERIENCE,
  ExperienceSections,
  PROJECT,
  ProjectSections,
} from 'utils/sections';
import { Database, DevOps, Framework, Language } from 'utils/sections';
import { TECH } from 'utils/tech';
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

  const selectedLanguagesState = useState<Language[]>([]);
  const selectedFrameworksState = useState<Framework[]>([]);
  const selectedDevOpsState = useState<DevOps[]>([]);
  const selectedDatabasesState = useState<Database[]>([]);

  const filters: TECH[] = [
    ...selectedLanguagesState[0],
    ...selectedFrameworksState[0],
    ...selectedDevOpsState[0],
    ...selectedDatabasesState[0],
  ];

  const experiences = Object.values(EXPERIENCE).filter((experience) =>
    filters.reduce(
      (result: boolean, filter) =>
        result && ExperienceSections[experience].tech.includes(filter),
      true,
    ),
  );
  const projects = Object.values(PROJECT).filter((project) =>
    filters.reduce(
      (result: boolean, filter) =>
        result && ProjectSections[project].tech.includes(filter),
      true,
    ),
  );

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
        <Menu
          selectedLanguagesState={selectedLanguagesState}
          selectedFrameworksState={selectedFrameworksState}
          selectedDevOpsState={selectedDevOpsState}
          selectedDatabasesState={selectedDatabasesState}
        />
      )}
      <MainPage>
        <Spacer height={48} />
        {experiences.length > 0 && (
          <>
            <HeaderWrapper id={EXPERIENCE_HEADER_ID}>
              <Typography as="h1">Experience</Typography>
            </HeaderWrapper>
            <Spacer height={32} />
            {experiences.map((experience, index) => (
              <Column key={experience}>
                {index > 0 && <Spacer height={16} />}
                <ExperienceSection
                  section={experience}
                  reverse={index % 2 === 0}
                />
              </Column>
            ))}
          </>
        )}
        {experiences.length > 0 && projects.length > 0 && (
          <Spacer height={32} />
        )}
        {projects.length > 0 && (
          <>
            <HeaderWrapper id={PROJECTS_HEADER_ID}>
              <Typography as="h1">Projects</Typography>
            </HeaderWrapper>
            <Spacer height={48} />
            {projects.map((project, index) => (
              <Column key={project}>
                {index > 0 && <Spacer height={16} />}
                <ProjectSection section={project} reverse={index % 2 === 0} />
              </Column>
            ))}
          </>
        )}
        {experiences.length === 0 && projects.length === 0 && (
          <Typography as="h5">Haven{"'"}t tried that combo yet!</Typography>
        )}
        <Spacer height={32} />
        <Footer />
      </MainPage>
    </>
  );
};

export default Resume;
