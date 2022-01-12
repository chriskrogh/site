import Button from 'components/Button';
import Column from 'components/Column';
import Row from 'components/Row';
import Spacer from 'components/Spacer';
import Typography from 'components/Typography';
import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';
import {
  Database,
  DevOps,
  Framework,
  getSortedFilters,
  Language,
} from 'utils/sections';

import Filter from './Filter';

export const EXPERIENCE_HEADER_ID = 'experience';
export const PROJECTS_HEADER_ID = 'projects';

const { languages, frameworks, devOps, databases } = getSortedFilters();

const Container = styled(Column)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 32px 0 0 32px;
  background-color: rgba(255, 255, 255, 0.05);
`;

const FilterContainer = styled(Row)`
  max-width: 150px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

type Props = {
  selectedLanguagesState: [Language[], (languages: Language[]) => void];
  selectedFrameworksState: [Framework[], (frameworks: Framework[]) => void];
  selectedDevOpsState: [DevOps[], (devOps: DevOps[]) => void];
  selectedDatabasesState: [Database[], (databases: Database[]) => void];
};

const Menu: React.FC<Props> = ({
  selectedLanguagesState,
  selectedFrameworksState,
  selectedDevOpsState,
  selectedDatabasesState,
}) => {
  const [selectedLanguages, setSelectedLanguages] = selectedLanguagesState;
  const [selectedFrameworks, setSelectedFrameworks] = selectedFrameworksState;
  const [selectedDevOps, setSelectedDevOps] = selectedDevOpsState;
  const [selectedDatabases, setSelectedDatabases] = selectedDatabasesState;

  const clearFilters = () => {
    setSelectedLanguages([]);
    setSelectedFrameworks([]);
    setSelectedDevOps([]);
    setSelectedDatabases([]);
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
      <Row justifyContent="space-between" fullWidth>
        <Typography as="h4">Filters</Typography>
        <Button onClick={clearFilters}>
          <FaTimesCircle className="smaller-icon" />
        </Button>
      </Row>
      <Spacer height={8} />
      <Typography as="p" secondary>
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
      <Typography as="p" secondary>
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
      <Typography as="p" secondary>
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
      <Typography as="p" secondary>
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
      <Spacer height={8} />
      <Typography as="h4">More</Typography>
      <Spacer height={8} />
      <Button href="/resume.pdf">View PDF</Button>
    </Container>
  );
};

export default Menu;
