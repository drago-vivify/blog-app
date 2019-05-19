import { createStore, combineReducers } from 'redux';
import { reducer as userReducer } from './user';
import { reducer as postsReducer } from './posts';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer
});

const store = createStore(rootReducer);

export default store;
