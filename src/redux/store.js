import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const rootReducer = {
  data: reducer,
};

const store = configureStore({
  reducer: combineReducers(rootReducer),
});

export default store;
