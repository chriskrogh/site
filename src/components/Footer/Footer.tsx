import Column from 'components/Column';
import IconLink from 'components/IconLink';
import Spacer from 'components/Spacer';
import { TechMap } from 'components/TechStack/TechMap';
import { TECH } from 'components/TechStack/types';
import Typography from 'components/Typography';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Column justifyContent="center" alignItems="center" fullWidth>
      <Spacer height={16} />
      <Typography as="p" secondary>
        This site was built using NextJS and is hosted on Vercel.
      </Typography>
      <Spacer height={8} />
      <IconLink src={TechMap[TECH.NEXT].icon} href={TechMap[TECH.NEXT].link} />
      <Spacer height={16} />
    </Column>
  );
};

export default Footer;
