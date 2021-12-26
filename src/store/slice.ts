import { createSlice } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_TOKEN_KEY } from '#constants/localStorage';
import { Portfolio } from '#types/portfolio';
import { BondsInfo } from '#types/bonds';

const initialState: {
  apiToken: string | null;
  portfolio: Portfolio;
  bonds: BondsInfo;
} = {
  apiToken: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY),
  portfolio: [],
  bonds: {},
};

/* eslint-disable no-param-reassign */
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setApiToken(state, { payload }) {
      state.apiToken = payload;
    },
    setPortfolio(state, { payload }) {
      state.portfolio = payload;
    },
    setBondsInfo(state, { payload: { bonds } }) {
      state.bonds = bonds;
    },
  },
  extraReducers: {},
});

export const { setApiToken, setPortfolio, setBondsInfo } = appSlice.actions;

export default appSlice.reducer;
