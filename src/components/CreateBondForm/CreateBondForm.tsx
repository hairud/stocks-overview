import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '#components/Input';
import { Button } from '#components/Button';
import { createNewBond } from '#store/asyncThunks';

import * as S from './styled';
import { BondSafeTypes, BondCompanyTypes } from '#constants/bonds';
import { BondFormSelect } from '#components/BondFormSelect';
import { selectIsCreateBondFormOpen } from '#store/selectors';
import { closeCreateBondForm } from '#store/slice';

const CreateBondForm = () => {
  const dispatch = useDispatch();

  const isFormOpen = useSelector(selectIsCreateBondFormOpen);

  const [ticker, setTicker] = useState('');
  const [image, setImage] = useState('');
  const [bondType, setBondType] = useState('-');
  const [bondCategory, setBondCategory] = useState('-');

  const createBond = () => {
    dispatch(createNewBond({ ticker, image, type: bondType, category: bondCategory }));
  };

  const handleBackgroundClick = () => {
    dispatch(closeCreateBondForm());
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!isFormOpen) {
    return null;
  }

  return (
    <S.Background onClick={handleBackgroundClick}>
      <S.Container onClick={handleContentClick}>
        <S.Title>Добавление ценной бумаги</S.Title>
        <S.Content>
          <Input
            placeholder="Тикер"
            value={ticker}
            onChange={(e) => {
              setTicker(e.target.value);
            }}
          />
          <Input
            placeholder="Лого"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
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
          <Button onClick={createBond}>Добавить</Button>
        </S.Content>
      </S.Container>
    </S.Background>
  );
};

export { CreateBondForm };
