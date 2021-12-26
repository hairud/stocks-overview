import styled from 'styled-components';

const TableContainer = styled.div`
  height: calc(100% - 228px);
  max-height: calc(100% - 228px);
  max-width: 740px;
  min-width: 740px;
  overflow: scroll;
  margin-bottom: 24px;
  border: 1px solid #000;
`;

const TableHeaderCell = styled.th`
  cursor: pointer;
  position: sticky;
  top: 0;
  padding: 8px;
  background: linear-gradient(to bottom, #e2e3e4 94%, black);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export { TableContainer, TableHeaderCell, Table };
