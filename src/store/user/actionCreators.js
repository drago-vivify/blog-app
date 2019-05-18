import { SET_USER } from './actionTypes';
import usersService from '../../services/usersService';

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

export function login(email, password) {
  return async function(dispatch) {
    const user = await usersService.login(email, password);
    user && dispatch(setUser(user));
  };
}
