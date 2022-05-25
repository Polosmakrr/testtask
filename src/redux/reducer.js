import { combineReducers, createReducer } from '@reduxjs/toolkit';

const defaultUsersState = {
  users: [],
  page: 0,
  total_pages: 0,
};

const users = createReducer(defaultUsersState, {
  fetchUsersSuccess: (state, { payload }) => {
    const newUsers = state.users.concat(payload.users);

    return {
      ...state,
      ...payload,
      users: newUsers,
    };
  },
});

const positions = createReducer([], {
  fetchPositionsSuccess: (_, { payload }) => [payload],
});

export default combineReducers({
  users,
  positions,
});
