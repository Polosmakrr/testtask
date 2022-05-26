import * as actions from './actions';

export const fetchUsers = page => dispatch => {
  dispatch(actions.fetchUsersRequest());

  window.AgencyAxios.get(`/users?page=${page}&count=6`)
    .then(({ data }) => {
      dispatch(actions.fetchUsersSuccess(data));
    })
    .catch(error => dispatch(actions.fetchUsersError(error)));
};

export const fetchPositions = () => dispatch => {
  dispatch(actions.fetchPositionsRequest());

  window.AgencyAxios.get(`/positions`)
    .then(({ data }) => {
      dispatch(actions.fetchPositionsSuccess(data));
    })
    .catch(error => dispatch(actions.fetchPositionsError(error)));
};

export const postUser = (formData, token) => dispatch => {
  dispatch(actions.postUserRequest());
  window.AgencyAxios.post(`/users`, formData, {
    headers: { Token: token },
  })
    .then(responce => {
      dispatch(actions.postUserSuccess(responce));
      return responce;
    })
    .catch(error => {
      dispatch(actions.postUserError(error));
      return error;
    });
};
