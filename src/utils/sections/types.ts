import { TECH } from 'utils/tech';

export type BaseContentSection = {
  image: string;
  title: string;
  descriptions: string[];
  tech: TECH[];
};

export type ExperienceSection = BaseContentSection & {
  link: string;
  position: string;
  duration: {
    start: Date;
    end?: Date;
  };
};

export type ProjectSection = BaseContentSection & {
  link?: string;
  figmaLink?: string;
  gitHubLink?: string;
};

export enum EXPERIENCE {
  DOT = 'DOT',
  FAIRE = 'FAIRE',
  SYS = 'SYS',
  WEBVELOPER = 'WEBVELOPER',
  INTUIT = 'INTUIT',
  MANULIFE = 'MANULIFE',
  TELEIOS = 'TELEIOS',
}

export enum PROJECT {
  CARIBTO = 'CARIBTO',
  LIFE_LOGS = 'LIFE_LOGS',
  SONG_STATS = 'SONG_STATS',
  FINDER = 'FINDER',
  ANOTHER_NOTE_APP = 'ANOTHER_NOTE_APP',
  ACS = 'ACS',
  KIT = 'KIT',
  VINGS = 'VINGS',
  SOCKET_CHAT = 'SOCKET_CHAT',
}

export enum CATEGORY {
  BLOCKCHAIN = 'BLOCKCHAIN',
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
}
