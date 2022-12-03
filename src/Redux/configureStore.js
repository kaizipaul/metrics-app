import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import characterReducer from './homePage/homePage';
import detailsReducer from './detailsPage/detailsPage';

const store = configureStore({
  reducer: {
    character: characterReducer,
    details: detailsReducer,
  },
},
applyMiddleware(logger));

export default store;
