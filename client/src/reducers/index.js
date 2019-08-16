import { combineReducers } from 'redux';
import AssetReducer from './AssetReducers';
import JOReducer from './JOReducers';

export default combineReducers({
  asset: AssetReducer,
  jo: JOReducer
});
