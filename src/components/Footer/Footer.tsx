import Column from 'components/Column';
import IconLink from 'components/IconLink';
import Spacer from 'components/Spacer';
import { TechMap } from 'components/TechStack/TechMap';
import { TECH } from 'components/TechStack/types';
import Typography from 'components/Typography';
import React from 'react';
import styled from 'styled-components';

const RAIL_SPACING = 16;

const Container = styled(Column)`
  padding: 0 16px;
  width: calc(100% - ${2 * RAIL_SPACING});
`;

const Footer: React.FC = () => {
  return (
    <Container justifyContent="center" alignItems="center">
      <Spacer height={16} />
      <Typography as="p" center secondary>
        Built using NextJS and hosted on Vercel.
      </Typography>
      <Spacer height={8} />
      <IconLink
        src={TechMap[TECH.NEXTJS].icon}
        href={TechMap[TECH.NEXTJS].link}
      />
      <Spacer height={16} />
    </Container>
  );
};

export default Footer;
