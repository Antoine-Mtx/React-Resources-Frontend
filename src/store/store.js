// store configuration file where we define our reducers and middlewares

import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';

import authenticationReducer from '../reducers/authenticationReducer.js';
import resourceReducer from '../reducers/resourceReducer.js';
import tutorialReducer from '../reducers/tutorialReducer.js';
import informationReducer from '../reducers/informationReducer.js';
import eventReducer from '../reducers/eventReducer.js';
import categoryReducer from '../reducers/categoryReducer.js';

const resourceSliceReducer = combineReducers({
  all: resourceReducer,
  tutorial: tutorialReducer,
  information: informationReducer,
  event: eventReducer,
});

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    resource: resourceSliceReducer,
    category: categoryReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
