import { BaseContentSection } from 'types/section/base';

export enum EXPERIENCE_SECTION {
  DOT = 'DOT',
  FAIRE = 'FAIRE',
  SYS = 'SYS',
  WEBVELOPER = 'WEBVELOPER',
  INTUIT = 'INTUIT',
  MANULIFE = 'MANULIFE',
  TELEIOS = 'TELEIOS',
}

export type ExperienceSection = BaseContentSection & {
  link: string;
  position: string;
  duration: {
    start: Date;
    end?: Date;
  };
};
