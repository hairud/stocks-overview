import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectPortfolio } from '#store/selectors';

import * as S from './styled';

const PortfolioTotalPrice = () => {
  const portfolio = useSelector(selectPortfolio);

  const portfolioTotalPrice = useMemo(() => {
    const totalPortfolioPrice = portfolio.reduce((prev, { totalPrice }) => prev + totalPrice, 0);
    const roundedPrice = Math.trunc(totalPortfolioPrice * 100) / 100;

    return Number(roundedPrice).toLocaleString();
  }, [portfolio]);

  return <S.TotalPriceWrap>{`Общие средства: ${portfolioTotalPrice}$`}</S.TotalPriceWrap>;
};

export { PortfolioTotalPrice };
