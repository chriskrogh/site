import { TECH } from 'utils/tech';

import { ExperienceSections } from './experience';
import { ProjectSections } from './project';
import { CATEGORY } from './types';

export const Categories: Record<CATEGORY, TECH[]> = {
  [CATEGORY.BLOCKCHAIN]: [TECH.ETHERS, TECH.HARDHAT, TECH.SOLIDITY],
  [CATEGORY.FRONTEND]: [
    TECH.CSS,
    TECH.HTML,
    TECH.NEXTJS,
    TECH.REACT,
    TECH.RELAY,
  ],
  [CATEGORY.BACKEND]: [
    TECH.AWS,
    TECH.AZURE,
    TECH.DOTNET,
    TECH.GRAPHQL,
    TECH.MONGO,
    TECH.MYSQL,
    TECH.NODE,
    TECH.REDIS,
    TECH.KUBERNETES,
  ],
  [CATEGORY.MOBILE]: [TECH.ANDROID, TECH.REACT_NATIVE, TECH.SWIFT],
};

const LANGUAGES = [
  TECH.CSHARP,
  TECH.CSS,
  TECH.HTML,
  TECH.JAVA,
  TECH.JAVASCRIPT,
  TECH.PYTHON,
  TECH.SOLIDITY,
  TECH.SWIFT,
  TECH.TYPESCRIPT,
] as const;
export type Language = typeof LANGUAGES[number];

const FRAMEWORKS = [
  TECH.ANDROID,
  TECH.APOLLO,
  TECH.DOTNET,
  TECH.ETHERS,
  TECH.HARDHAT,
  TECH.NEXTJS,
  TECH.REACT,
  TECH.REACT_NATIVE,
  TECH.RELAY,
] as const;
export type Framework = typeof FRAMEWORKS[number];

const DEVOPS = [
  TECH.AWS,
  TECH.AZURE,
  TECH.AZURE_FUNCTIONS,
  TECH.GITHUB_ACTIONS,
  TECH.DOCKER,
  TECH.KUBERNETES,
  TECH.TRAVIS_CI,
] as const;
export type DevOps = typeof DEVOPS[number];

const DATABASE = [TECH.MONGO, TECH.MYSQL, TECH.REDIS] as const;
export type Database = typeof DATABASE[number];

const getAllTech = (): TECH[] => {
  const experienceTech: TECH[] = Object.values(ExperienceSections).reduce(
    (acc: TECH[], section) => {
      acc.push(...section.tech);
      return acc;
    },
    [],
  );
  const projectTech: TECH[] = Object.values(ProjectSections).reduce(
    (acc: TECH[], section) => {
      acc.push(...section.tech);
      return acc;
    },
    [],
  );
  return [...experienceTech, ...projectTech];
};

type Popularity = Record<TECH, number>;

export const getPopularity = (): Popularity => {
  const allTech = getAllTech();
  const popularity = Object.values(TECH).reduce((acc, tech: TECH) => {
    acc[tech] = 0;
    return acc;
  }, {} as Popularity);
  allTech.forEach((t) => {
    popularity[t]++;
  });
  return popularity;
};

type Filters = {
  languages: Language[];
  frameworks: Framework[];
  devOps: DevOps[];
  databases: Database[];
};

export const getSortedFilters = (): Filters => {
  const popularity = getPopularity();
  return {
    languages: Array.from(LANGUAGES).sort(
      (a, b) => popularity[b] - popularity[a],
    ),
    frameworks: Array.from(FRAMEWORKS).sort(
      (a, b) => popularity[b] - popularity[a],
    ),
    devOps: Array.from(DEVOPS).sort((a, b) => popularity[b] - popularity[a]),
    databases: Array.from(DATABASE).sort(
      (a, b) => popularity[b] - popularity[a],
    ),
  };
};
