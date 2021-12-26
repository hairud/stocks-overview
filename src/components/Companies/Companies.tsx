import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectBonds, selectPortfolio } from '#store/selectors';

import * as S from './styled';
import { CompaniesTableRow } from '#components/CompaniesTableRow';
import { SortOrder, SortFields, TABLE_FIELDS } from '#constants/companiesTable';
import { getSortedPortfolio } from '#helpers/companiesTable';

const Companies = () => {
  const [sortOrder, setSortOrder] = useState(SortOrder.Asc);
  const [sortField, setSortField] = useState(SortFields.Ticker);
  const bonds = useSelector(selectBonds);
  const portfolio = useSelector(selectPortfolio);

  const sortedPortfolio = getSortedPortfolio({ sortOrder, sortField, bonds, portfolio });

  const changeSort = (field: SortFields) => {
    if (field === sortField) {
      setSortOrder((prevSortOrder) => prevSortOrder * -1);
      return;
    }

    setSortOrder(SortOrder.Asc);
    setSortField(field);
  };

  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
            <S.TableHeaderCell />
            {TABLE_FIELDS.map(({ name, sortField: columnSortField }) => (
              <S.TableHeaderCell key={name} onClick={() => changeSort(columnSortField)}>
                {name}
              </S.TableHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedPortfolio.map(({ name, ticker, totalPrice }, index) => (
            <CompaniesTableRow
              key={name}
              name={name}
              ticker={ticker}
              totalPrice={totalPrice}
              isOdd={!!(index % 2)}
            />
          ))}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
};

export { Companies };
