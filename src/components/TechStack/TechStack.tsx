import IconLink from 'components/IconLink';
import Row from 'components/Row';
import Spacer from 'components/Spacer';
import React from 'react';
import styled from 'styled-components';
import { TECH, TechIconLinks } from 'utils/tech';

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
          <IconLink
            src={TechIconLinks[value].icon}
            href={TechIconLinks[value].link}
          />
          {index <= tech.length - 1 && <Spacer width={16} />}
        </Row>
      ))}
    </Container>
  );
};

export default TechStack;
