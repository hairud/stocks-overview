import { PortfolioTotalPrice } from '#components/PortfolioTotalPrice';

import logo from '#assets/logo.png';

import * as S from './styled';

const Header = () => (
  <S.Header>
    <S.Row>
      <S.Link to="/">
        <S.Logo src={logo} alt="Logo" />
      </S.Link>
      <S.Title>Stonks</S.Title>
    </S.Row>
    <PortfolioTotalPrice />
  </S.Header>
);

export { Header };
