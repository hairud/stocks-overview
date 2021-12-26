import styled from 'styled-components';
import { COLORS } from '#constants/colors';

const TableRow = styled.tr`
  background: ${COLORS.WHITE};
`;

const TableCell = styled.td<{ align?: string; maxWidth?: string }>`
  padding: 8px 6px;
  border-bottom: 1px solid grey;
  text-align: ${({ align }) => align || 'left'};
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
  max-width: ${({ maxWidth }) => maxWidth || '100%'};

  &:first-child {
    padding: 8px 4px 8px 8px;
  }

  &:last-child {
    padding: 8px 8px 8px 4px;
  }
`;

const Logo = styled.img`
  max-width: 20px;
  max-height: 20px;
`;

export { TableCell, TableRow, Logo };
