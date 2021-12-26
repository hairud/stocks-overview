import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '#constants/colors';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  background-color: ${COLORS.WHITE};
  box-shadow: ${COLORS.BLACK} 0 0 5px 0px;
  padding: 0px 24px;
  box-sizing: border-box;
`;

const Image = styled.img`
  display: block;
  max-height: 40px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
`;

const Link = styled(RouterLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-right: 8px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

const HeaderIcon = styled.img`
  max-height: 20px;
  min-height: 20px;
  fill: ${COLORS.BLACK};
  cursor: pointer;
`;

export { Header, Image, Title, HeaderIcon, Link, Row };
