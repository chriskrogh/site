import CircularImage from 'components/CircularImage';
import Column from 'components/Column';
import { RAIL_SPACING } from 'components/SectionContainer';
import Spacer from 'components/Spacer';
import Summary from 'components/Summary';
import Typography from 'components/Typography';
import React from 'react';
import styled from 'styled-components';

const IMAGE_SIZE = 320;

const Container = styled(Column)`
  padding: 0 ${RAIL_SPACING}px;
  width: calc(100% - ${2 * RAIL_SPACING}px);
`;

const Hero: React.FC = () => {
  return (
    <Container alignItems="center">
      <CircularImage
        src="/assets/pro_pic.png"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        size={IMAGE_SIZE}
        priority
        unoptimized={process.env.NODE_ENV === 'development'} // https://github.com/vercel/next.js/issues/24421
      />
      <Spacer height={16} />
      <Summary alignItems="center">
        <Typography as="h1" center>
          Hi there!
        </Typography>
        <Spacer height={16} />
        <Typography as="p" center>
          My name is Chris and I like to build cool things.
        </Typography>
      </Summary>
    </Container>
  );
};

export default Hero;
