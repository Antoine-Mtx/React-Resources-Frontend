// store configuration file where we define our reducers and middlewares

import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import authenticationReducer from '../reducers/authenticationReducer.js';
import resourceReducer from '../reducers/resourceReducer.js';
import categoryReducer from '../reducers/categoryReducer.js';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    resource: resourceReducer,
    category: categoryReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
