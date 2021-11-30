import styled, { keyframes } from 'styled-components';
import { COLORS } from 'theme/colors';

const SIZE = 10;

const spin = keyframes`
    from { 
        transform: rotate(0deg); 
    }
    to { 
        transform: rotate(360deg); 
    }
`;

const Point = styled.div`
  min-width: ${SIZE}px;
  min-height: ${SIZE}px;
  border-radius: 50%;
  margin-top: 10px;
  background: linear-gradient(180deg, ${COLORS.lime} 0%, ${COLORS.lemon} 100%);
  animation: ${spin} 1s linear infinite;
`;

export default Point;
