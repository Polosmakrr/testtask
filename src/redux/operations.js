import * as actions from './actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const fetchUsers = page => dispatch => {
  dispatch(actions.fetchUsersRequest());

  axios
    .get(`/users?page=${page}&count=6`)
    .then(({ data }) => {
      dispatch(actions.fetchUsersSuccess(data));
    })

    .catch(error => dispatch(actions.fetchUsersError(error)));
};

export const fetchPositions = () => dispatch => {
  dispatch(actions.fetchPositionsRequest());

  axios
    .get(`/positions`)
    .then(({ data }) => {
      dispatch(actions.fetchPositionsSuccess(data));
    })

    .catch(error => dispatch(actions.fetchPositionsError(error)));
};

export const postUser = (formData, token) => dispatch => {
  dispatch(actions.postUserRequest());
  axios
    .post(`/users`, formData, {
      headers: { Token: token },
    })

    .then(responce => {})

    .catch(error => console.log('error', error));
};
