import { createSlice } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_TOKEN_KEY } from '#constants/localStorage';
import { Portfolio } from '#types/portfolio';
import { BondsInfo } from '#types/bonds';

interface InitialState {
  apiToken: string | null;
  portfolio: Portfolio;
  bonds: BondsInfo;
  isCreateBondFormOpen: boolean;
}

const initialState: InitialState = {
  apiToken: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY),
  portfolio: [],
  bonds: {},
  isCreateBondFormOpen: false,
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
    openCreateBondForm(state) {
      state.isCreateBondFormOpen = true;
    },
    closeCreateBondForm(state) {
      state.isCreateBondFormOpen = false;
    },
  },
  extraReducers: {},
});

export const { setApiToken, setPortfolio, setBondsInfo, openCreateBondForm, closeCreateBondForm } =
  appSlice.actions;

export default appSlice.reducer;
