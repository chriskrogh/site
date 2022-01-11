import { BaseContentSection } from 'types/section/base';

export enum PROJECT_SECTION {
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

export type ProjectSection = BaseContentSection & {
  link?: string;
  figmaLink?: string;
  gitHubLink?: string;
};
