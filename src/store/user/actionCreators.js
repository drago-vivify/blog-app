import { SET_USER } from './actionTypes';

function setUserState(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

export function setUser(user) {
  return function(dispatch) {
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(setUserState(user));
  };
}
