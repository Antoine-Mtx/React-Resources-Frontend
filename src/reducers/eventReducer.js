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

const initialState = {
  events: [],
  event: null,
  loading: false,
  error: null,
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
    case FETCH_EVENT_REQUEST:
    case CREATE_EVENT_REQUEST:
    case UPDATE_EVENT_REQUEST:
    case ARCHIVE_EVENT_REQUEST:
    case VALIDATE_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        event: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        events: [...state.events, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_EVENT_SUCCESS:
      const updatedEvents = state.events.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
      return {
        ...state,
        events: updatedEvents,
        loading: false,
        error: null,
      };
    case ARCHIVE_EVENT_SUCCESS:
      const filteredEvents = state.events.filter(
        (event) => event.id !== action.payload
      );
      return {
        ...state,
        events: filteredEvents,
        loading: false,
        error: null,
      };
    case VALIDATE_EVENT_SUCCESS:
      const validatedEvents = state.events.map((event) =>
        event.id === action.payload ? { ...event, validated: true } : event
      );
      return {
        ...state,
        events: validatedEvents,
        loading: false,
        error: null,
      };
    case FETCH_EVENTS_FAILURE:
    case FETCH_EVENT_FAILURE:
    case CREATE_EVENT_FAILURE:
    case UPDATE_EVENT_FAILURE:
    case ARCHIVE_EVENT_FAILURE:
    case VALIDATE_EVENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;