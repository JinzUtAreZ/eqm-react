import {
  JO_METER_LOAD_FORKLIFT_HD,
  JO_METER_GET_LIST,
  JO_METER_UPDATE_LIST_ROW,
  JO_METER_SAVE_LIST,
  JO_METER_SEARCH_LIST,
  SET_LOADING
} from '../types/JOtypes';

const initialState = {
  loading: false,
  meterlist: null,
  metercol: null,
  current: null,
  filtered: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
