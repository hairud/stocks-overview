import { configureStore } from '@reduxjs/toolkit';

import reducer from '#store';

const configuredStore = configureStore({
  reducer,
});

export type TRootState = ReturnType<typeof configuredStore.getState>;

export default configuredStore;
