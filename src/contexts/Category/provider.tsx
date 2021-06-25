import React, { useState } from 'react';

import { CategoryContext } from './state';
import { CATEGORY } from './types';

const Provider: React.FC = ({ children }) => {
  const [category, setCategory] = useState<CATEGORY>(CATEGORY.EXPERIENCE);

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default Provider;
