import SectionContainer from 'components/SectionContainer';
import Spacer from 'components/Spacer';
import Typography from 'components/Typography';
import { CategoryContext } from 'contexts/Category';
import { CATEGORY } from 'contexts/Category/types';
import React, { useContext } from 'react';
import { COLUMN_GAP_SIZE, MAX_COLUMN_WIDTH } from 'sections/styles';
import styled from 'styled-components';

const CategoryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${MAX_COLUMN_WIDTH}px;

  border: none;
  background: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 860px) {
    width: initial;
  }
`;

const Nav: React.FC = () => {
  const { category, setCategory } = useContext(CategoryContext);

  const handleExperienceClick = () => setCategory(CATEGORY.EXPERIENCE);
  const handleProjectsClick = () => setCategory(CATEGORY.PROJECTS);

  return (
    <SectionContainer>
      <CategoryButton onClick={handleExperienceClick}>
        <Typography as="h3" underline={category === CATEGORY.EXPERIENCE}>
          {CATEGORY.EXPERIENCE}
        </Typography>
      </CategoryButton>
      <Spacer width={COLUMN_GAP_SIZE} height={16} />
      <CategoryButton onClick={handleProjectsClick}>
        <Typography as="h3" underline={category === CATEGORY.PROJECTS}>
          {CATEGORY.PROJECTS}
        </Typography>
      </CategoryButton>
    </SectionContainer>
  );
};

export default Nav;
