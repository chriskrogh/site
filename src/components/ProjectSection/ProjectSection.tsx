import IconLink from 'components/IconLink';
import Row from 'components/Row';
import SectionContainer from 'components/SectionContainer';
import Spacer from 'components/Spacer';
import Summary from 'components/Summary';
import TechStack from 'components/TechStack';
import Typography from 'components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SiFigma, SiGithub } from 'react-icons/si';
import { COLUMN_GAP_SIZE, MAX_COLUMN_WIDTH } from 'sections/styles';

import { ProjectSections } from './sections';
import { PROJECT_SECTION } from './types';

type Props = {
  section: PROJECT_SECTION;
  reverse?: boolean;
};

const ProjectSection: React.FC<Props> = ({ section, reverse }) => {
  const { image, title, description, link, tech, gitHubLink, figmaLink } =
    ProjectSections[section];

  return (
    <SectionContainer reverse={reverse}>
      <Image
        src={image}
        width={MAX_COLUMN_WIDTH}
        height={MAX_COLUMN_WIDTH}
        objectFit="cover"
        unoptimized={process.env.NODE_ENV === 'development'} // https://github.com/vercel/next.js/issues/24421
      />
      <Spacer width={COLUMN_GAP_SIZE} height={16} />
      <Summary justifyContent="center" alignItems="space-between" fullWidth>
        <Row justifyContent="space-between" alignItems="center">
          {link ? (
            <Link href={link}>
              <a>
                <Typography as="h1" underline>
                  {title}
                </Typography>
              </a>
            </Link>
          ) : (
            <Typography as="h1">{title}</Typography>
          )}
          <Row>
            {gitHubLink && (
              <>
                <Spacer width={16} />
                <IconLink src={SiGithub} href={gitHubLink} />
              </>
            )}
            {figmaLink && (
              <>
                <Spacer width={16} />
                <IconLink src={SiFigma} href={figmaLink} />
              </>
            )}
          </Row>
        </Row>
        <Spacer height={16} />
        <Typography as="p">{description}</Typography>
        <Spacer height={16} />
        <TechStack tech={tech} />
      </Summary>
    </SectionContainer>
  );
};

export default ProjectSection;
