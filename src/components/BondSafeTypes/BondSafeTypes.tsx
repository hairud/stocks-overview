import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { selectBonds, selectPortfolio } from '#store/selectors';
import { getChartData } from '#helpers/getChartData';
import { BondSafeTypesNames } from '#constants/bonds';
import { ChartWrap } from '#components/ChartWrap';
import { CHART_COLORS } from '#constants/colors';

import risk from '#assets/risk.png';

import * as S from './styled';

const BondSafeTypes = () => {
  const bonds = useSelector(selectBonds);
  const portfolio = useSelector(selectPortfolio);

  const data = useMemo(() => {
    const chartData = getChartData({
      colors: [CHART_COLORS.GREEN, CHART_COLORS.RED, CHART_COLORS.YELLOW],
      portfolio,
      chartLabel: 'по типу инвестиций',
      categoryLabels: BondSafeTypesNames,
      getFieldToSum: (portfolioItem) => {
        const bond = bonds[portfolioItem.ticker];
        return bond?.safeType || '';
      },
    });

    return chartData;
  }, [portfolio, bonds]);

  return (
    <ChartWrap size="small">
      <S.Image src={risk} />
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

export { BondSafeTypes };
