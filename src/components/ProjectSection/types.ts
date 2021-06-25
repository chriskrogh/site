import { BaseContentSection } from 'types/section/base';

export enum PROJECT_SECTION {
  LIFE_LOGS,
  SONG_STATS,
  FINDER,
  ANOTHER_NOTE_APP,
  ACS,
  KIT,
  VINGS,
  SOCKET_CHAT,
}

export type ProjectSection = BaseContentSection & {
  link?: string;
  figmaLink?: string;
  gitHubLink?: string;
};
