import { useSelector } from 'react-redux';

import { BondSafeTypesNames, BondCompanyTypesNames, BondCurrencies } from '#constants/bonds';
import { selectBonds } from '#store/selectors';

import * as S from './styled';

interface CompaniesTableRowProps {
  name: string;
  ticker: string;
  totalPrice: number;
}

const CompaniesTableRow = ({ name, ticker, totalPrice }: CompaniesTableRowProps) => {
  const bonds = useSelector(selectBonds);

  return (
    <S.TableRow>
      <S.TableCell>
        <S.Logo src={bonds[ticker]?.image} alt="logo" />
      </S.TableCell>
      <S.TableCell>{ticker}</S.TableCell>
      <S.TableCell maxWidth="202px">{name}</S.TableCell>
      <S.TableCell>
        {(BondSafeTypesNames as Record<string, string>)[bonds[ticker]?.safeType]?.slice(0, 6)}
      </S.TableCell>
      <S.TableCell maxWidth="202px">
        {(BondCompanyTypesNames as Record<string, string>)[bonds[ticker]?.companyType]}
      </S.TableCell>
      <S.TableCell align="right">
        {totalPrice.toLocaleString('ru-RU', {
          style: 'currency',
          currency: BondCurrencies.RUB,
          minimumFractionDigits: 2,
        })}
      </S.TableCell>
    </S.TableRow>
  );
};

export { CompaniesTableRow };
