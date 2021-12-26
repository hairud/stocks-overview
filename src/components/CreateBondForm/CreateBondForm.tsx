import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input } from '#components/Input';
import { Button } from '#components/Button';
import { createNewBond } from '#store/asyncThunks';

import * as S from './styled';
import { BondSafeTypes, BondCompanyTypes } from '#constants/bonds';
import BondFormSelect from '#components/BondFormSelect';

const CreateBondForm = () => {
  const dispatch = useDispatch();
  const [ticker, setTicker] = useState('');
  const [image, setImage] = useState('');
  const [bondType, setBondType] = useState('-');
  const [bondCategory, setBondCategory] = useState('-');

  const createBond = () => {
    dispatch(createNewBond({ ticker, image, type: bondType, category: bondCategory }));
  };

  return (
    <S.Container>
      <span>Добавить ценную бумагу</span>
      <S.Row>
        <Input
          placeholder="Тикер"
          value={ticker}
          onChange={(e) => {
            setTicker(e.target.value);
          }}
        />
        <S.InputWrap>
          <Input
            placeholder="Лого"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </S.InputWrap>
      </S.Row>
      <S.Row>
        <BondFormSelect
          value={bondType}
          options={BondSafeTypes}
          changeValue={setBondType}
          defaultOptionName="Тип бумаги"
        />
        <BondFormSelect
          value={bondCategory}
          options={BondCompanyTypes}
          changeValue={setBondCategory}
          defaultOptionName="Сектор компании"
        />
        <S.ButtonWrap>
          <Button onClick={createBond}>Добавить</Button>
        </S.ButtonWrap>
      </S.Row>
    </S.Container>
  );
};

export { CreateBondForm };
