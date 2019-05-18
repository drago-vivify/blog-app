import { createStore } from 'redux';

// constant used for describing which action has been dispatched
const SET_USER = 'SET_USER';

// action creator
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
};

function stateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    default:
      return state;
  }
}

const store = createStore(stateReducer);

function handleStateChanged() {
  console.log({ globalState: store.getState() });
}
store.subscribe(handleStateChanged);

export default store;
