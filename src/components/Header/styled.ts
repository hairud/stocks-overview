import { Link as RouterLink } from 'react-router-dom';

import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  background-color: #fff;
  box-shadow: 0 0 2.5px #151515;
  padding: 0px 12px;
`;

const Logo = styled.img`
  display: block;
  max-height: 40px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 12px;
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
`;

export { Header, Logo, Title, Link, Row };
