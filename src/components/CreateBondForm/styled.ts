import styled from 'styled-components';
import { COLORS } from '#constants/colors';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${COLORS.BLACK}99;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
`;

const Container = styled.div`
  width: 500px;
  padding: 24px;
  border-radius: 4px;
  background: ${COLORS.WHITE};
  box-shadow: 0 0 12px 0px;

  &:hover {
    cursor: default;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export { Background, Container, Title, Content, ButtonWrap };
