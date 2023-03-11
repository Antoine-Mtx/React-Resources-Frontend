// store configuration file where we define our reducers and middlewares

import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import dataReducer from '../reducers/dataReducer.js';
import userReducer from '../reducers/userReducer.js';

const store = configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
