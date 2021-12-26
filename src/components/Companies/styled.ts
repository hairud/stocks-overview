import styled from 'styled-components';
import { COLORS } from '#constants/colors';

const TableContainer = styled.div`
  height: 100%
  max-width: 740px;
  min-width: 740px;
  overflow: scroll;
  box-shadow: ${COLORS.BLACK} 0 0 5px 0px;
  border-radius: 8px;
`;

const TableHeaderCell = styled.th`
  cursor: pointer;
  position: sticky;
  top: 0;
  padding: 8px;
  background: linear-gradient(to bottom, ${COLORS.WHITE} 97%, ${COLORS.BLACK});
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export { TableContainer, TableHeaderCell, Table };
