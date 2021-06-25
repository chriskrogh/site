import { BaseContentSection } from 'types/section/base';

export enum EXPERIENCE_SECTION {
  DOT,
  FAIRE,
  SYS,
  WEBVELOPER,
  INTUIT,
  MANULIFE,
  TELEIOS,
}

export type ExperienceSection = BaseContentSection & {
  link: string;
  position: string;
  duration: {
    start: Date;
    end?: Date;
  };
};
