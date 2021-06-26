import { TECH } from 'components/TechStack/types';

import { EXPERIENCE_SECTION, ExperienceSection } from './types';

export const ExperienceSections: Record<EXPERIENCE_SECTION, ExperienceSection> =
  {
    [EXPERIENCE_SECTION.DOT]: {
      image: '/assets/dot_logo.png',
      title: 'Dot',
      descriptions: [
        'Architected, designed, and implemented an ewallet platform for Trinidad and Tobago!',
        'Engineered a GraphQL microservice backend using Apollo Federation that handles authentication and processes peer-to-peer and VISA transactions.',
        'Configured container orchestration using Kubernetes to integrate with GitHub actions to manage the CICD pipeline.',
        'Crafted a modern, mobile wallet user experience in Figma and implemented it with Ionic Framework and React.',
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
        'Built amazing experiences using React like carousels and banners for Faire Winter Market, a search component for editing preorders, and prompts for fixing cart issues.',
        'Restructured an internal NodeJS server into a monorepo using yarn workspaces to add a frontend for triggering actions manually.',
        'Configured end to end tests to also run on mobile web using Cypress to increase test coverage.',
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
      descriptions: [
        'Implemented an order management experience using React and Apollo for sellers on the platform.',
        'Introduced product and engineering design docs to streamline communication between team members.',
      ],
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
      descriptions: [
        'Implemented performant UI components using memoization to provide a snappy website editor experience.',
        'Reduced dev server build time from ~30s to ~10s by implementing hot module reloading with custom webpack config.',
      ],
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
      descriptions: [
        'Implemented new pages in TurboTax using object-oriented Java with 100% diff coverage on unit tests.',
        'Reduced TurboTax build time by 45% by parallelizing Typescript compilation with Gulp, saving teammates 40 hours/year.',
        'Automated large manual tasks like regression test script conversion using Replay and VM deployment using PowerShell.',
      ],
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
      descriptions: [
        'Implemented API endpoints for a .NET Core web app to receive users’ insurance data and trigger financial calculations.',
        'Developed adaptive React components featuring state persistence with Redux, to hook into back-end calculation services.',
      ],
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
      descriptions: [
        'Developed a Bank Teller bot using Microsoft Bot Framework that featured handoff to humans and Microsoft’s NLU service.',
        'Automated VM creation from snapshots to recover from possible downtime.',
      ],
      link: 'https://www.teleios-systems.com/',
      tech: [TECH.CSHARP, TECH.DOTNET, TECH.AZURE],
      position: 'Software Developer Intern',
      duration: {
        start: new Date(2018, 4, 5),
        end: new Date(2018, 7, 25),
      },
    },
  };
