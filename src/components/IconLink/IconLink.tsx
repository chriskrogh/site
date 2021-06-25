import Column from 'components/Column';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

const ICON_SIZE = 32;
const ANCHOR_SIZE = ICON_SIZE * 1.75;

const Container = styled(Column)`
  width: ${ANCHOR_SIZE}px;
  height: ${ANCHOR_SIZE}px;
  border-radius: ${ANCHOR_SIZE / 2}px;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

type Props = {
  src: IconType;
  href: string;
};

const IconLink: React.FC<Props> = ({ src, href }) => {
  const IconSrc = src;
  return (
    <Container justifyContent="center" alignItems="center">
      <Link href={href}>
        <a>
          <IconSrc className="ckicon" />
        </a>
      </Link>
    </Container>
  );
};

export default IconLink;
