import { combineReducers, createReducer } from '@reduxjs/toolkit';

const users = createReducer([], {
  fetchUsersSuccess: (_, { payload }) => [payload],
});

const positions = createReducer([], {
  fetchPositionsSuccess: (_, { payload }) => [payload],
});

export default combineReducers({
  users,
  positions,
});
