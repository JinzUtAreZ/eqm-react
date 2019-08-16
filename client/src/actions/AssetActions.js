import {
  GET_ASSETLIST,
  SET_LOADING,
  SEARCH_ASSETLIST,
  ASSET_ERROR,
  CLEAR_ASSET,
  ASSET_STATUS,
  ASSET_CATEGORY,
  ASSET_DIVISION,
  ASSET_SERVICE_DEPT,
  ASSET_MAINTE_TYPE,
  ASSET_DEPARTMENT,
  ASSET_SUB_CATEGORY,
  ASSET_CUSTODIAN,
  SET_SIDEBAR_MENU,
  ASSET_SAVE,
  ASSET_DATA_CLEAR
} from '../types/Assettypes';
//import axios from 'axios';

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

///// Clear state of asset when input is blank ////
export const clearAssetFilter = () => {
  return {
    type: CLEAR_ASSET
  };
};

///// Load Asset Staus //////
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

////// Load category //////
export const getAssetCategory = seltype => async dispatch => {
  try {
    const res = await fetch(`/api/assetSelect/${seltype}`);
    const data = await res.json();

    dispatch({
      type: ASSET_CATEGORY,
      payload: data
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: ASSET_ERROR,
      payload: err.message.statusText
    });
  }
};

////// Load Subcategory triggered by Category //////
export const getAssetSubCategory = (seltype, userselect) => async dispatch => {
  try {
    const res = await fetch(`/api/assetSelect/${seltype}/${userselect}`);
    const data = await res.json();
    dispatch({
      type: ASSET_SUB_CATEGORY,
      payload: data
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: ASSET_ERROR,
      payload: err.response.statusText
    });
  }
};

////// Load Division /////
export const getDivision = seltype => async dispatch => {
  try {
    const res = await fetch(`/api/assetSelect/${seltype}`);
    const data = await res.json();

    dispatch({ type: ASSET_DIVISION, payload: data });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: ASSET_ERROR,
      payload: err.response.statusText
    });
  }
};

///// Load Department triggered by Division dropdown /////
export const getDepartment = (seltype, userselect) => async dispatch => {
  try {
    const res = await fetch(`/api/assetSelect/${seltype}/${userselect}`);
    const data = await res.json();
    dispatch({
      type: ASSET_DEPARTMENT,
      payload: data
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: ASSET_ERROR,
      payload: err.response.statusText
    });
  }
};

///// Load Custodian triggered by Department dropdown /////
export const getCustodian = (seltype, userselect) => async dispatch => {
  try {
    const res = await fetch(`/api/assetSelect/${seltype}/${userselect}`);
    const data = await res.json();

    dispatch({
      type: ASSET_CUSTODIAN,
      payload: data
    });
  } catch (err) {
    console.err(err.message);
    dispatch({
      type: ASSET_ERROR,
      payload: err.response.statusText
    });
  }
};

//// Load service department /////
export const getServiceDept = seltype => async dispatch => {
  try {
    const res = await fetch(`/api/assetSelect/${seltype}`);
    const data = await res.json();

    dispatch({
      type: ASSET_SERVICE_DEPT,
      payload: data
    });
  } catch (err) {
    console.error(err.message);
    dispatch({ type: ASSET_ERROR, payload: err.response.statusText });
  }
};

///// Load Asset maintenance dropdown
export const getAssetMaintenance = seltype => async dispatch => {
  try {
    const res = await fetch(`/api/assetSelect/${seltype}`);
    const data = await res.json();

    dispatch({
      type: ASSET_MAINTE_TYPE,
      payload: data
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: ASSET_ERROR,
      payload: err.response.statusText
    });
  }
};

export const SaveAssetInfo = assetdata => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/api/assetTrans', {
      method: 'POST',
      body: JSON.stringify(assetdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    if (data === 'Saving successful') {
      dispatch({
        type: ASSET_DATA_CLEAR
      });
    }
  } catch (err) {
    console.error(err.message, 'Save Asset Error');
    dispatch({
      type: ASSET_ERROR,
      payload: err.response.statusText
    });
  }
};

//// set loading icon while retrieving data ////

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

//// set sidebar open close //// d pa tapos to aayusin pa
export const setMenuOpenClose = () => {
  return {
    type: SET_SIDEBAR_MENU
  };
};

//// set loading icon while retrieving data ////

export const setAssetSaveParam = assetdata => {
  return {
    type: ASSET_SAVE,
    payload: assetdata
  };
};

//// set clear ////

export const ClearAssetInfo = () => {
  return {
    type: ASSET_DATA_CLEAR
  };
};
