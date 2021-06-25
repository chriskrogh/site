import Image from 'next/image';
import { MAX_COLUMN_WIDTH } from 'sections/styles';
import styled from 'styled-components';

const CircularImage = styled(Image)`
  border-radius: ${MAX_COLUMN_WIDTH / 2}px;
`;

export default CircularImage;
