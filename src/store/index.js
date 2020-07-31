import thunk from 'redux-thunk';
import ListReducer from './ListReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';

let reducers = {
  listFood: ListReducer,
};
const store = () =>
  createStore(combineReducers(reducers), applyMiddleware(thunk));
export default store();
