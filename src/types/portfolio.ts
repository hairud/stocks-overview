type PortfolioItem = {
  name: string;
  averagePositionPrice: {
    currency: string;
    value: number;
  };
  balance: number;
  expectedYield: { currency: string; value: number };
  figi: string;
  instrumentType: string;
  isin: string;
  lots: number;
  ticker: string;
  totalPrice: number;
};

type Portfolio = Array<PortfolioItem>;

export type { Portfolio, PortfolioItem };
