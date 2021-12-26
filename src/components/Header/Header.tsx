import { useDispatch } from 'react-redux';

import logo from '#assets/checkapp.png';
import addIcon from '#assets/text-document-add.svg';

import * as S from './styled';
import { openCreateBondForm } from '#store/slice';

const Header = () => {
  const dispatch = useDispatch();

  const handleCreateAddIconClick = () => {
    dispatch(openCreateBondForm());
  };

  return (
    <S.Header>
      <S.Row>
        <S.Link to="/">
          <S.Image src={logo} alt="Logo" />
        </S.Link>
        <S.Title>Stonks</S.Title>
      </S.Row>
      <S.Row>
        <S.HeaderIcon onClick={handleCreateAddIconClick} src={addIcon} alt="" />
      </S.Row>
    </S.Header>
  );
};

export { Header };
