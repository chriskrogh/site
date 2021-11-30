import Typography from 'components/Typography';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: 0;
  margin: 0;
  background: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

type Props = {
  href: string;
};

const Button: React.FC<Props> = ({ children, href }) => {
  return (
    <Wrapper>
      <Link href={href}>
        <a>
          <Typography as="p">{children}</Typography>
        </a>
      </Link>
    </Wrapper>
  );
};

export default Button;
