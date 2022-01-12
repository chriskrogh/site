import Column from 'components/Column';
import IconLink from 'components/IconLink';
import Point from 'components/Point';
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
import { PROJECT_SECTION, ProjectSections } from 'utils/sections';

type Props = {
  section: PROJECT_SECTION;
  reverse?: boolean;
};

const ProjectSection: React.FC<Props> = ({ section, reverse }) => {
  const { image, title, descriptions, link, tech, gitHubLink, figmaLink } =
    ProjectSections[section];

  return (
    <SectionContainer reverse={reverse}>
      <Image
        src={image}
        width={MAX_COLUMN_WIDTH}
        height={MAX_COLUMN_WIDTH}
        objectFit="cover"
        unoptimized={process.env.NODE_ENV === 'development'} // https://github.com/vercel/next.js/issues/24421
        alt="logo"
      />
      <Spacer width={COLUMN_GAP_SIZE} height={16} />
      <Summary justifyContent="center" alignItems="space-between" fullWidth>
        <Row justifyContent="space-between" alignItems="center">
          {link ? (
            <Link href={link}>
              <a>
                <Typography as="h3">{title}</Typography>
              </a>
            </Link>
          ) : (
            <Typography as="h3">{title}</Typography>
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
        {descriptions.map((description, index) => (
          <Column key={description}>
            {index > 0 && <Spacer height={4} />}
            <Row justifyContent="center" fullWidth>
              <Point />
              <Spacer width={8} />
              <Typography as="p">{description}</Typography>
            </Row>
          </Column>
        ))}
        <Spacer height={16} />
        <TechStack tech={tech} />
      </Summary>
    </SectionContainer>
  );
};

export default ProjectSection;
