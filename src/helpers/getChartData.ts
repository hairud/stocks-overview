import { Portfolio, PortfolioItem } from '#types/portfolio';

const getChartData = ({
  colors,
  portfolio,
  chartLabel,
  getFieldToSum,
  categoryLabels,
}: {
  chartLabel: string;
  portfolio: Portfolio;
  colors: Array<string>;
  categoryLabels: { [key: string]: string };
  getFieldToSum: (portfolioItem: PortfolioItem) => string;
}) => {
  const totalPriceByField = portfolio.reduce((prev, portfolioItem) => {
    const key: string = getFieldToSum(portfolioItem);

    return {
      ...prev,
      [key]: (prev[key] || 0) + portfolioItem.totalPrice,
    };
  }, {} as { [key: string]: number });

  const initialChartData: { labels: string[]; data: string[]; backgroundColor: string[] } = {
    labels: [],
    data: [],
    backgroundColor: colors,
  };

  const entries = Object.entries(totalPriceByField);
  const total = entries.reduce((prev, [, value]) => prev + value, 0);

  entries
    .sort(([, value1], [, value2]) => value2 - value1)
    .forEach(([key, value]) => {
      initialChartData.labels.push(categoryLabels[key]);
      initialChartData.data.push(((value / total) * 100).toFixed(2));
    });

  return {
    labels: initialChartData.labels,
    datasets: [
      {
        label: chartLabel,
        backgroundColor: colors,
        data: initialChartData.data,
      },
    ],
  };
};

export { getChartData };
