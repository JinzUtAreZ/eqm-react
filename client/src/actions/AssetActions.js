import {
  GET_ASSETLIST,
  SET_LOADING,
  SEARCH_ASSETLIST,
  ASSET_ERROR
} from '../types/Assettypes';

/// load asset list per user ///
export const getAssetList = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/api/assets');
    const data = await res.json();
    console.log(data);

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

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
