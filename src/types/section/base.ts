import { TECH } from 'components/TechStack/types';

export type BaseContentSection = {
  image: string;
  title: string;
  descriptions: string[];
  tech: TECH[];
};
