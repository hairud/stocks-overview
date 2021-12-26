import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPortfolio } from '#store/asyncThunks';
import { Companies } from '#components/Companies';
import { BondCompanyTypes } from '#components/BondCompanyTypes';
import { BondCurrencies } from '#components/BondCurrencies';
import { BondSafeTypes } from '#components/BondSafeTypes';

import * as S from './styled';

const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, []);

  return (
    <S.Row container>
      <S.Column>
        <Companies />
      </S.Column>
      <S.Column>
        <S.Row>
          <S.Column>
            <BondCurrencies />
            <BondSafeTypes />
          </S.Column>
          <BondCompanyTypes />
        </S.Row>
      </S.Column>
    </S.Row>
  );
};

export { Portfolio };
