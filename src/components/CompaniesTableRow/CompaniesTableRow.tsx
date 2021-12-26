import { useSelector } from 'react-redux';

import { BondSafeTypes, BondCompanyTypes } from '#constants/bonds';
import { selectBonds } from '#store/selectors';

import * as S from './styled';

interface CompaniesTableRowProps {
  name: string;
  ticker: string;
  totalPrice: number;
  isOdd: boolean;
}

const CompaniesTableRow = ({ name, ticker, totalPrice, isOdd }: CompaniesTableRowProps) => {
  const bonds = useSelector(selectBonds);

  return (
    <S.TableRow isOdd={isOdd}>
      <S.TableCell>
        <S.Logo src={bonds[ticker]?.image} alt="logo" />
      </S.TableCell>
      <S.TableCell>{ticker}</S.TableCell>
      <S.TableCell>{name}</S.TableCell>
      <S.TableCell>
        {(BondSafeTypes as Record<string, string>)[bonds[ticker]?.safeType]?.slice(0, 6)}
      </S.TableCell>
      <S.TableCell>
        {(BondCompanyTypes as Record<string, string>)[bonds[ticker]?.companyType]}
      </S.TableCell>
      <S.TableCell>{`$${totalPrice.toFixed(2)}`}</S.TableCell>
    </S.TableRow>
  );
};

export { CompaniesTableRow };
