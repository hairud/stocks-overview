import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectPortfolio } from '#store/selectors';

import * as S from './styled';
import { BondCurrencies } from '#constants/bonds';

import swag from '#assets/swag.png';

const PortfolioTotalPrice = () => {
  const portfolio = useSelector(selectPortfolio);

  const portfolioTotalPrice = useMemo(() => {
    const totalPortfolioPrice = portfolio.reduce((prev, { totalPrice }) => prev + totalPrice, 0);
    const roundedPrice = Math.trunc(totalPortfolioPrice * 100) / 100;

    return Number(roundedPrice).toLocaleString('ru-RU', {
      style: 'currency',
      currency: BondCurrencies.RUB,
      minimumFractionDigits: 2,
    });
  }, [portfolio]);

  return (
    <S.TotalPriceWrap>
      <S.Image src={swag} />
      {portfolioTotalPrice}
    </S.TotalPriceWrap>
  );
};

export { PortfolioTotalPrice };
