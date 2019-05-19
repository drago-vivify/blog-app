import { SET_USER } from './actionTypes';

const initialState = null;

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
