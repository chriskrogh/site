import { TECH } from 'components/TechStack/types';

import { EXPERIENCE_SECTION, ExperienceSection } from './types';

export const ExperienceSections: Record<EXPERIENCE_SECTION, ExperienceSection> =
  {
    [EXPERIENCE_SECTION.DOT]: {
      image: '/assets/dot_logo.png',
      title: 'Dot',
      descriptions: [
        'Architected, designed, and implemented an ewallet platform for Trinidad and Tobago!',
      ],
      link: 'https://dot.cash',
      tech: [
        TECH.TYPESCRIPT,
        TECH.REACT,
        TECH.IONIC,
        TECH.APOLLO,
        TECH.GRAPHQL,
        TECH.MONGO,
        TECH.REDIS,
        TECH.DOCKER,
        TECH.KUBERNETES,
        TECH.AZURE,
      ],
      position: 'Founder, CTO',
      duration: {
        start: new Date(2020, 10, 1),
      },
    },
    [EXPERIENCE_SECTION.FAIRE]: {
      image: '/assets/faire_logo.png',
      title: 'Faire',
      descriptions: [
        'Built complete features using React like carousels and banners for Faire Winter Market, a search experience for editing preorders, and prompts for fixing cart issues.',
        'Restructured an internal NodeJS server into a monorepo using yarn workspaces to add a frontend for triggering actions manually.',
        'Configured end to end tests to also run on mobile web using Cypress to increase mobile test coverage.',
      ],
      link: 'https://faire.com',
      tech: [TECH.TYPESCRIPT, TECH.REACT, TECH.NODE],
      position: 'Frontend Engineer Co-op',
      duration: {
        start: new Date(2021, 0, 3),
        end: new Date(2021, 3, 26),
      },
    },
    [EXPERIENCE_SECTION.SYS]: {
      image: '/assets/sys_logo.png',
      title: 'Sell Your Stuff',
      descriptions: [''],
      link: 'https://sellyourstuff.tt/',
      tech: [
        TECH.TYPESCRIPT,
        TECH.REACT,
        TECH.APOLLO,
        TECH.GRAPHQL,
        TECH.MONGO,
      ],
      position: 'Software Engineer',
      duration: {
        start: new Date(2020, 7, 3),
        end: new Date(2021, 0, 2),
      },
    },
    [EXPERIENCE_SECTION.WEBVELOPER]: {
      image: '/assets/webveloper_logo.png',
      title: 'Webveloper',
      descriptions: [''],
      link: 'https://webveloper.com/',
      tech: [TECH.TYPESCRIPT, TECH.REACT, TECH.NODE],
      position: 'Software Engineer Co-Op',
      duration: {
        start: new Date(2020, 3, 15),
        end: new Date(2020, 7, 15),
      },
    },
    [EXPERIENCE_SECTION.INTUIT]: {
      image: '/assets/intuit_logo.png',
      title: 'Intuit',
      descriptions: [''],
      link: 'https://www.intuit.com/',
      tech: [TECH.JAVA, TECH.TYPESCRIPT, TECH.NODE],
      position: 'Software Engineer Co-Op',
      duration: {
        start: new Date(2019, 8, 1),
        end: new Date(2019, 11, 22),
      },
    },
    [EXPERIENCE_SECTION.MANULIFE]: {
      image: '/assets/manulife_logo.png',
      title: 'Manulife Financial',
      descriptions: [''],
      link: 'https://www.manulife.com/',
      tech: [TECH.JAVASCRIPT, TECH.REACT, TECH.CSHARP, TECH.DOTNET],
      position: 'Full Stack Engineer Co-Op',
      duration: {
        start: new Date(2019, 0, 3),
        end: new Date(2019, 3, 26),
      },
    },
    [EXPERIENCE_SECTION.TELEIOS]: {
      image: '/assets/teleios_logo.png',
      title: 'Teleios Systems',
      descriptions: [''],
      link: 'https://www.teleios-systems.com/',
      tech: [TECH.CSHARP, TECH.DOTNET, TECH.AZURE],
      position: 'Software Developer Intern',
      duration: {
        start: new Date(2018, 4, 5),
        end: new Date(2018, 7, 25),
      },
    },
  };
