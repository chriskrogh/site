import Column from 'components/Column';
import { MAX_COLUMN_WIDTH } from 'sections/styles';
import styled from 'styled-components';

const Summary = styled(Column)`
  width: ${MAX_COLUMN_WIDTH}px;
  max-width: ${MAX_COLUMN_WIDTH}px;

  @media (max-width: 860px) {
    width: initial;
    max-width: initial;
  }
`;

export default Summary;
