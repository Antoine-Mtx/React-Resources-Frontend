import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILURE,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  UPDATE_EVENT_REQUEST,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE,
  ARCHIVE_EVENT_REQUEST,
  ARCHIVE_EVENT_SUCCESS,
  ARCHIVE_EVENT_FAILURE,
  VALIDATE_EVENT_REQUEST,
  VALIDATE_EVENT_SUCCESS,
  VALIDATE_EVENT_FAILURE,
} from '../constants/eventConstants.js';
import eventService from '../services/eventService.js';

// Action creators for fetching events
export const fetchEventsRequest = () => ({
  type: FETCH_EVENTS_REQUEST,
});

export const fetchEventsSuccess = (events) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEventsFailure = (error) => ({
  type: FETCH_EVENTS_FAILURE,
  payload: error,
});

export const fetchEvents = () => async (dispatch) => {
  dispatch(fetchEventsRequest());
  try {
    const events = await eventService.getEvents();
    dispatch(fetchEventsSuccess(events));
  } catch (error) {
    dispatch(fetchEventsFailure(error.message));
  }
};

// Action creators for fetching a single event
export const fetchEventRequest = () => ({
  type: FETCH_EVENT_REQUEST,
});

export const fetchEventSuccess = (event) => ({
  type: FETCH_EVENT_SUCCESS,
  payload: event,
});

export const fetchEventFailure = (error) => ({
  type: FETCH_EVENT_FAILURE,
  payload: error,
});

export const fetchEvent = (id) => async (dispatch) => {
  dispatch(fetchEventRequest());
  try {
    const event = await eventService.getEventById(id);
    dispatch(fetchEventSuccess(event));
  } catch (error) {
    dispatch(fetchEventFailure(error.message));
  }
};

// Action creators for creating an event
export const createEventRequest = () => ({
  type: CREATE_EVENT_REQUEST,
});

export const createEventSuccess = (event) => ({
  type: CREATE_EVENT_SUCCESS,
  payload: event,
});

export const createEventFailure = (error) => ({
  type: CREATE_EVENT_FAILURE,
  payload: error,
});

export const createEvent = (formData) => async (dispatch) => {
  dispatch(createEventRequest());
  try {
    const event = await eventService.createEvent(formData);
    dispatch(createEventSuccess(event));
  } catch (error) {
    dispatch(createEventFailure(error.message));
  }
};

// Action creators for updating an event
export const updateEventRequest = () => ({
  type: UPDATE_EVENT_REQUEST,
});

export const updateEventSuccess = (event) => ({
  type: UPDATE_EVENT_SUCCESS,
  payload: event,
});

export const updateEventFailure = (error) => ({
  type: UPDATE_EVENT_FAILURE,
  payload: error,
});

export const updateEvent = (id, formData) => async (dispatch) => {
  dispatch(updateEventRequest());
  try {
    const event = await eventService.updateEvent(id, formData);
    dispatch(updateEventSuccess(event));
  } catch (error) {
    dispatch(updateEventFailure(error.message));
  }
};

// Action creators for archiving an event
export const archiveEventRequest = () => ({
  type: ARCHIVE_EVENT_REQUEST,
});

export const archiveEventSuccess = (id) => ({
  type: ARCHIVE_EVENT_SUCCESS,
  payload: id,
});

export const archiveEventFailure = (error) => ({
  type: ARCHIVE_EVENT_FAILURE,
  payload: error,
});

export const archiveEvent = (id) => async (dispatch) => {
  dispatch(archiveEventRequest());
  try {
    await eventService.archiveEvent(id);
    dispatch(archiveEventSuccess(id));
  } catch (error) {
    dispatch(archiveEventFailure(error.message));
  }
};

// Action creators for validating an event
export const validateEventRequest = () => ({
  type: VALIDATE_EVENT_REQUEST,
});

export const validateEventSuccess = (id) => ({
  type: VALIDATE_EVENT_SUCCESS,
  payload: id,
});

export const validateEventFailure = (error) => ({
  type: VALIDATE_EVENT_FAILURE,
  payload: error,
});

export const validateEvent = (id) => async (dispatch) => {
  dispatch(validateEventRequest());
  try {
    await eventService.validateEvent(id);
    dispatch(validateEventSuccess(id));
  } catch (error) {
    dispatch(validateEventFailure(error.message));
  }
};
