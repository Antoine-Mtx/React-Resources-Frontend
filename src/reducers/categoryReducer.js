import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  ARCHIVE_CATEGORY_REQUEST,
  ARCHIVE_CATEGORY_SUCCESS,
  ARCHIVE_CATEGORY_FAILURE,
} from '../constants/categoryConstants.js';

const initialState = {
  categories: [],
  category: null,
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
    case FETCH_CATEGORY_REQUEST:
    case CREATE_CATEGORY_REQUEST:
    case UPDATE_CATEGORY_REQUEST:
    case ARCHIVE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_CATEGORY_SUCCESS:
      const updatedCategories = state.categories.map((category) => {
        if (category.id === action.payload.id) {
          return action.payload;
        }
        return category;
      });
      return {
        ...state,
        categories: updatedCategories,
        category: action.payload,
        loading: false,
        error: null,
      };
    case ARCHIVE_CATEGORY_SUCCESS:
      const filteredCategories = state.categories.filter(
        (category) => category.id !== action.payload
      );
      return {
        ...state,
        categories: filteredCategories,
        category: null,
        loading: false,
        error: null,
      };
    case FETCH_CATEGORIES_FAILURE:
    case FETCH_CATEGORY_FAILURE:
    case CREATE_CATEGORY_FAILURE:
    case UPDATE_CATEGORY_FAILURE:
    case ARCHIVE_CATEGORY_FAILURE:
      return {
        ...state,
        categories: [],
        category: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
