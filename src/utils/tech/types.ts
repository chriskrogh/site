import { IconType } from 'react-icons';

export enum TECH {
  ANDROID = 'Android',
  APOLLO = 'Apollo',
  AWS = 'AWS',
  AZURE = 'Azure',
  AZURE_FUNCTIONS = 'Azure\u00a0Functions',
  CSHARP = 'C#',
  CSS = 'CSS',
  CHAI = 'Chai',
  CYPRESS = 'Cypress',
  DOCKER = 'Docker',
  DOTNET = '.NET',
  ETHERS = 'Ethers',
  EXPRESS = 'Express',
  FIGMA = 'Figma',
  GITHUB_ACTIONS = 'GitHub\u00a0Actions',
  GRAPHQL = 'GraphQL',
  HARDHAT = 'Hardhat',
  HTML = 'HTML',
  IONIC = 'Ionic',
  JAVA = 'Java',
  JAVASCRIPT = 'JavaScript',
  JEST = 'Jest',
  KUBERNETES = 'Kubernetes',
  MONGO = 'MongoDB',
  MYSQL = 'MySQL',
  NEXTJS = 'NextJS',
  NODE = 'Node',
  PYTHON = 'Python',
  REACT = 'React',
  REACT_NATIVE = 'React\u00a0Native',
  REDIS = 'Redis',
  RELAY = 'Relay',
  SOLIDITY = 'Solidity',
  SWIFT = 'Swift',
  TRAVIS_CI = 'Travis\u00a0CI',
  TYPESCRIPT = 'TypeScript',
}

export type IconLink = {
  icon: IconType;
  link: string;
};
