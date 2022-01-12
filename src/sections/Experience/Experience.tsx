import Column from 'components/Column';
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
import { COLUMN_GAP_SIZE, MAX_COLUMN_WIDTH } from 'sections/styles';
import styled from 'styled-components';
import { formatDate } from 'utils/formatDate';
import { EXPERIENCE, ExperienceSections } from 'utils/sections';

const ImageContainer = styled.div`
  max-width: ${MAX_COLUMN_WIDTH}px;
  max-height: ${MAX_COLUMN_WIDTH}px;
`;

type Props = {
  section: EXPERIENCE;
  reverse?: boolean;
};

const ExperienceSection: React.FC<Props> = ({ section, reverse }) => {
  const { image, title, descriptions, link, tech, position, duration } =
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
          alt="logo"
        />
      </ImageContainer>
      <Spacer width={COLUMN_GAP_SIZE} height={16} />
      <Summary fullWidth>
        {link ? (
          <Link href={link}>
            <a>
              <Typography as="h3">{title}</Typography>
            </a>
          </Link>
        ) : (
          <Typography as="h3">{title}</Typography>
        )}
        <Spacer height={8} />
        <Typography as="h5">{position}</Typography>
        <Spacer height={4} />
        <Typography as="h5">
          {formatDate(duration.start)} -{' '}
          {duration.end ? formatDate(duration.end) : 'Present'}
        </Typography>
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

export default ExperienceSection;
