import { TECH } from 'utils/tech';

import { EXPERIENCE, ExperienceSection } from './types';

export const ExperienceSections: Record<EXPERIENCE, ExperienceSection> = {
  [EXPERIENCE.FAIRE]: {
    image: '/assets/faire_logo.png',
    title: 'Faire',
    descriptions: [
      'Built several features to improve the brand referral experience at Faire',
      'Leading our migration to React Hooks',
    ],
    link: 'https://faire.com',
    tech: [
      TECH.REACT,
      TECH.NODE,
      TECH.EXPRESS,
      TECH.JEST,
      TECH.CYPRESS,
      TECH.TYPESCRIPT,
    ],
    position: 'Software Engineer',
    duration: {
      start: new Date(2022, 3, 26),
    },
  },
  [EXPERIENCE.ZED_LABS]: {
    image: '/assets/zed_logo.jpeg',
    title: 'Zed Labs',
    descriptions: [
      'Migrated from Firebase to an Apollo server to support typed GraphQL requests for authentication and wallet transactions.',
      'Configured CICD using GitHub Actions and Docker to build and deploy our server to a staging environment.',
      'Implemented point of sale transaction and employee management features for merchants to manage e-money payments.',
    ],
    link: 'https://zed.io',
    tech: [
      TECH.REACT,
      TECH.REACT_NATIVE,
      TECH.NODE,
      TECH.APOLLO,
      TECH.GRAPHQL,
      TECH.POSTGRES,
      TECH.DOCKER,
      TECH.GITHUB_ACTIONS,
      TECH.GCP,
      TECH.TYPESCRIPT,
    ],
    position: 'Software Engineer',
    duration: {
      start: new Date(2022, 1, 17),
    },
  },
  [EXPERIENCE.DOT]: {
    image: '/assets/dot_logo.png',
    title: 'Dot',
    descriptions: [
      'Architected, designed, and implemented an ewallet platform for Trinidad and Tobago.',
      'Crafted a modern, mobile wallet user experience in Figma and implemented it in React Native.',
      'Engineered a GraphQL microservice backend using Apollo Federation that handles authentication and processes peer-to-peer and VISA transactions.',
      'Configured container orchestration using Kubernetes to integrate with GitHub actions to manage the CICD pipeline.',
    ],
    link: 'https://dot.cash',
    tech: [
      TECH.REACT,
      TECH.REACT_NATIVE,
      TECH.NEXTJS,
      TECH.APOLLO,
      TECH.GRAPHQL,
      TECH.MONGO,
      TECH.REDIS,
      TECH.DOCKER,
      TECH.KUBERNETES,
      TECH.GITHUB_ACTIONS,
      TECH.AZURE,
      TECH.TYPESCRIPT,
    ],
    position: 'Founder, Software Engineer',
    duration: {
      start: new Date(2020, 10, 1),
      end: new Date(2021, 9, 1),
    },
  },
  [EXPERIENCE.FAIRE_CO_OP]: {
    image: '/assets/faire_logo.png',
    title: 'Faire',
    descriptions: [
      'Built amazing experiences using React like carousels and banners for Faire Winter Market, a search component for editing preorders, and prompts for fixing cart issues.',
      'Restructured an internal NodeJS server into a monorepo using yarn workspaces to add a frontend for triggering actions manually.',
      'Configured end to end tests to also run on mobile web using Cypress to increase test coverage.',
    ],
    link: 'https://faire.com',
    tech: [
      TECH.REACT,
      TECH.NODE,
      TECH.EXPRESS,
      TECH.JEST,
      TECH.CYPRESS,
      TECH.TRAVIS_CI,
      TECH.TYPESCRIPT,
    ],
    position: 'Frontend Engineer Co-op',
    duration: {
      start: new Date(2021, 0, 3),
      end: new Date(2021, 3, 26),
    },
  },
  [EXPERIENCE.SYS]: {
    image: '/assets/sys_logo.png',
    title: 'Sell Your Stuff',
    descriptions: [
      'Implemented an order management experience using React and Apollo for sellers on the platform.',
      'Introduced product and engineering design docs to streamline communication between team members.',
    ],
    link: 'https://sellyourstuff.tt/',
    tech: [
      TECH.REACT,
      TECH.NEXTJS,
      TECH.APOLLO,
      TECH.GRAPHQL,
      TECH.MONGO,
      TECH.NODE,
      TECH.TYPESCRIPT,
    ],
    position: 'Software Engineer',
    duration: {
      start: new Date(2020, 7, 3),
      end: new Date(2021, 0, 2),
    },
  },
  [EXPERIENCE.WEBVELOPER]: {
    image: '/assets/webveloper_logo.svg',
    title: 'Webveloper',
    descriptions: [
      'Implemented performant UI components using memoization to provide a snappy website editor experience.',
      'Reduced dev server build time from ~30s to ~10s by implementing hot module reloading with custom webpack config.',
    ],
    link: 'https://webveloper.com/',
    tech: [TECH.REACT, TECH.NODE, TECH.TYPESCRIPT],
    position: 'Software Engineer Co-Op',
    duration: {
      start: new Date(2020, 3, 15),
      end: new Date(2020, 7, 15),
    },
  },
  [EXPERIENCE.INTUIT]: {
    image: '/assets/intuit_logo.png',
    title: 'Intuit',
    descriptions: [
      'Implemented new pages in TurboTax using object-oriented Java with 100% diff coverage on unit tests.',
      'Reduced TurboTax build time by 45% by parallelizing Typescript compilation with Gulp, saving teammates 40 hours/year.',
      'Automated large manual tasks like regression test script conversion using Replay and VM deployment using PowerShell.',
    ],
    link: 'https://www.intuit.com/',
    tech: [TECH.NODE, TECH.TYPESCRIPT, TECH.JAVA],
    position: 'Software Engineer Co-Op',
    duration: {
      start: new Date(2019, 8, 1),
      end: new Date(2019, 11, 22),
    },
  },
  [EXPERIENCE.MANULIFE]: {
    image: '/assets/manulife_logo.svg',
    title: 'Manulife Financial',
    descriptions: [
      'Implemented API endpoints for a .NET Core web app to receive users’ insurance data and trigger financial calculations.',
      'Developed adaptive React components featuring state persistence with Redux, to hook into back-end calculation services.',
    ],
    link: 'https://www.manulife.com/',
    tech: [TECH.REACT, TECH.DOTNET, TECH.CSHARP, TECH.JAVASCRIPT],
    position: 'Full Stack Engineer Co-Op',
    duration: {
      start: new Date(2019, 0, 3),
      end: new Date(2019, 3, 26),
    },
  },
  [EXPERIENCE.TELEIOS]: {
    image: '/assets/teleios_logo.png',
    title: 'Teleios Systems',
    descriptions: [
      'Developed a Bank Teller bot using Microsoft Bot Framework that featured handoff to humans and Microsoft’s NLU service.',
      'Automated VM creation from snapshots to recover from possible downtime.',
    ],
    link: 'https://www.teleios-systems.com/',
    tech: [TECH.DOTNET, TECH.AZURE, TECH.CSHARP],
    position: 'Software Developer Intern',
    duration: {
      start: new Date(2018, 4, 5),
      end: new Date(2018, 7, 25),
    },
  },
};
