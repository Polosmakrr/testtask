import { createAction } from '@reduxjs/toolkit';

export const fetchUsersRequest = createAction('fetchUsersRequest');
export const fetchUsersSuccess = createAction('fetchUsersSuccess');
export const fetchUsersError = createAction('fetchUsersError');

export const fetchPositionsRequest = createAction('fetchPositionsRequest');
export const fetchPositionsSuccess = createAction('fetchPositionsSuccess');
export const fetchPositionsError = createAction('fetchPositionsError');

export const postUserRequest = createAction('postUserRequest');
export const postUserSuccess = createAction('postUserSuccess');
export const postUserError = createAction('postUserError');
