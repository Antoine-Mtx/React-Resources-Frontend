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

const initialState = {
  informations: [],
  information: null,
  loading: false,
  error: null,
};

const informationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INFORMATIONS_REQUEST:
    case FETCH_INFORMATION_REQUEST:
    case CREATE_INFORMATION_REQUEST:
    case UPDATE_INFORMATION_REQUEST:
    case ARCHIVE_INFORMATION_REQUEST:
    case VALIDATE_INFORMATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_INFORMATIONS_SUCCESS:
      return {
        ...state,
        informations: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_INFORMATION_SUCCESS:
      return {
        ...state,
        information: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_INFORMATION_SUCCESS:
      return {
        ...state,
        informations: [...state.informations, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_INFORMATION_SUCCESS:
      const updatedInformations = state.informations.map((information) =>
        information.id === action.payload.id ? action.payload : information
      );
      return {
        ...state,
        informations: updatedInformations,
        loading: false,
        error: null,
      };
    case ARCHIVE_INFORMATION_SUCCESS:
      const filteredInformations = state.informations.filter(
        (information) => information.id !== action.payload
      );
      return {
        ...state,
        informations: filteredInformations,
        loading: false,
        error: null,
      };
    case VALIDATE_INFORMATION_SUCCESS:
      const validatedInformations = state.informations.map((information) =>
        information.id === action.payload ? { ...information, validated: true } : information
      );
      return {
        ...state,
        informations: validatedInformations,
        loading: false,
        error: null,
      };
    case FETCH_INFORMATIONS_FAILURE:
    case FETCH_INFORMATION_FAILURE:
    case CREATE_INFORMATION_FAILURE:
    case UPDATE_INFORMATION_FAILURE:
    case ARCHIVE_INFORMATION_FAILURE:
    case VALIDATE_INFORMATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default informationReducer;
