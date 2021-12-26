import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Portfolio } from '#components/Portfolio';
import { selectApiToken } from '#store/selectors';

import { fetchBondsInfo } from '#store/asyncThunks';

const Overview = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const apiToken = useSelector(selectApiToken);

  useEffect(() => {
    if (!apiToken) {
      history.push('/auth');
      return;
    }

    dispatch(fetchBondsInfo());
  }, [apiToken]);

  if (!apiToken) {
    return null;
  }

  return <Portfolio />;
};

export { Overview };
