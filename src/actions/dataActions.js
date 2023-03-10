import { fetchData as fetchFromService } from '../services/dataService.js';

export const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST',
});

export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error,
});

export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataRequest());
      const data = await fetchFromService();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

