import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { ArcElement } from 'chart.js';
import { useHistory } from 'react-router-dom';

import { selectBonds, selectPortfolio } from '#store/selectors';
import { getChartData } from '#helpers/getChartData';
import {
  BondCompanyTypes as BondCompanyTypesEnum,
  BondCompanyTypesByNames,
  BondCompanyTypesNames,
} from '#constants/bonds';
import { ChartWrap } from '#components/ChartWrap';
import { CHART_COLORS } from '#constants/colors';
import { PortfolioTotalPrice } from '#components/PortfolioTotalPrice';

const BondCompanyTypes = () => {
  const history = useHistory();

  const bonds = useSelector(selectBonds);
  const portfolio = useSelector(selectPortfolio);

  const data = useMemo(() => {
    const portfolioWithoutFunds = portfolio.filter(
      ({ ticker }) => bonds[ticker].companyType !== BondCompanyTypesEnum.Fund,
    );

    const chartData = getChartData({
      portfolio: portfolioWithoutFunds,
      colors: [
        CHART_COLORS.GREEN,
        CHART_COLORS.LIGHT_RED,
        CHART_COLORS.YELLOW,
        CHART_COLORS.BLUE,
        CHART_COLORS.VIOLET,
        CHART_COLORS.LIME,
        CHART_COLORS.LIGHT_GREEN,
        CHART_COLORS.BLACK_BLUE,
        CHART_COLORS.LIGHT_BLUE,
        CHART_COLORS.PALE_BLUE,
        CHART_COLORS.LEMON,
        CHART_COLORS.OLIVE,
        CHART_COLORS.DARK_GREEN,
        CHART_COLORS.DARK_BLUE,
        CHART_COLORS.RED,
        CHART_COLORS.ROSE_RED,
        CHART_COLORS.MANGO,
        CHART_COLORS.CAROCAL,
        CHART_COLORS.DARK_VIOLET,
      ],
      chartLabel: 'цена ценных бумаг по отрасли',
      categoryLabels: BondCompanyTypesNames,
      getFieldToSum: (portfolioItem) => {
        const bondInfo = bonds[portfolioItem.ticker];

        return bondInfo.companyType;
      },
    });

    return chartData;
  }, [bonds, portfolio]);

  return (
    <ChartWrap size="large" hover>
      <PortfolioTotalPrice />
      <Doughnut
        data={data}
        options={{
          cutout: '85%',
          onClick: (
            _e: any,
            element: Array<{ datasetIndex: number; element: ArcElement; index: number }>,
          ) => {
            const categoryIndex = element[0].index;
            const category = (BondCompanyTypesByNames as Record<string, string>)[
              data.labels[categoryIndex]
            ];

            if (category) {
              history.push(`/category/${category}`);
            }
          },
        }}
      />
    </ChartWrap>
  );
};

export { BondCompanyTypes };
