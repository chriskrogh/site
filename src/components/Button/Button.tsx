import Typography from 'components/Typography';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

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
  href?: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ href, onClick, children }) => {
  return (
    <Wrapper onClick={onClick}>
      {href ? (
        <Link href={href}>
          <a>
            <Typography as="p">{children}</Typography>
          </a>
        </Link>
      ) : (
        children
      )}
    </Wrapper>
  );
};

export default Button;
