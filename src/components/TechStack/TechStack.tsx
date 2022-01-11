import IconLink from 'components/IconLink';
import Row from 'components/Row';
import Spacer from 'components/Spacer';
import React from 'react';
import styled from 'styled-components';
import { TECH, Tech } from 'utils/tech';

const Container = styled(Row)`
  flex-wrap: wrap;
`;

type Props = {
  tech: TECH[];
};

const TechStack: React.FC<Props> = ({ tech }) => {
  return (
    <Container fullWidth>
      {tech.map((value, index) => (
        <Row key={value}>
          <IconLink src={Tech[value].icon} href={Tech[value].link} />
          {index <= tech.length - 1 && <Spacer width={16} />}
        </Row>
      ))}
    </Container>
  );
};

export default TechStack;
