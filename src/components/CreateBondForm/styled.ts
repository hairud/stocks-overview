import styled from 'styled-components';

const Container = styled.div`
  height: 204px;
  width: 100%;
  padding: 24px;
  max-width: 740px;
  border: 1px solid #151515;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 0px 0px;
`;

const InputWrap = styled.div`
  min-width: calc((100% - 24px) / 2);
  margin: 0px 12px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export { Container, Row, InputWrap, ButtonWrap };
