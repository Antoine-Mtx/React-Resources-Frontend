import {
  FETCH_TUTORIALS_REQUEST,
  FETCH_TUTORIALS_SUCCESS,
  FETCH_TUTORIALS_FAILURE,
  FETCH_TUTORIAL_REQUEST,
  FETCH_TUTORIAL_SUCCESS,
  FETCH_TUTORIAL_FAILURE,
  CREATE_TUTORIAL_REQUEST,
  CREATE_TUTORIAL_SUCCESS,
  CREATE_TUTORIAL_FAILURE,
  UPDATE_TUTORIAL_REQUEST,
  UPDATE_TUTORIAL_SUCCESS,
  UPDATE_TUTORIAL_FAILURE,
  ARCHIVE_TUTORIAL_REQUEST,
  ARCHIVE_TUTORIAL_SUCCESS,
  ARCHIVE_TUTORIAL_FAILURE,
  VALIDATE_TUTORIAL_REQUEST,
  VALIDATE_TUTORIAL_SUCCESS,
  VALIDATE_TUTORIAL_FAILURE,
} from '../constants/tutorialConstants.js';
import tutorialService from '../services/tutorialService.js';

// Action creators for fetching tutorials
export const fetchTutorialsRequest = () => ({
  type: FETCH_TUTORIALS_REQUEST,
});

export const fetchTutorialsSuccess = (tutorials) => ({
  type: FETCH_TUTORIALS_SUCCESS,
  payload: tutorials,
});

export const fetchTutorialsFailure = (error) => ({
  type: FETCH_TUTORIALS_FAILURE,
  payload: error,
});

export const fetchTutorials = () => async (dispatch) => {
  dispatch(fetchTutorialsRequest());
  try {
    const tutorials = await tutorialService.getTutorials();
    dispatch(fetchTutorialsSuccess(tutorials));
  } catch (error) {
    dispatch(fetchTutorialsFailure(error.message));
  }
};

// Action creators for fetching a single tutorial
export const fetchTutorialRequest = () => ({
  type: FETCH_TUTORIAL_REQUEST,
});

export const fetchTutorialSuccess = (tutorial) => ({
  type: FETCH_TUTORIAL_SUCCESS,
  payload: tutorial,
});

export const fetchTutorialFailure = (error) => ({
  type: FETCH_TUTORIAL_FAILURE,
  payload: error,
});

export const fetchTutorial = (id) => async (dispatch) => {
  dispatch(fetchTutorialRequest());
  try {
    const tutorial = await tutorialService.getTutorialById(id);
    dispatch(fetchTutorialSuccess(tutorial));
  } catch (error) {
    dispatch(fetchTutorialFailure(error.message));
  }
};

// Action creators for creating a tutorial
export const createTutorialRequest = () => ({
  type: CREATE_TUTORIAL_REQUEST,
});

export const createTutorialSuccess = (tutorial) => ({
  type: CREATE_TUTORIAL_SUCCESS,
  payload: tutorial,
});

export const createTutorialFailure = (error) => ({
  type: CREATE_TUTORIAL_FAILURE,
  payload: error,
});

export const createTutorial = (formData) => async (dispatch) => {
  dispatch(createTutorialRequest());
  try {
    const tutorial = await tutorialService.createTutorial(formData);
    dispatch(createTutorialSuccess(tutorial));
  } catch (error) {
    dispatch(createTutorialFailure(error.message));
  }
};

// Action creators for updating a tutorial
export const updateTutorialRequest = () => ({
  type: UPDATE_TUTORIAL_REQUEST,
});

export const updateTutorialSuccess = (tutorial) => ({
  type: UPDATE_TUTORIAL_SUCCESS,
  payload: tutorial,
});

export const updateTutorialFailure = (error) => ({
  type: UPDATE_TUTORIAL_FAILURE,
  payload: error,
});

export const updateTutorial = (id, formData) => async (dispatch) => {
  dispatch(updateTutorialRequest());
  try {
    const tutorial = await tutorialService.updateTutorial(id, formData);
    dispatch(updateTutorialSuccess(tutorial));
  } catch (error) {
    dispatch(updateTutorialFailure(error.message));
  }
};

// Action creators for archiving a tutorial
export const archiveTutorialRequest = () => ({
  type: ARCHIVE_TUTORIAL_REQUEST,
});

export const archiveTutorialSuccess = (id) => ({
  type: ARCHIVE_TUTORIAL_SUCCESS,
  payload: id,
});

export const archiveTutorialFailure = (error) => ({
  type: ARCHIVE_TUTORIAL_FAILURE,
  payload: error,
});

export const archiveTutorial = (id) => async (dispatch) => {
  dispatch(archiveTutorialRequest());
  try {
    await tutorialService.archiveTutorial(id);
    dispatch(archiveTutorialSuccess(id));
  } catch (error) {
    dispatch(archiveTutorialFailure(error.message));
  }
};

// Action creators for validating a tutorial
export const validateTutorialRequest = () => ({
  type: VALIDATE_TUTORIAL_REQUEST,
});

export const validateTutorialSuccess = (id) => ({
  type: VALIDATE_TUTORIAL_SUCCESS,
  payload: id,
});

export const validateTutorialFailure = (error) => ({
  type: VALIDATE_TUTORIAL_FAILURE,
  payload: error,
});

export const validateTutorial = (id) => async (dispatch) => {
  dispatch(validateTutorialRequest());
  try {
    await tutorialService.validateTutorial(id);
    dispatch(validateTutorialSuccess(id));
  } catch (error) {
    dispatch(validateTutorialFailure(error.message));
  }
};
