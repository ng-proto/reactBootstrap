import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import jobsearch from './jobsearchReducer';

export default combineReducers({
  router: routerReducer,
  counter,
  jobsearch
});
