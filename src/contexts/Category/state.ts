import { createContext } from 'react';

import { CATEGORY } from './types';

export type State = {
  category: CATEGORY;
  setCategory: (category: CATEGORY) => void;
};

export const initialState: State = {
  category: CATEGORY.EXPERIENCE,
  setCategory: (category: CATEGORY) => {
    void category;
  },
};

export const CategoryContext = createContext(initialState);
