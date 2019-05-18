import { createStore, combineReducers } from 'redux';
import userReducer from './user/reducer';
import postsReducer from './posts/reducer';

const reducer = combineReducers({
  user: userReducer,
  posts: postsReducer
});
const store = createStore(reducer);

export default store;
