import Column from 'components/Column';
import Row from 'components/Row';
import Typography from 'components/Typography';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const IMAGE_SIZE = 300;

const CircularImage = styled(Image)`
  border-radius: ${IMAGE_SIZE / 2}px;
`;

const Hero: React.FC = () => {
  return (
    <Row justifyContent="space-around" fullWidth>
      <CircularImage
        src="/assets/pro_pic.png"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        unoptimized
      />
      <Column>
        <Typography as="h1">Hi there!</Typography>
      </Column>
    </Row>
  );
};

export default Hero;
