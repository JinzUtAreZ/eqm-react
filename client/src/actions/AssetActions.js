import {
  GET_ASSETLIST,
  SET_LOADING,
  SEARCH_ASSETLIST,
  ASSET_ERROR,
  CLEAR_ASSET,
  ASSET_STATUS
} from '../types/Assettypes';

/// load asset list per user ///
export const getAssetList = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/api/assets');
    const data = await res.json();
    //console.log(data);

    dispatch({
      type: GET_ASSETLIST,
      payload: data
    });
  } catch (err) {
    var errpayload;
    err.message !== undefined
      ? (errpayload = err.message)
      : (errpayload = err.response.statusText);

    dispatch({
      type: ASSET_ERROR,
      payload: errpayload
    });
  }
};
//// set loading icon while retrieving data ////

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

//// Search asset columns in asset list ////

export const searchAssetList = text => dispatch => {
  try {
    setLoading();
    //// search going to server ////
    // const res = await fetch(`/assets?q=${text}`);
    // const data = await res.json();

    dispatch({
      type: SEARCH_ASSETLIST,
      payload: text
    });
  } catch (err) {
    dispatch({
      type: ASSET_ERROR,
      payload: err.response.statusText
    });
  }
};

export const clearAssetFilter = () => {
  return {
    type: CLEAR_ASSET
  };
};

export const getAssetStatus = seltype => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/api/assetSelect/${seltype}`);
    const data = await res.json();

    dispatch({
      type: ASSET_STATUS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ASSET_ERROR,
      payload: err.response.statusText
    });
  }
};
