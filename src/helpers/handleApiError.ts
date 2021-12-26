import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import configuredStore from '#utils/configuredStore';
import { ApiError } from '#types/apiError';
import { LOCAL_STORAGE_TOKEN_KEY } from '#constants/localStorage';
import { setApiToken } from '#store/slice';

const AUTHORIZATION_ERROR_CODES = [401, 403];

const handleApiError = (error: unknown) => {
  toast.error((error as AxiosError<ApiError>).response?.data?.reason || (error as Error).message, {
    hideProgressBar: true,
    theme: 'colored',
  });

  if (
    AUTHORIZATION_ERROR_CODES.includes((error as AxiosError<ApiError>).response?.data?.error || 0)
  ) {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    configuredStore.dispatch(setApiToken(null));
  }
};

export { handleApiError };
