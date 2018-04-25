export const CLEAR_STATUS = 'CLEAR_STATUS';
export const IS_LOADING = 'IS_LOADING';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const clearStatus = () => ({
  type: CLEAR_STATUS,
});

export const receiveError = error => ({
  type: RECEIVE_ERROR,
  error,
});

export const isLoading = () => ({
  type: IS_LOADING,
});
