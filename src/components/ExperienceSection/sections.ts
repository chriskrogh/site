import { TECH } from 'components/TechStack/types';

import { EXPERIENCE_SECTION, ExperienceSection } from './types';

export const ExperienceSections: Record<EXPERIENCE_SECTION, ExperienceSection> =
  {
    [EXPERIENCE_SECTION.DOT]: {
      image: '/assets/dot_logo.png',
      title: 'Dot',
      description: '',
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
      position: 'Founder + Software Engineer',
      duration: {
        start: new Date(2020, 10, 1),
      },
    },
    [EXPERIENCE_SECTION.FAIRE]: {
      image: '/assets/faire_logo.png',
      title: 'Faire',
      description: '',
      link: 'https://faire.com',
      tech: [TECH.TYPESCRIPT, TECH.REACT, TECH.NODE],
      position: 'Frontend Engineer Co-op',
      duration: {
        start: new Date(2021, 0, 3),
        end: new Date(2021, 3, 26),
      },
    },
    [EXPERIENCE_SECTION.SYS]: {
      image: '/assets/faire_logo.png',
      title: 'Sell Your Stuff',
      description: '',
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
      description: '',
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
      description: '',
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
      description: '',
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
      description: '',
      link: 'https://www.teleios-systems.com/',
      tech: [TECH.CSHARP, TECH.DOTNET, TECH.AZURE],
      position: 'Software Developer Intern',
      duration: {
        start: new Date(2018, 4, 5),
        end: new Date(2018, 7, 25),
      },
    },
  };
