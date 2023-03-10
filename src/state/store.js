import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import dataReducer from '../reducers/dataReducer.js';
import userReducer from '../reducers/userReducer.js';

const middleware = [...getDefaultMiddleware(), thunkMiddleware];

const store = configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
  },
  middleware,
});

export default store;
