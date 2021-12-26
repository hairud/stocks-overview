import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setApiToken } from '#store/slice';
import { AuthForm } from '#components/AuthForm';

const Auth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiToken(null));
  }, []);

  return <AuthForm />;
};

export { Auth };
