import ProjectSection from 'components/ProjectSection';
import { PROJECT_SECTION } from 'components/ProjectSection/types';
import Spacer from 'components/Spacer';
import React from 'react';

const Projects: React.FC = () => {
  return (
    <>
      <ProjectSection section={PROJECT_SECTION.LIFE_LOGS} reverse />
      <Spacer height={16} />
      <ProjectSection section={PROJECT_SECTION.SONG_STATS} />
      <Spacer height={16} />
      <ProjectSection section={PROJECT_SECTION.FINDER} reverse />
      <Spacer height={16} />
      <ProjectSection section={PROJECT_SECTION.ACS} />
      <Spacer height={16} />
      <ProjectSection section={PROJECT_SECTION.ANOTHER_NOTE_APP} reverse />
      <Spacer height={16} />
      <ProjectSection section={PROJECT_SECTION.KIT} />
      <Spacer height={16} />
      <ProjectSection section={PROJECT_SECTION.VINGS} reverse />
      <Spacer height={16} />
      <ProjectSection section={PROJECT_SECTION.SOCKET_CHAT} />
    </>
  );
};

export default Projects;
