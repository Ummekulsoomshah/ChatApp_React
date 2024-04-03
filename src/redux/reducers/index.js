import { combineReducers } from 'redux';
import productReducer  from './productReducer';
const rootReducer = combineReducers({
  posts: productReducer,
});

export default rootReducer;