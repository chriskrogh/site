import styled, { keyframes } from 'styled-components';

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
  background: linear-gradient(180deg, #1ed760 0%, #70ff00 100%);
  animation: ${spin} 8s linear infinite;
`;

export default Point;
