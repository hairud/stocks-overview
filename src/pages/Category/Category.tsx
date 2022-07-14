import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { selectBonds, selectPortfolio } from '#store/selectors';

import * as S from './styled';
import { CHART_COLORS } from '#constants/colors';
import { fetchBondsInfo, fetchPortfolio } from '#store/asyncThunks';
import { BondCompanyTypesNames } from '#constants/bonds';

const BACKGROUND_COLORS = [
  CHART_COLORS.GREEN,
  CHART_COLORS.RED,
  CHART_COLORS.YELLOW,
  CHART_COLORS.BLUE,
  CHART_COLORS.VIOLET,
  CHART_COLORS.LIME,
  CHART_COLORS.LIGHT_GREEN,
  CHART_COLORS.BLACK_BLUE,
  CHART_COLORS.LIGHT_BLUE,
  CHART_COLORS.PALE_BLUE,
  CHART_COLORS.LEMON,
  CHART_COLORS.LIGHT_RED,
  CHART_COLORS.OLIVE,
  CHART_COLORS.DARK_GREEN,
  CHART_COLORS.DARK_BLUE,
  CHART_COLORS.ROSE_RED,
  CHART_COLORS.MANGO,
  CHART_COLORS.CAROCAL,
  CHART_COLORS.DARK_VIOLET,
];

const Category = () => {
  const dispatch = useDispatch();

  const { category } = useParams<{ category: string }>();

  const portfolio = useSelector(selectPortfolio);
  const bondsInfo = useSelector(selectBonds);

  useEffect(() => {
    if (!portfolio) {
      dispatch(fetchPortfolio());
    }

    if (!bondsInfo) {
      dispatch(fetchBondsInfo());
    }
  });

  const chartData = useMemo(() => {
    const filteredPortfolio = portfolio.filter(
      ({ ticker }) => bondsInfo[ticker].companyType === category,
    );

    const sortedPortfolio = filteredPortfolio.sort(
      ({ totalPrice: totalPrice1 }, { totalPrice: totalPrice2 }) => totalPrice2 - totalPrice1,
    );

    const totalPrice = sortedPortfolio.reduce(
      (prev, portfolioItem) => prev + portfolioItem.totalPrice,
      0,
    );

    const { data, labels } = sortedPortfolio.reduce<{ data: string[]; labels: string[] }>(
      (prev, portfolioItem) => {
        prev.labels.push(portfolioItem.name);
        prev.data.push(((portfolioItem.totalPrice / totalPrice) * 100).toFixed(2));

        return prev;
      },
      { labels: [], data: [] },
    );

    return {
      labels,
      datasets: [
        {
          data,
          label: category,
          backgroundColor: BACKGROUND_COLORS,
        },
      ],
    };
  }, [category]);

  return (
    <S.Content>
      <S.Title>{(BondCompanyTypesNames as Record<string, string>)[category]}</S.Title>
      <S.ChartWrap>
        <Bar data={chartData} />
      </S.ChartWrap>
    </S.Content>
  );
};

export { Category };
