import styled from 'styled-components';
import { COLORS } from '#constants/colors';

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  font: inherit;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${COLORS.BLACK};

  &::placeholder {
    color: ${COLORS.BLACK}99;
  }
`;

export { Input };
