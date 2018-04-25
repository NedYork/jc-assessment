import {
  CLEAR_STATUS,
  IS_LOADING,
  RECEIVE_ERROR,
} from '../actions/status';

const initialState = {
  error: false,
  errorMessage: '',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_STATUS:
      return {
        ...initialState,
      };
    case IS_LOADING:
      return {
        ...state,
        error: false,
        errorMessage: '',
        isLoading: true,
      };
    case RECEIVE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
