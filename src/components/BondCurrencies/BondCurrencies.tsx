import { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { selectPortfolio } from '#store/selectors';
import { getChartData } from '#helpers/getChartData';
import { BondCurrencies as BondCurrenciesEnum } from '#constants/bonds';
import { ChartWrap } from '#components/ChartWrap';

const BondCurrencies = () => {
  const portfolio = useSelector(selectPortfolio);

  const data = useMemo(() => {
    const chartData = getChartData({
      colors: ['darkgreen', 'deepskyblue', 'grey'],
      categoryLabels: BondCurrenciesEnum,
      portfolio,
      chartLabel: 'по валюте',
      getFieldToSum: (portfolioItem) => portfolioItem.averagePositionPrice.currency,
    });

    return chartData;
  }, [portfolio]);

  return (
    <ChartWrap size="small">
      <Pie
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </ChartWrap>
  );
};

export { BondCurrencies };
