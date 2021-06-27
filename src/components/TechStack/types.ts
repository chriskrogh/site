import { IconType } from 'react-icons';

export enum TECH {
  ANDROID = 'ANDROID',
  APOLLO = 'APOLLO',
  AWS = 'AWS',
  AZURE = 'AZURE',
  AZUREFUNCTIONS = 'AZUREFUNCTIONS',
  CSHARP = 'CSHARP',
  CSS = 'CSS',
  DOCKER = 'DOCKER',
  DOTNET = 'DOTNET',
  FIGMA = 'FIGMA',
  GRAPHQL = 'GRAPHQL',
  HTML = 'HTML',
  IONIC = 'IONIC',
  JAVA = 'JAVA',
  JAVASCRIPT = 'JAVASCRIPT',
  KUBERNETES = 'KUBERNETES',
  MONGO = 'MONGO',
  MYSQL = 'MYSQL',
  NEXT = 'NEXT',
  NODE = 'NODE',
  PYTHON = 'PYTHON',
  REACT = 'REACT',
  REACTNATIVE = 'REACTNATIVE',
  REDIS = 'REDIS',
  RELAY = 'RELAY',
  SWIFT = 'SWIFT',
  TYPESCRIPT = 'TYPESCRIPT',
}

export type TechIconLink = {
  icon: IconType;
  link: string;
};
