import {
  FETCH_RESOURCES_REQUEST,
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCES_FAILURE,
  FETCH_RESOURCE_REQUEST,
  FETCH_RESOURCE_SUCCESS,
  FETCH_RESOURCE_FAILURE,
  CREATE_RESOURCE_REQUEST,
  CREATE_RESOURCE_SUCCESS,
  CREATE_RESOURCE_FAILURE,
  UPDATE_RESOURCE_REQUEST,
  UPDATE_RESOURCE_SUCCESS,
  UPDATE_RESOURCE_FAILURE,
  ARCHIVE_RESOURCE_REQUEST,
  ARCHIVE_RESOURCE_SUCCESS,
  ARCHIVE_RESOURCE_FAILURE,
  VALIDATE_RESOURCE_REQUEST,
  VALIDATE_RESOURCE_SUCCESS,
  VALIDATE_RESOURCE_FAILURE,
} from '../constants/resourceConstants.js';

const initialState = {
  resources: [],
  resource: null,
  loading: false,
  error: null,
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESOURCES_REQUEST:
    case FETCH_RESOURCE_REQUEST:
    case CREATE_RESOURCE_REQUEST:
    case UPDATE_RESOURCE_REQUEST:
    case ARCHIVE_RESOURCE_REQUEST:
    case VALIDATE_RESOURCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RESOURCES_SUCCESS:
      return {
        ...state,
        resources: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_RESOURCE_SUCCESS:
      return {
        ...state,
        resource: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_RESOURCE_SUCCESS:
      return {
        ...state,
        resources: [...state.resources, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_RESOURCE_SUCCESS:
      const updatedResources = state.resources.map((resource) =>
        resource.id === action.payload.id ? action.payload : resource
      );
      return {
        ...state,
        resources: updatedResources,
        loading: false,
        error: null,
      };
    case ARCHIVE_RESOURCE_SUCCESS:
      const filteredResources = state.resources.filter(
        (resource) => resource.id !== action.payload
      );
      return {
        ...state,
        resources: filteredResources,
        loading: false,
        error: null,
      };
    case VALIDATE_RESOURCE_SUCCESS:
      const validatedResources = state.resources.map((resource) =>
        resource.id === action.payload ? { ...resource, validated: true } : resource
      );
      return {
        ...state,
        resources: validatedResources,
        loading: false,
        error: null,
      };
    case FETCH_RESOURCES_FAILURE:
    case FETCH_RESOURCE_FAILURE:
    case CREATE_RESOURCE_FAILURE:
    case UPDATE_RESOURCE_FAILURE:
    case ARCHIVE_RESOURCE_FAILURE:
    case VALIDATE_RESOURCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default resourceReducer;
