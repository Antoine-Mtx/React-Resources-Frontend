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
import resourceService from '../services/resourceService.js';

// Action creators for fetching resources
export const fetchResourcesRequest = () => ({
  type: FETCH_RESOURCES_REQUEST,
});

export const fetchResourcesSuccess = (resources) => ({
  type: FETCH_RESOURCES_SUCCESS,
  payload: resources,
});

export const fetchResourcesFailure = (error) => ({
  type: FETCH_RESOURCES_FAILURE,
  payload: error,
});

export const fetchResources = () => async (dispatch) => {
  dispatch(fetchResourcesRequest());
  try {
    const resources = await resourceService.getResources();
    dispatch(fetchResourcesSuccess(resources));
  } catch (error) {
    dispatch(fetchResourcesFailure(error.message));
  }
};

// Action creators for fetching a single resource
export const fetchResourceRequest = () => ({
  type: FETCH_RESOURCE_REQUEST,
});

export const fetchResourceSuccess = (resource) => ({
  type: FETCH_RESOURCE_SUCCESS,
  payload: resource,
});

export const fetchResourceFailure = (error) => ({
  type: FETCH_RESOURCE_FAILURE,
  payload: error,
});

export const fetchResource = (id) => async (dispatch) => {
  dispatch(fetchResourceRequest());
  try {
    const resource = await resourceService.getResourceById(id);
    dispatch(fetchResourceSuccess(resource));
  } catch (error) {
    dispatch(fetchResourceFailure(error.message));
  }
};

// Action creators for creating a resource
export const createResourceRequest = () => ({
  type: CREATE_RESOURCE_REQUEST,
});

export const createResourceSuccess = (resource) => ({
  type: CREATE_RESOURCE_SUCCESS,
  payload: resource,
});

export const createResourceFailure = (error) => ({
  type: CREATE_RESOURCE_FAILURE,
  payload: error,
});

export const createResource = (formData) => async (dispatch) => {
  dispatch(createResourceRequest());
  try {
    const resource = await resourceService.createResource(formData);
    dispatch(createResourceSuccess(resource));
  } catch (error) {
    dispatch(createResourceFailure(error.message));
  }
};

// Action creators for updating a resource
export const updateResourceRequest = () => ({
  type: UPDATE_RESOURCE_REQUEST,
});

export const updateResourceSuccess = (resource) => ({
  type: UPDATE_RESOURCE_SUCCESS,
  payload: resource,
});

export const updateResourceFailure = (error) => ({
  type: UPDATE_RESOURCE_FAILURE,
  payload: error,
});

export const updateResource = (id, formData) => async (dispatch) => {
  dispatch(updateResourceRequest());
  try {
    const resource = await resourceService.updateResource(id, formData);
    dispatch(updateResourceSuccess(resource));
  } catch (error) {
    dispatch(updateResourceFailure(error.message));
  }
};

// Action creators for archiving a resource
export const archiveResourceRequest = () => ({
  type: ARCHIVE_RESOURCE_REQUEST,
});

export const archiveResourceSuccess = (id) => ({
  type: ARCHIVE_RESOURCE_SUCCESS,
  payload: id,
});

export const archiveResourceFailure = (error) => ({
  type: ARCHIVE_RESOURCE_FAILURE,
  payload: error,
});

export const archiveResource = (id) => async (dispatch) => {
  dispatch(archiveResourceRequest());
  try {
    await resourceService.archiveResource(id);
    dispatch(archiveResourceSuccess(id));
  } catch (error) {
    dispatch(archiveResourceFailure(error.message));
  }
};

// Action creators for validating a resource
export const validateResourceRequest = () => ({
  type: VALIDATE_RESOURCE_REQUEST,
});

export const validateResourceSuccess = (id) => ({
  type: VALIDATE_RESOURCE_SUCCESS,
  payload: id,
});

export const validateResourceFailure = (error) => ({
  type: VALIDATE_RESOURCE_FAILURE,
  payload: error,
});

export const validateResource = (id) => async (dispatch) => {
  dispatch(validateResourceRequest());
  try {
    await resourceService.validateResource(id);
    dispatch(validateResourceSuccess(id));
  } catch (error) {
    dispatch(validateResourceFailure(error.message));
  }
};

