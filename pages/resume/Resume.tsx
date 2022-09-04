import Button from 'components/Button';
import Column from 'components/Column';
import Footer from 'components/Footer';
import Menu, {
  EXPERIENCE_HEADER_ID,
  PROJECTS_HEADER_ID,
} from 'components/Menu';
import Modal from 'components/Modal';
import Row from 'components/Row';
import Spacer from 'components/Spacer';
import Typography from 'components/Typography';
import isBefore from 'date-fns/isBefore';
import Head from 'next/head';
import React, { useState } from 'react';
import { FaGripLines } from 'react-icons/fa';
import ExperienceSection from 'sections/Experience';
import ProjectSection from 'sections/Project';
import { COLUMN_GAP_SIZE, MAX_COLUMN_WIDTH } from 'sections/styles';
import styled from 'styled-components';
import {
  Categories,
  CATEGORY,
  EXPERIENCE,
  ExperienceSections,
  PROJECT,
  ProjectSections,
} from 'utils/sections';
import { Database, DevOps, Framework, Language } from 'utils/sections';
import { TECH } from 'utils/tech';
import { MOBILE_THRESHOLD, useScreenSize } from 'utils/useScreenSize';

const HeaderWrapper = styled(Row)`
  width: ${2 * MAX_COLUMN_WIDTH + COLUMN_GAP_SIZE}px;

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    width: auto;
  }
`;

const ContentContainer = styled(Column)`
  @media (max-width: ${MOBILE_THRESHOLD}px) {
    padding: 0 16px;
    width: calc(100% - 32px);
  }
`;

const Resume: React.FC = () => {
  const screenSize = useScreenSize();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const selectedCategoriesState = useState<CATEGORY[]>([]);
  const selectedLanguagesState = useState<Language[]>([]);
  const selectedFrameworksState = useState<Framework[]>([]);
  const selectedDevOpsState = useState<DevOps[]>([]);
  const selectedDatabasesState = useState<Database[]>([]);

  const experiencesInCategories = Object.values(EXPERIENCE).filter(
    (experience) =>
      selectedCategoriesState[0].reduce(
        (inCategory: boolean, category) =>
          inCategory &&
          Categories[category].reduce(
            (hasTech: boolean, tech) =>
              hasTech || ExperienceSections[experience].tech.includes(tech),
            false,
          ),
        true,
      ),
  );
  const projectsInCategories = Object.values(PROJECT).filter((project) =>
    selectedCategoriesState[0].reduce(
      (inCategory: boolean, category) =>
        inCategory &&
        Categories[category].reduce(
          (hasTech: boolean, tech) =>
            hasTech || ProjectSections[project].tech.includes(tech),
          false,
        ),
      true,
    ),
  );

  const filters: TECH[] = [
    ...selectedLanguagesState[0],
    ...selectedFrameworksState[0],
    ...selectedDevOpsState[0],
    ...selectedDatabasesState[0],
  ];

  const experiences = experiencesInCategories
    .filter((experience) =>
      filters.reduce(
        (result: boolean, filter) =>
          result && ExperienceSections[experience].tech.includes(filter),
        true,
      ),
    )
    .sort((a, b) =>
      isBefore(
        ExperienceSections[a].duration.start,
        ExperienceSections[b].duration.start,
      )
        ? 1
        : -1,
    );
  const projects = projectsInCategories.filter((project) =>
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
      <Row fullWidth>
        {screenSize === 'desktop' && (
          <Menu
            selectedCategoriesState={selectedCategoriesState}
            selectedLanguagesState={selectedLanguagesState}
            selectedFrameworksState={selectedFrameworksState}
            selectedDevOpsState={selectedDevOpsState}
            selectedDatabasesState={selectedDatabasesState}
            hasExperiences={experiences.length > 0}
            hasProjects={projects.length > 0}
          />
        )}
        <ContentContainer alignItems="center" fullWidth>
          <Spacer height={screenSize === 'desktop' ? 48 : 24} />
          {screenSize !== 'desktop' && (
            <Row justifyContent="flex-end" fullWidth>
              <Button onClick={openModal}>
                <FaGripLines className="icon-link" />
              </Button>
              <Spacer width={32} />
            </Row>
          )}
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
        </ContentContainer>
      </Row>
      <Modal isOpen={isModalOpen} close={closeModal}>
        <Menu
          selectedCategoriesState={selectedCategoriesState}
          selectedLanguagesState={selectedLanguagesState}
          selectedFrameworksState={selectedFrameworksState}
          selectedDevOpsState={selectedDevOpsState}
          selectedDatabasesState={selectedDatabasesState}
          hasExperiences={experiences.length > 0}
          hasProjects={projects.length > 0}
        />
      </Modal>
    </>
  );
};

export default Resume;
