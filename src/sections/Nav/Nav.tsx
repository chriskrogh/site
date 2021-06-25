import SectionContainer, { RAIL_SPACING } from 'components/SectionContainer';
import Spacer from 'components/Spacer';
import Typography from 'components/Typography';
import { CategoryContext } from 'contexts/Category';
import { CATEGORY } from 'contexts/Category/types';
import React, { useContext } from 'react';
import { MAX_COLUMN_WIDTH } from 'sections/styles';
import styled from 'styled-components';

const Container = styled(SectionContainer)`
  max-width: ${2 * MAX_COLUMN_WIDTH - 2 * RAIL_SPACING}px;
`;

const CategoryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Nav: React.FC = () => {
  const { category, setCategory } = useContext(CategoryContext);

  const handleExperienceClick = () => setCategory(CATEGORY.EXPERIENCE);
  const handleProjectsClick = () => setCategory(CATEGORY.PROJECTS);

  return (
    <Container>
      <CategoryButton onClick={handleExperienceClick}>
        <Typography as="h3" underline={category === CATEGORY.EXPERIENCE}>
          {CATEGORY.EXPERIENCE}
        </Typography>
      </CategoryButton>
      <Spacer width={16} height={16} />
      <CategoryButton onClick={handleProjectsClick}>
        <Typography as="h3" underline={category === CATEGORY.PROJECTS}>
          {CATEGORY.PROJECTS}
        </Typography>
      </CategoryButton>
    </Container>
  );
};

export default Nav;
