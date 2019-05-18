import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user/reducer';
import postsReducer from './posts/reducer';

const reducer = combineReducers({
  user: userReducer,
  posts: postsReducer
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
