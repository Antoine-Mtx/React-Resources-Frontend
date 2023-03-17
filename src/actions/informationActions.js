import {
  FETCH_INFORMATIONS_REQUEST,
  FETCH_INFORMATIONS_SUCCESS,
  FETCH_INFORMATIONS_FAILURE,
  FETCH_INFORMATION_REQUEST,
  FETCH_INFORMATION_SUCCESS,
  FETCH_INFORMATION_FAILURE,
  CREATE_INFORMATION_REQUEST,
  CREATE_INFORMATION_SUCCESS,
  CREATE_INFORMATION_FAILURE,
  UPDATE_INFORMATION_REQUEST,
  UPDATE_INFORMATION_SUCCESS,
  UPDATE_INFORMATION_FAILURE,
  ARCHIVE_INFORMATION_REQUEST,
  ARCHIVE_INFORMATION_SUCCESS,
  ARCHIVE_INFORMATION_FAILURE,
  VALIDATE_INFORMATION_REQUEST,
  VALIDATE_INFORMATION_SUCCESS,
  VALIDATE_INFORMATION_FAILURE,
} from '../constants/informationConstants.js';
import informationService from '../services/informationService.js';

// Action creators for fetching informations
export const fetchInformationsRequest = () => ({
  type: FETCH_INFORMATIONS_REQUEST,
});

export const fetchInformationsSuccess = (information) => ({
  type: FETCH_INFORMATIONS_SUCCESS,
  payload: information,
});

export const fetchInformationsFailure = (error) => ({
  type: FETCH_INFORMATIONS_FAILURE,
  payload: error,
});

export const fetchInformations = () => async (dispatch) => {
  dispatch(fetchInformationsRequest());
  try {
    const informations = await informationService.getInformations();
    dispatch(fetchInformationsSuccess(informations));
  } catch (error) {
    dispatch(fetchInformationsFailure(error.message));
  }
};

// Action creators for fetching information
export const fetchInformationRequest = () => ({
  type: FETCH_INFORMATION_REQUEST,
});

export const fetchInformationSuccess = (information) => ({
  type: FETCH_INFORMATION_SUCCESS,
  payload: information,
});

export const fetchInformationFailure = (error) => ({
  type: FETCH_INFORMATION_FAILURE,
  payload: error,
});

export const fetchInformation = () => async (dispatch) => {
  dispatch(fetchInformationRequest());
  try {
    const information = await informationService.getInformation();
    dispatch(fetchInformationSuccess(information));
  } catch (error) {
    dispatch(fetchInformationFailure(error.message));
  }
};

// Action creators for creating information
export const createInformationRequest = () => ({
  type: CREATE_INFORMATION_REQUEST,
});

export const createInformationSuccess = (information) => ({
  type: CREATE_INFORMATION_SUCCESS,
  payload: information,
});

export const createInformationFailure = (error) => ({
  type: CREATE_INFORMATION_FAILURE,
  payload: error,
});

export const createInformation = (formData) => async (dispatch) => {
  dispatch(createInformationRequest());
  try {
    const information = await informationService.createInformation(formData);
    dispatch(createInformationSuccess(information));
  } catch (error) {
    dispatch(createInformationFailure(error.message));
  }
};

// Action creators for updating information
export const updateInformationRequest = () => ({
  type: UPDATE_INFORMATION_REQUEST,
});

export const updateInformationSuccess = (information) => ({
  type: UPDATE_INFORMATION_SUCCESS,
  payload: information,
});

export const updateInformationFailure = (error) => ({
  type: UPDATE_INFORMATION_FAILURE,
  payload: error,
});

export const updateInformation = (id, formData) => async (dispatch) => {
  dispatch(updateInformationRequest());
  try {
    const information = await informationService.updateInformation(id, formData);
    dispatch(updateInformationSuccess(information));
  } catch (error) {
    dispatch(updateInformationFailure(error.message));
  }
};

// Action creators for archiving information
export const archiveInformationRequest = () => ({
  type: ARCHIVE_INFORMATION_REQUEST,
});

export const archiveInformationSuccess = (id) => ({
  type: ARCHIVE_INFORMATION_SUCCESS,
  payload: id,
});

export const archiveInformationFailure = (error) => ({
  type: ARCHIVE_INFORMATION_FAILURE,
  payload: error,
});

export const archiveInformation = (id) => async (dispatch) => {
  dispatch(archiveInformationRequest());
  try {
    await informationService.archiveInformation(id);
    dispatch(archiveInformationSuccess(id));
  } catch (error) {
    dispatch(archiveInformationFailure(error.message));
  }
};

// Action creators for validating information
export const validateInformationRequest = () => ({
type: VALIDATE_INFORMATION_REQUEST,
});

export const validateInformationSuccess = (id) => ({
type: VALIDATE_INFORMATION_SUCCESS,
payload: id,
});

export const validateInformationFailure = (error) => ({
type: VALIDATE_INFORMATION_FAILURE,
payload: error,
});

export const validateInformation = (id) => async (dispatch) => {
dispatch(validateInformationRequest());
try {
  await informationService.validateInformation(id);
  dispatch(validateInformationSuccess(id));
} catch (error) {
  dispatch(validateInformationFailure(error.message));
}
};
