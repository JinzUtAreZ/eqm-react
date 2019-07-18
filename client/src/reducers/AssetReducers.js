import { GET_ASSETLIST, SET_LOADING, ASSET_ERROR } from '../types/Assettypes';

const initialState = {
  assetlist: null,
  loading: false,
  current: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ASSET_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case GET_ASSETLIST:
      console.log(action.payload);
      return {
        ...state,
        assetlist: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
