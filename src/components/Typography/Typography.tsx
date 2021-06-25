import styled from 'styled-components';

const Typography = styled.span<{ underline?: boolean; center?: boolean }>`
  color: white;
  margin: 0;
  border-bottom: ${({ underline }) => (underline ? '1px solid white' : '')};
  text-align: ${({ center }) => (center ? 'center' : '')};
`;

export default Typography;
