import styled from 'styled-components';

type Props = {
  underline?: boolean;
  center?: boolean;
  secondary?: boolean;
};

const Typography = styled.span<Props>`
  color: ${({ secondary }) =>
    secondary ? 'rgba(255, 255, 255, 0.5)' : 'white'};
  margin: 0;
  border-bottom: ${({ underline }) => (underline ? '1px solid white' : '')};
  text-align: ${({ center }) => (center ? 'center' : '')};
`;

export default Typography;
