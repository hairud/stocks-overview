import { BondSafeTypes, BondCompanyTypes } from '#constants/bonds';

type Bond = {
  __v: number;
  _id: string;
  image: string;
  ticker: string;
  safeType: BondSafeTypes;
  companyType: BondCompanyTypes;
};

type BondsInfo = {
  [ticker: string]: Bond;
};

export { Bond, BondsInfo };
