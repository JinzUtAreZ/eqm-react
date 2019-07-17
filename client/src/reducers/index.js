import { combineReducers } from 'redux';
import AssetReducer from './AssetReducers';

export default combineReducers({
  asset: AssetReducer
});
