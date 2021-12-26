import { useEffect, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '#components/Input';
import { Button } from '#components/Button';
import { login, register } from '#store/asyncThunks';
import { getAuthFormTexts } from '#helpers/authForm';
import { selectApiToken } from '#store/selectors';

import morning from '#assets/morning.png';

import * as S from './styled';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const apiToken = useSelector(selectApiToken);

  useEffect(() => {
    if (apiToken) {
      history.push('/');
    }
  }, [apiToken]);

  const sendRequest = () => {
    if (isRegisterForm) {
      dispatch(register({ email, password }));
      return;
    }

    dispatch(login({ email, password }));
  };

  const formTexts = useMemo(() => {
    const texts = getAuthFormTexts(isRegisterForm);

    return texts;
  }, [isRegisterForm]);

  return (
    <S.Container>
      <S.FormWrap
        onSubmit={(e) => {
          e.preventDefault();
          sendRequest();
        }}
      >
        <S.FormTitle>
          <S.FormTitleText>{formTexts.title}</S.FormTitleText>
          <S.FormChange
            onClick={() => setIsRegisterForm((isRegisterFormDisplayed) => !isRegisterFormDisplayed)}
          >
            {formTexts.formChangeText}
          </S.FormChange>
        </S.FormTitle>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={sendRequest} type="submit">
          {formTexts.buttonText}
        </Button>
      </S.FormWrap>
      <S.ImageWrap>
        <S.Image src={morning} alt="Доброе утро!" />
      </S.ImageWrap>
    </S.Container>
  );
};

export { AuthForm };
