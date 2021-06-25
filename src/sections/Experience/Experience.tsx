import ExperienceSection from 'components/ExperienceSection';
import { EXPERIENCE_SECTION } from 'components/ExperienceSection/types';
import Spacer from 'components/Spacer';
import React from 'react';

const Experience: React.FC = () => {
  return (
    <>
      <ExperienceSection section={EXPERIENCE_SECTION.DOT} reverse />
      <Spacer height={16} />
      <ExperienceSection section={EXPERIENCE_SECTION.FAIRE} />
      <Spacer height={16} />
      <ExperienceSection section={EXPERIENCE_SECTION.SYS} reverse />
      <Spacer height={16} />
      <ExperienceSection section={EXPERIENCE_SECTION.WEBVELOPER} />
      <Spacer height={16} />
      <ExperienceSection section={EXPERIENCE_SECTION.INTUIT} reverse />
      <Spacer height={16} />
      <ExperienceSection section={EXPERIENCE_SECTION.MANULIFE} />
      <Spacer height={16} />
      <ExperienceSection section={EXPERIENCE_SECTION.TELEIOS} reverse />
    </>
  );
};

export default Experience;
