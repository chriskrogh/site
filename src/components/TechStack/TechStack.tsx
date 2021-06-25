import IconLink from 'components/IconLink';
import Row from 'components/Row';
import Spacer from 'components/Spacer';
import React from 'react';
import styled from 'styled-components';

import { TechMap } from './TechMap';
import { TECH } from './types';

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
          <IconLink src={TechMap[value].icon} href={TechMap[value].link} />
          {index <= tech.length - 1 && <Spacer width={16} />}
        </Row>
      ))}
    </Container>
  );
};

export default TechStack;
