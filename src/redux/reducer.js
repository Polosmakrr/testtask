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

  clearState: state => (state = defaultUsersState),
});

const positions = createReducer([], {
  fetchPositionsSuccess: (_, { payload }) => [payload],
});

const postResponse = createReducer(
  {},
  {
    postUserSuccess: (_, { payload }) => payload,
    postUserError: (_, { payload }) => payload.response,
    clearResponse: state => (state = {}),
  },
);

export default combineReducers({
  users,
  positions,
  postResponse,
});
