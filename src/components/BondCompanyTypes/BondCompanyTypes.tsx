import { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { selectBonds, selectPortfolio } from '#store/selectors';
import { getChartData } from '#helpers/getChartData';
import { BondCompanyTypes as BondCompanyTypesEnum } from '#constants/bonds';
import { ChartWrap } from '#components/ChartWrap';

const BondCompanyTypes = () => {
  const bonds = useSelector(selectBonds);
  const portfolio = useSelector(selectPortfolio);

  const data = useMemo(() => {
    const chartData = getChartData({
      portfolio,
      colors: [
        'darkgreen',
        'gold',
        'crimson',
        'hotpink',
        'violet',
        'blueviolet',
        'slateblue',
        'limegreen',
        'darkolivegreen',
        'darkcyan',
        'aqua',
        'darkblue',
      ],
      chartLabel: 'цена ценных бумаг по отрасли',
      categoryLabels: BondCompanyTypesEnum,
      getFieldToSum: (portfolioItem) => {
        const bondInfo = bonds[portfolioItem.ticker];

        return bondInfo?.companyType || '';
      },
    });

    return chartData;
  }, [bonds, portfolio]);

  return (
    <ChartWrap size="large">
      <Pie data={data} />
    </ChartWrap>
  );
};

export { BondCompanyTypes };
