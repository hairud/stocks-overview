import { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { selectBonds, selectPortfolio } from '#store/selectors';
import { getChartData } from '#helpers/getChartData';
import { BondSafeTypes as BondSafeTypesEnum } from '#constants/bonds';
import { ChartWrap } from '#components/ChartWrap';

const BondSafeTypes = () => {
  const bonds = useSelector(selectBonds);
  const portfolio = useSelector(selectPortfolio);

  const data = useMemo(() => {
    const chartData = getChartData({
      colors: ['darkgreen', 'deepskyblue', 'grey'],
      portfolio,
      chartLabel: 'по типу инвестиций',
      categoryLabels: BondSafeTypesEnum,
      getFieldToSum: (portfolioItem) => {
        const bond = bonds[portfolioItem.ticker];
        return bond?.safeType || '';
      },
    });

    return chartData;
  }, [portfolio, bonds]);

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

export { BondSafeTypes };
