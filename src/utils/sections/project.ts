import { TECH } from 'utils/tech';

import { PROJECT, ProjectSection } from './types';

export const ProjectSections: Record<PROJECT, ProjectSection> = {
  [PROJECT.CARIBTO]: {
    image: '/assets/caribto_logo.png',
    title: 'Caribto',
    descriptions: [
      'Designed and implemented fiat on / off ramp platform for the Caribbean.',
      'Tested and deployed an ERC20 token preset from OpenZeppelin to the Polygon Mumbai test network using Hardhat.',
      'Crafted a modern exchange experience that mints and burns tokens with React, Ethers and NextJS.',
    ],
    link: 'https://caribto.com',
    gitHubLink: 'https://github.com/chriskrogh/caribto',
    figmaLink: 'https://www.figma.com/file/Ny1CEdeYSnOeFw9EBDsnbX/Caribto',
    tech: [
      TECH.REACT,
      TECH.NEXTJS,
      TECH.ETHERS,
      TECH.HARDHAT,
      TECH.TYPECHAIN,
      TECH.CHAI,
      TECH.TYPESCRIPT,
      TECH.SOLIDITY,
    ],
  },
  [PROJECT.COLORZ]: {
    image: '/assets/colorz_logo.png',
    title: 'Colorz',
    descriptions: [
      'Built a Dapp that allows users to mint their favourite colors on the blockchain as NFTs.',
      'Tested and deployed an ERC721 token preset from OpenZeppelin to the Polygon Mumbai test network using Hardhat.',
      'Designed a simple experience that mints colors with React, Ethers and NextJS.',
    ],
    link: 'https://colorz-chi.vercel.app/',
    gitHubLink: 'https://github.com/chriskrogh/colorz',
    tech: [
      TECH.REACT,
      TECH.NEXTJS,
      TECH.ETHERS,
      TECH.HARDHAT,
      TECH.TYPECHAIN,
      TECH.CHAI,
      TECH.TYPESCRIPT,
      TECH.SOLIDITY,
    ],
  },
  [PROJECT.SONG_STATS]: {
    image: '/assets/song_stats_logo.png',
    title: 'Song Stats',
    descriptions: [
      'Built a web app that uses Spotify APIs to show insightful summaries about songs and artists.',
      'Implemented queries using TypeORM and MySql that fetch missing fragments of data from Spotify when necessary.',
    ],
    gitHubLink: 'https://github.com/Dimatsa/cs348-database',
    tech: [
      TECH.REACT,
      TECH.NODE,
      TECH.EXPRESS,
      TECH.MYSQL,
      TECH.DOCKER,
      TECH.TYPESCRIPT,
    ],
  },
  [PROJECT.MORE_NOTES]: {
    image: '/assets/another_note_app_logo.png',
    title: 'Knote',
    descriptions: [
      'Built a note app for software engineers using Kotlin that stores notes in a PostgreSQL database.',
      'Supports markdown, syntax highlighting, search and sharing.',
    ],
    tech: [
      TECH.KTOR,
      TECH.POSTGRES,
      TECH.KOTLIN,
      TECH.HTML,
      TECH.CSS,
      TECH.JAVASCRIPT,
    ],
  },
  [PROJECT.LIFE_LOGS]: {
    image: '/assets/life_logs_logo.png',
    title: 'Life Logs',
    descriptions: [
      'Developed an Android app that uses NLP to generate meaningful summaries about your life after you tell it about your day.',
      'Created a NodeJS server to handle authentication and data backups.',
      'Designed a simple but impactful user experience on Figma.',
    ],
    gitHubLink: 'https://github.com/cs446-software-design-architecture/app',
    figmaLink:
      'https://www.figma.com/file/FgGQL83PXAF6aDlG6DGxwi/V1?node-id=10%3A114',
    tech: [
      TECH.ANDROID,
      TECH.NODE,
      TECH.EXPRESS,
      TECH.MONGO,
      TECH.JAVA,
      TECH.TYPESCRIPT,
    ],
  },
  [PROJECT.FINDER]: {
    image: '/assets/finder_logo.svg',
    title: 'Finder',
    descriptions: [
      'Designed a mobile app for the Women Initiated Progress (WIP) Hackathon 2021 that allows users to monitor the location of their close friends and family members.',
    ],
    figmaLink:
      'https://www.figma.com/file/pthaSVKKuRli2TGAi3l2JR/MVP?node-id=6%3A159',
    tech: [],
  },
  [PROJECT.ANOTHER_NOTE_APP]: {
    image: '/assets/another_note_app_logo.png',
    title: 'Another Note App',
    descriptions: [
      'Created a note app using React Concurrent Mode and Relay to experiment with the new frontend paradigm.',
      'Developed a NodeJS server that used GraphQL subscriptions to update the client when notes were edited.',
    ],
    gitHubLink: 'https://github.com/chriskrogh/another-note-app',
    tech: [
      TECH.REACT,
      TECH.RELAY,
      TECH.GRAPHQL,
      TECH.NODE,
      TECH.MONGO,
      TECH.AWS,
      TECH.TYPESCRIPT,
      TECH.JAVASCRIPT,
    ],
  },
  [PROJECT.ACS]: {
    image: '/assets/acs_logo.png',
    title: 'ACS',
    descriptions: [
      'Collaborated on the website for the Association of Caribbean Students (ACS) at the University of Waterloo.',
      'Added a voting feature that included compression of video submissions and uploads to AWS.',
    ],
    link: 'https://uwacs.club/',
    gitHubLink: 'https://github.com/uwaterlooacs/acs',
    tech: [
      TECH.REACT,
      TECH.NODE,
      TECH.EXPRESS,
      TECH.MONGO,
      TECH.AWS,
      TECH.TYPESCRIPT,
    ],
  },
  [PROJECT.KIT]: {
    image: '/assets/kit.png',
    title: 'KIT',
    descriptions: [
      'Wrote a cron job that automates WhatsApp messages to friends to keep in touch during the pandemic.',
    ],
    gitHubLink: 'https://github.com/chriskrogh/kit',
    tech: [TECH.PYTHON],
  },
  [PROJECT.VINGS]: {
    image: '/assets/vings_logo.svg',
    title: 'Vings',
    descriptions: [
      'Developed and launched an expense tracker app that accumulated over 700 users on both iOS and Android.',
      'Engineered a service using Azure functions that cached exchange rates, to reduce the number of calls to an external API.',
    ],
    gitHubLink: 'https://github.com/chriskrogh/Vings',
    tech: [TECH.REACT_NATIVE, TECH.AZURE_FUNCTIONS, TECH.SWIFT],
  },
  [PROJECT.SOCKET_CHAT]: {
    image: '/assets/socket_chat.png',
    title: 'Socket Chat',
    descriptions: [
      'Created a chat web app using NodeJS, Express, and Socket.io to learn more about web sockets.',
    ],
    gitHubLink: 'https://github.com/chriskrogh/socket-chat',
    tech: [TECH.HTML, TECH.CSS, TECH.JAVASCRIPT],
  },
};
