import CircularImage from 'components/CircularImage';
import Column from 'components/Column';
import { RAIL_SPACING } from 'components/SectionContainer';
import Spacer from 'components/Spacer';
import Summary from 'components/Summary';
import Typography from 'components/Typography';
import React from 'react';
import styled from 'styled-components';

import { MAX_COLUMN_WIDTH } from '../styles';

const Container = styled(Column)`
  padding: 0 ${RAIL_SPACING}px;
  width: calc(100% - ${2 * RAIL_SPACING}px);
`;

const Hero: React.FC = () => {
  return (
    <Container alignItems="center">
      <CircularImage
        src="/assets/pro_pic.png"
        width={MAX_COLUMN_WIDTH}
        height={MAX_COLUMN_WIDTH}
        unoptimized={process.env.NODE_ENV === 'development'} // https://github.com/vercel/next.js/issues/24421
      />
      <Spacer height={16} />
      <Summary alignItems="center">
        <Typography as="h1" center>
          Hi there!
        </Typography>
        <Spacer height={16} />
        <Typography as="p" center>
          My name is Chris and I'm a final year student at the University of
          Waterloo pursuing a Bachelor of Computer Science - Minor in
          Statistics.
        </Typography>
      </Summary>
    </Container>
  );
};

export default Hero;
