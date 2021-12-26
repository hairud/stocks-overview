import styled from 'styled-components';
import { COLORS } from '#constants/colors';

const Button = styled.button`
  height: 40px;
  font: inherit;
  color: ${COLORS.BLACK};
  border-radius: 4px;
  background-color: ${COLORS.LIGHT_GREEN};
  border: 1px solid ${COLORS.BLACK};

  &:hover {
    cursor: pointer;
  }
`;

export { Button };
