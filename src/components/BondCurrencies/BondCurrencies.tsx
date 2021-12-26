import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { selectPortfolio } from '#store/selectors';
import { getChartData } from '#helpers/getChartData';
import { BondCurrencies as BondCurrenciesEnum } from '#constants/bonds';
import { ChartWrap } from '#components/ChartWrap';
import { CHART_COLORS } from '#constants/colors';

import money from '#assets/money.png';

import * as S from './styled';

const BondCurrencies = () => {
  const portfolio = useSelector(selectPortfolio);

  const data = useMemo(() => {
    const chartData = getChartData({
      colors: [CHART_COLORS.GREEN, CHART_COLORS.RED, CHART_COLORS.YELLOW],
      categoryLabels: BondCurrenciesEnum,
      portfolio,
      chartLabel: 'по валюте',
      getFieldToSum: (portfolioItem) => portfolioItem.averagePositionPrice.currency,
    });

    return chartData;
  }, [portfolio]);

  return (
    <ChartWrap size="small">
      <S.Image src={money} />
      <Doughnut
        data={data}
        options={{
          cutout: '80%',
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </ChartWrap>
  );
};

export { BondCurrencies };
