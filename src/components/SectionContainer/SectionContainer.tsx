import styled from 'styled-components';
import { MOBILE_THRESHOLD } from 'utils/useScreenSize';

export const RAIL_SPACING = 16;

const SectionContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  width: 100%;

  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: center;
  align-items: center;

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    flex-direction: column;
  }
`;

export default SectionContainer;
