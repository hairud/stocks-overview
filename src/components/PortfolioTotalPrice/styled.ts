import styled from 'styled-components';

const TotalPriceWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -15%);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  white-space: nowrap;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 500;
  width: 200px;
`;

const Image = styled.img`
  max-height: 140px;
  margin-bottom: 12px;
`;

export { Image, TotalPriceWrap };
