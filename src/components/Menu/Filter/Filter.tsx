import Typography from 'components/Typography';
import React from 'react';
import styled from 'styled-components';

const HEIGHT = 32;

type WrapperProps = {
  isSelected: boolean;
};
const Wrapper = styled.button<WrapperProps>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 0;
  margin: 0;
  height: ${HEIGHT}px;
  border-radius: ${HEIGHT / 2}px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgba(255, 255, 255, 0.25)' : 'initial'};
  :hover {
    background-color: ${({ isSelected }) =>
      isSelected ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.25)'};
  }
`;

type Props<T> = WrapperProps & {
  tech: T;
  add: (tech: T) => void;
  remove: (tech: T) => void;
};

function Filter<T>({ tech, isSelected, add, remove }: Props<T>): JSX.Element {
  const handleClick = () => {
    if (isSelected) {
      remove(tech);
    } else {
      add(tech);
    }
  };

  return (
    <Wrapper isSelected={isSelected} onClick={handleClick}>
      <Typography as="p">{tech}</Typography>
    </Wrapper>
  );
}

export default Filter;
