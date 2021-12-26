import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleApiError } from '#helpers/handleApiError';
import { LOCAL_STORAGE_TOKEN_KEY } from '#constants/localStorage';
import { setApiToken, setPortfolio, setBondsInfo } from './slice';
import { TRootState } from '#utils/configuredStore';

const API_URL = 'http://localhost:3001';

const fetchPortfolio = createAsyncThunk('fetchPortfolio', async (_, { getState, dispatch }) => {
  const { apiToken } = getState() as TRootState;

  try {
    const portfolioResponse = await axios.get(`${API_URL}/portfolio`, {
      headers: { token: apiToken },
    });

    dispatch(setPortfolio(portfolioResponse.data.portfolio));
  } catch (error) {
    handleApiError(error);
  }
});

const fetchBondsInfo = createAsyncThunk('fetchBonds', async (_, { getState, dispatch }) => {
  const { apiToken } = getState() as TRootState;

  try {
    const bondsData = await axios.get(`${API_URL}/bonds`, {
      headers: { token: apiToken },
    });

    dispatch(setBondsInfo({ bonds: bondsData.data.bonds }));
  } catch (error) {
    handleApiError(error);
  }
});

const createNewBond = createAsyncThunk(
  'createNewBond',
  async (
    payload: { type: string; category: string; ticker: string; image: string },
    { getState },
  ) => {
    const { apiToken } = getState() as TRootState;

    try {
      await axios.post(`${API_URL}/bond`, payload, { headers: { token: apiToken } });
    } catch (error) {
      handleApiError(error);
    }
  },
);

const login = createAsyncThunk(
  'login',
  async ({ email, password }: { email: string; password: string }, { dispatch }) => {
    try {
      const loginResponse = await axios.post(`${API_URL}/login`, { email, password });

      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, loginResponse.data.user.token);
      dispatch(setApiToken(loginResponse.data.user.token));
    } catch (error) {
      handleApiError(error);
    }
  },
);

const register = createAsyncThunk(
  'login',
  async ({ email, password }: { email: string; password: string }, { dispatch }) => {
    try {
      const registerResponse = await axios.post(`${API_URL}/register`, { email, password });

      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, registerResponse.data.user.token);
      dispatch(setApiToken(registerResponse.data.user.token));
    } catch (error) {
      handleApiError(error);
    }
  },
);

export { fetchPortfolio, fetchBondsInfo, login, register, createNewBond };
