import SectionContainer from 'components/SectionContainer';
import Spacer from 'components/Spacer';
import Summary from 'components/Summary';
import TechStack from 'components/TechStack';
import Typography from 'components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { COLUMN_GAP_SIZE, MAX_COLUMN_WIDTH } from 'sections/styles';
import styled from 'styled-components';
import { formatDate } from 'utils/formatDate';

import { ExperienceSections } from './sections';
import { EXPERIENCE_SECTION } from './types';

const ImageContainer = styled.div`
  max-width: ${MAX_COLUMN_WIDTH}px;
  max-height: ${MAX_COLUMN_WIDTH}px;
`;

type Props = {
  section: EXPERIENCE_SECTION;
  reverse?: boolean;
};

const ExperienceSection: React.FC<Props> = ({ section, reverse }) => {
  const { image, title, description, link, tech, position, duration } =
    ExperienceSections[section];

  return (
    <SectionContainer reverse={reverse}>
      <ImageContainer>
        <Image
          src={image}
          width={MAX_COLUMN_WIDTH}
          height={MAX_COLUMN_WIDTH}
          objectFit="contain"
          unoptimized={process.env.NODE_ENV === 'development'} // https://github.com/vercel/next.js/issues/24421
        />
      </ImageContainer>
      <Spacer width={COLUMN_GAP_SIZE} height={16} />
      <Summary fullWidth>
        {link ? (
          <Link href={link}>
            <a>
              <Typography as="h1">{title}</Typography>
            </a>
          </Link>
        ) : (
          <Typography as="h1">{title}</Typography>
        )}
        <Spacer height={8} />
        <Typography as="h5">{position}</Typography>
        <Spacer height={4} />
        <Typography as="h5">
          {formatDate(duration.start)} -{' '}
          {duration.end ? formatDate(duration.end) : 'Present'}
        </Typography>
        <Spacer height={16} />
        <Typography as="p">{description}</Typography>
        <Spacer height={16} />
        <TechStack tech={tech} />
      </Summary>
    </SectionContainer>
  );
};

export default ExperienceSection;
