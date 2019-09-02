import {
  JO_METER_LOAD_FORKLIFT_HD,
  JO_METER_GET_LIST,
  JO_METER_UPDATE_LIST_ROW,
  JO_METER_DELETE_LIST_ROW,
  JO_METER_SAVE_LIST,
  JO_METER_SEARCH_LIST,
  SET_LOADING,
  JO_METER_ERROR
} from '../types/JOtypes';

//// SET LOADING OF METER LIST ////
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const getJOMeterList = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/api/JOMeter');
    const data = await res.json();

    dispatch({
      type: JO_METER_GET_LIST,
      payload: data
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: JO_METER_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteJOMeterRow = rowid => async dispatch => {
  dispatch({
    type: JO_METER_DELETE_LIST_ROW,
    payload: rowid
  });
};
