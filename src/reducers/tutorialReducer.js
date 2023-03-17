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

const initialState = {
  tutorials: [],
  tutorial: null,
  loading: false,
  error: null,
};

const tutorialReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TUTORIALS_REQUEST:
    case FETCH_TUTORIAL_REQUEST:
    case CREATE_TUTORIAL_REQUEST:
    case UPDATE_TUTORIAL_REQUEST:
    case ARCHIVE_TUTORIAL_REQUEST:
    case VALIDATE_TUTORIAL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TUTORIALS_SUCCESS:
      return {
        ...state,
        tutorials: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_TUTORIAL_SUCCESS:
      return {
        ...state,
        tutorial: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_TUTORIAL_SUCCESS:
      return {
        ...state,
        tutorials: [...state.tutorials, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_TUTORIAL_SUCCESS:
      const updatedTutorials = state.tutorials.map((tutorial) =>
        tutorial.id === action.payload.id ? action.payload : tutorial
      );
      return {
        ...state,
        tutorials: updatedTutorials,
        loading: false,
        error: null,
      };
    case ARCHIVE_TUTORIAL_SUCCESS:
      const filteredTutorials = state.tutorials.filter(
        (tutorial) => tutorial.id !== action.payload
      );
      return {
        ...state,
        tutorials: filteredTutorials,
        loading: false,
        error: null,
      };
    case VALIDATE_TUTORIAL_SUCCESS:
      const validatedTutorials = state.tutorials.map((tutorial) =>
        tutorial.id === action.payload ? { ...tutorial, validated: true } : tutorial
      );
      return {
        ...state,
        tutorials: validatedTutorials,
        loading: false,
        error: null,
      };
    case FETCH_TUTORIALS_FAILURE:
    case FETCH_TUTORIAL_FAILURE:
    case CREATE_TUTORIAL_FAILURE:
    case UPDATE_TUTORIAL_FAILURE:
    case ARCHIVE_TUTORIAL_FAILURE:
    case VALIDATE_TUTORIAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tutorialReducer;