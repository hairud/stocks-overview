import styled from 'styled-components';

const TableRow = styled.tr<{ isOdd: boolean }>`
  background: ${({ isOdd }) => (isOdd ? '#e2e3e4' : '#fff')};
`;

const TableCell = styled.td`
  padding: 4px 8px;
`;

const Logo = styled.img`
  max-width: 20px;
  max-height: 20px;
  margin-right: 12px;
`;

export { TableCell, TableRow, Logo };
