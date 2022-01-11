import { IconType } from 'react-icons';

export enum TECH {
  ANDROID = 'ANDROID',
  APOLLO = 'APOLLO',
  AWS = 'AWS',
  AZURE = 'AZURE',
  AZURE_FUNCTIONS = 'AZURE_FUNCTIONS',
  CSHARP = 'CSHARP',
  CSS = 'CSS',
  DOCKER = 'DOCKER',
  DOTNET = 'DOTNET',
  ETHERS = 'ETHERS',
  FIGMA = 'FIGMA',
  GRAPHQL = 'GRAPHQL',
  HARDHAT = 'HARDHAT',
  HTML = 'HTML',
  IONIC = 'IONIC',
  JAVA = 'JAVA',
  JAVASCRIPT = 'JAVASCRIPT',
  KUBERNETES = 'KUBERNETES',
  MONGO = 'MONGO',
  MYSQL = 'MYSQL',
  NEXTJS = 'NEXTJS',
  NODE = 'NODE',
  PYTHON = 'PYTHON',
  REACT = 'REACT',
  REACT_NATIVE = 'REACT_NATIVE',
  REDIS = 'REDIS',
  RELAY = 'RELAY',
  SOLIDITY = 'SOLIDITY',
  SWIFT = 'SWIFT',
  TYPESCRIPT = 'TYPESCRIPT',
}

export type IconLink = {
  icon: IconType;
  link: string;
};
