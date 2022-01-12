import Button from 'components/Button';
import Column from 'components/Column';
import Row from 'components/Row';
import Spacer from 'components/Spacer';
import Typography from 'components/Typography';
import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';
import {
  CATEGORY,
  Database,
  DevOps,
  Framework,
  getSortedFilters,
  Language,
} from 'utils/sections';
import { TABLET_THRESHOLD, useScreenSize } from 'utils/useScreenSize';

import Filter, { FILTER_HEIGHT } from './Filter';

export const EXPERIENCE_HEADER_ID = 'experience';
export const PROJECTS_HEADER_ID = 'projects';

const TOP_BOTTOM_PADDING = 32;
const MENU_WIDTH = 184;

const { languages, frameworks, devOps, databases } = getSortedFilters();

const Container = styled(Column)`
  @media (min-width: ${TABLET_THRESHOLD}px) {
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
    height: calc(100% - ${2 * TOP_BOTTOM_PADDING}px);
    max-width: ${MENU_WIDTH}px;
    padding: ${TOP_BOTTOM_PADDING}px 0 ${TOP_BOTTOM_PADDING}px 32px;
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: ${TABLET_THRESHOLD}px) {
    padding: 16px;
  }
  overflow-x: hidden;
`;

const FilterContainer = styled(Row)`
  @media (min-width: ${TABLET_THRESHOLD}px) {
    max-width: ${MENU_WIDTH}px;
  }
  @media (max-width: ${TABLET_THRESHOLD}px) {
    max-width: 100%;
  }
  min-height: ${FILTER_HEIGHT}px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

type Props = {
  selectedCategoriesState: [CATEGORY[], (categories: CATEGORY[]) => void];
  selectedLanguagesState: [Language[], (languages: Language[]) => void];
  selectedFrameworksState: [Framework[], (frameworks: Framework[]) => void];
  selectedDevOpsState: [DevOps[], (devOps: DevOps[]) => void];
  selectedDatabasesState: [Database[], (databases: Database[]) => void];
};

const Menu: React.FC<Props> = ({
  selectedCategoriesState,
  selectedLanguagesState,
  selectedFrameworksState,
  selectedDevOpsState,
  selectedDatabasesState,
}) => {
  const screenSize = useScreenSize();

  const [selectedCategories, setSelectedCategories] = selectedCategoriesState;
  const [selectedLanguages, setSelectedLanguages] = selectedLanguagesState;
  const [selectedFrameworks, setSelectedFrameworks] = selectedFrameworksState;
  const [selectedDevOps, setSelectedDevOps] = selectedDevOpsState;
  const [selectedDatabases, setSelectedDatabases] = selectedDatabasesState;

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedLanguages([]);
    setSelectedFrameworks([]);
    setSelectedDevOps([]);
    setSelectedDatabases([]);
  };

  const addCategory = (category: CATEGORY) =>
    setSelectedCategories([...selectedCategories, category]);
  const removeCategory = (category: CATEGORY) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };
  const addLanguage = (language: Language) =>
    setSelectedLanguages([...selectedLanguages, language]);
  const removeLanguage = (language: Language) => {
    setSelectedLanguages(selectedLanguages.filter((l) => l !== language));
  };
  const addFramework = (framework: Framework) =>
    setSelectedFrameworks([...selectedFrameworks, framework]);
  const removeFramework = (framework: Framework) => {
    setSelectedFrameworks(selectedFrameworks.filter((f) => f !== framework));
  };
  const addDevOps = (devOps: DevOps) =>
    setSelectedDevOps([...selectedDevOps, devOps]);
  const removeDevOps = (devOps: DevOps) => {
    setSelectedDevOps(selectedDevOps.filter((d) => d !== devOps));
  };
  const addDatabase = (database: Database) =>
    setSelectedDatabases([...selectedDatabases, database]);
  const removeDatabase = (database: Database) => {
    setSelectedDatabases(selectedDatabases.filter((d) => d !== database));
  };

  return (
    <Container>
      <Typography as="h4">Sections</Typography>
      <Spacer height={8} />
      <Button href={`#${EXPERIENCE_HEADER_ID}`}>Experience</Button>
      <Spacer height={4} />
      <Button href={`#${PROJECTS_HEADER_ID}`}>Projects</Button>
      <Spacer height={16} />
      <Row>
        <Typography as="h4">Filter</Typography>
        <Spacer width={16} />
        <Button onClick={clearFilters}>
          <FaTimesCircle className="smaller-icon" />
        </Button>
      </Row>
      <Spacer height={8} />
      {screenSize === 'desktop' && (
        <>
          <Typography as="p">
            <i>Hold shift to scroll horizontally.</i>
          </Typography>
          <Spacer height={8} />
        </>
      )}
      <Typography as="h5" secondary>
        Categories
      </Typography>
      <Spacer height={12} />
      <FilterContainer>
        {Object.values(CATEGORY).map((category, index) => (
          <Row key={category}>
            <Filter
              isSelected={selectedCategories.includes(category)}
              tech={category}
              add={addCategory}
              remove={removeCategory}
            />
            {index !== Object.values(CATEGORY).length - 1 && (
              <Spacer width={4} />
            )}
          </Row>
        ))}
      </FilterContainer>
      <Spacer height={8} />
      <Typography as="h5" secondary>
        Languages
      </Typography>
      <Spacer height={12} />
      <FilterContainer>
        {languages.map((language, index) => (
          <Row key={language}>
            <Filter
              isSelected={selectedLanguages.includes(language)}
              tech={language}
              add={addLanguage}
              remove={removeLanguage}
            />
            {index !== languages.length - 1 && <Spacer width={4} />}
          </Row>
        ))}
      </FilterContainer>
      <Spacer height={8} />
      <Typography as="h5" secondary>
        Frameworks
      </Typography>
      <Spacer height={12} />
      <FilterContainer>
        {frameworks.map((framework, index) => (
          <Row key={framework}>
            <Filter
              isSelected={selectedFrameworks.includes(framework)}
              tech={framework}
              add={addFramework}
              remove={removeFramework}
            />
            {index !== frameworks.length - 1 && <Spacer width={4} />}
          </Row>
        ))}
      </FilterContainer>
      <Spacer height={8} />
      <Typography as="h5" secondary>
        Dev Ops
      </Typography>
      <Spacer height={12} />
      <FilterContainer>
        {devOps.map((devOps, index) => (
          <Row key={devOps}>
            <Filter
              isSelected={selectedDevOps.includes(devOps)}
              tech={devOps}
              add={addDevOps}
              remove={removeDevOps}
            />
            {index !== devOps.length - 1 && <Spacer width={4} />}
          </Row>
        ))}
      </FilterContainer>
      <Spacer height={8} />
      <Typography as="h5" secondary>
        Databases
      </Typography>
      <Spacer height={12} />
      <FilterContainer>
        {databases.map((database, index) => (
          <Row key={database}>
            <Filter
              isSelected={selectedDatabases.includes(database)}
              tech={database}
              add={addDatabase}
              remove={removeDatabase}
            />
            {index !== database.length - 1 && <Spacer width={4} />}
          </Row>
        ))}
      </FilterContainer>
      <Spacer height={16} />
      <Typography as="h4">More</Typography>
      <Spacer height={8} />
      <Button href="/resume.pdf">View PDF</Button>
    </Container>
  );
};

export default Menu;
