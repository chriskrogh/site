import Image from 'next/image';
import styled from 'styled-components';

type Props = {
  size: number;
};

const CircularImage = styled(Image)<Props>`
  border-radius: ${({ size }) => size / 2}px;
`;

export default CircularImage;
