import styled from 'styled-components';

const Row = styled.div<{ container?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: ${({ container }) => (container ? '24px' : '0px')};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;

  & > * {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export { Row, Column };
