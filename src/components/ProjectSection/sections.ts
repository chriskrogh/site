import { TECH } from 'components/TechStack/types';

import { PROJECT_SECTION, ProjectSection } from './types';

export const ProjectSections: Record<PROJECT_SECTION, ProjectSection> = {
  [PROJECT_SECTION.LIFE_LOGS]: {
    image: '/assets/life_logs_logo.png',
    title: 'Life Logs',
    descriptions: [''],
    gitHubLink: 'https://github.com/cs446-software-design-architecture/app',
    figmaLink:
      'https://www.figma.com/file/FgGQL83PXAF6aDlG6DGxwi/V1?node-id=10%3A114',
    tech: [TECH.JAVA, TECH.ANDROID, TECH.MONGO],
  },
  [PROJECT_SECTION.SONG_STATS]: {
    image: '/assets/song_stats_logo.png',
    title: 'Song Stats',
    descriptions: [''],
    gitHubLink: 'https://github.com/Dimatsa/cs348-database',
    tech: [TECH.TYPESCRIPT, TECH.REACT, TECH.NODE, TECH.MYSQL],
  },
  [PROJECT_SECTION.FINDER]: {
    image: '/assets/finder_logo.svg',
    title: 'Finder',
    descriptions: [''],
    figmaLink:
      'https://www.figma.com/file/pthaSVKKuRli2TGAi3l2JR/MVP?node-id=6%3A159',
    tech: [TECH.FIGMA],
  },
  [PROJECT_SECTION.ANOTHER_NOTE_APP]: {
    image: '/assets/another_note_app_logo.png',
    title: 'Another Note App',
    descriptions: [''],
    gitHubLink: 'https://github.com/chriskrogh/another-note-app',
    tech: [
      TECH.TYPESCRIPT,
      TECH.JAVASCRIPT,
      TECH.REACT,
      TECH.RELAY,
      TECH.GRAPHQL,
      TECH.NODE,
      TECH.MONGO,
    ],
  },
  [PROJECT_SECTION.ACS]: {
    image: '/assets/acs_logo.png',
    title: 'ACS',
    descriptions: [''],
    link: 'https://uwacs.club/',
    gitHubLink: 'https://github.com/uwaterlooacs/acs',
    tech: [TECH.TYPESCRIPT, TECH.REACT, TECH.NODE, TECH.MONGO],
  },
  [PROJECT_SECTION.KIT]: {
    image: '/assets/kit.png',
    title: 'KIT',
    descriptions: [''],
    gitHubLink: 'https://github.com/chriskrogh/kit',
    tech: [TECH.PYTHON],
  },
  [PROJECT_SECTION.VINGS]: {
    image: '/assets/vings.png',
    title: 'Vings',
    descriptions: [''],
    gitHubLink: 'https://github.com/chriskrogh/Vings',
    tech: [TECH.SWIFT, TECH.REACTNATIVE, TECH.AZUREFUNCTIONS],
  },
  [PROJECT_SECTION.SOCKET_CHAT]: {
    image: '/assets/socket_chat.png',
    title: 'Socket Chat',
    descriptions: [''],
    gitHubLink: 'https://github.com/chriskrogh/socket-chat',
    tech: [TECH.JAVASCRIPT, TECH.HTML, TECH.CSS],
  },
};
