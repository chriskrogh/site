import Button from 'components/Button';
import Column from 'components/Column';
import Spacer from 'components/Spacer';
import Typography from 'components/Typography';
import React from 'react';
import styled from 'styled-components';

export const EXPERIENCE_HEADER_ID = 'experience';
export const PROJECTS_HEADER_ID = 'projects';

const Container = styled(Column)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 32px 0 0 32px;
`;

const Menu: React.FC = () => {
  return (
    <Container>
      <Typography as="h5">Sections</Typography>
      <Spacer height={8} />
      <Button href={`#${EXPERIENCE_HEADER_ID}`}>Experience</Button>
      <Spacer height={4} />
      <Button href={`#${PROJECTS_HEADER_ID}`}>Projects</Button>
      <Spacer height={16} />
      <Typography as="h5">More</Typography>
      <Spacer height={8} />
      <Button href="/resume.pdf">View PDF</Button>
    </Container>
  );
};

export default Menu;
