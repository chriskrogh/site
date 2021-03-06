import styled from 'styled-components';

export const RAIL_SPACING = 16;

const SectionContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  width: calc(100% - ${2 * RAIL_SPACING});
  padding: 0 ${RAIL_SPACING}px;

  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: center;
  align-items: center;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

export default SectionContainer;
