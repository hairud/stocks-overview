import { SortFields, SortOrder } from '#constants/companiesTable';
import { BondsInfo } from '#types/bonds';
import { PortfolioItem } from '#types/portfolio';

const getSortedPortfolio = ({
  portfolio,
  sortField,
  sortOrder,
  bonds,
}: {
  portfolio: PortfolioItem[];
  sortField: SortFields;
  sortOrder: SortOrder;
  bonds: BondsInfo;
}) => {
  const portfolioToSort = [...portfolio];

  if (sortField === SortFields.Price) {
    return portfolioToSort.sort(
      (bondA, bondB) => sortOrder * (bondB.totalPrice - bondA.totalPrice),
    );
  }

  if (sortField === SortFields.SafeType || sortField === SortFields.CompanyType) {
    return portfolioToSort.sort((bondA, bondB) => {
      const compareResult = bonds[bondA.ticker][sortField].localeCompare(
        bonds[bondB.ticker][sortField],
      );

      return compareResult * sortOrder;
    });
  }

  return portfolioToSort.sort(
    (bondA, bondB) => bondA[sortField].localeCompare(bondB[sortField]) * sortOrder,
  );
};

export { getSortedPortfolio };
