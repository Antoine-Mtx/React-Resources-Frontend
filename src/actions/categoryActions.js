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
import categoryService from '../services/categoryService.js';

// Action creators for fetching categories
export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest());
  try {
    const categories = await categoryService.getCategories();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};

// Action creators for fetching a single category
export const fetchCategoryRequest = () => ({
  type: FETCH_CATEGORY_REQUEST,
});

export const fetchCategorySuccess = (category) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: category,
});

export const fetchCategoryFailure = (error) => ({
  type: FETCH_CATEGORY_FAILURE,
  payload: error,
});

export const fetchCategory = (id) => async (dispatch) => {
  dispatch(fetchCategoryRequest());
  try {
    const category = await categoryService.getCategoryById(id);
    dispatch(fetchCategorySuccess(category));
  } catch (error) {
    dispatch(fetchCategoryFailure(error.message));
  }
};

// Action creators for creating a category
export const createCategoryRequest = () => ({
  type: CREATE_CATEGORY_REQUEST,
});

export const createCategorySuccess = (category) => ({
  type: CREATE_CATEGORY_SUCCESS,
  payload: category,
});

export const createCategoryFailure = (error) => ({
  type: CREATE_CATEGORY_FAILURE,
  payload: error,
});

export const createCategory = (formData) => async (dispatch) => {
  dispatch(createCategoryRequest());
  try {
    const category = await categoryService.createCategory(formData);
    dispatch(createCategorySuccess(category));
  } catch (error) {
    dispatch(createCategoryFailure(error.message));
  }
};

// Action creators for updating a category
export const updateCategoryRequest = () => ({
  type: UPDATE_CATEGORY_REQUEST,
});

export const updateCategorySuccess = (category) => ({
  type: UPDATE_CATEGORY_SUCCESS,
  payload: category,
});

export const updateCategoryFailure = (error) => ({
  type: UPDATE_CATEGORY_FAILURE,
  payload: error,
});

export const updateCategory = (id, formData) => async (dispatch) => {
  dispatch(updateCategoryRequest());
  try {
    const category = await categoryService.updateCategory(id, formData);
    dispatch(updateCategorySuccess(category));
  } catch (error) {
    dispatch(updateCategoryFailure(error.message));
  }
};

// Action creators for archiving a category
export const archiveCategoryRequest = () => ({
  type: ARCHIVE_CATEGORY_REQUEST,
});

export const archiveCategorySuccess = (id) => ({
  type: ARCHIVE_CATEGORY_SUCCESS,
  payload: id,
});

export const archiveCategoryFailure = (error) => ({
  type: ARCHIVE_CATEGORY_FAILURE,
  payload: error,
});

export const archiveCategory = (id) => async (dispatch) => {
  dispatch(archiveCategoryRequest());
  try {
    await categoryService.archiveCategory(id);
    dispatch(archiveCategorySuccess(id));
  } catch (error) {
    dispatch(archiveCategoryFailure(error.message));
  }
};