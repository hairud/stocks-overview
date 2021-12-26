import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  min-height: 224px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  border-radius: 8px;
`;

const FormChange = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const FormTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  margin-right: 24px;
`;

const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  max-height: 128px;
`;

const FormTitleText = styled.span`
  font-weight: bold;
`;

export { Container, FormChange, FormTitle, FormWrap, FormTitleText, Image, ImageWrap };
