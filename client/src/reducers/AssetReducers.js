import {
  GET_ASSETLIST,
  SET_LOADING,
  ASSET_ERROR,
  SEARCH_ASSETLIST
} from '../types/Assettypes';

const initialState = {
  assetlist: null,
  loading: false,
  current: null,
  filtered: null,
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
    case SEARCH_ASSETLIST:
      const textvalue = action.payload;
      const filtered = state.assetlist.filter(
        assetcolumn =>
          assetcolumn.AssetCode.includes(textvalue) ||
          assetcolumn.AssetTag.includes(textvalue) ||
          assetcolumn.AssetName.includes(textvalue) ||
          assetcolumn.Manufacturer.includes(textvalue) ||
          assetcolumn.ModelNo.includes(textvalue) ||
          assetcolumn.SerialNo.includes(textvalue)
      );

      return { ...state, filtered };
    //return {
    //  ...state,
    //  filtered: state.assetlist //.filter(assetcolumn => {
    // return (
    //   assetcolumn.AssetCode.includes(action.payload) ||
    //   assetcolumn.AssetTag.includes(action.payload) ||
    //   assetcolumn.AssetName.includes(action.payload) ||
    //   assetcolumn.Manufacturer.includes(action.payload) ||
    //   assetcolumn.ModelNo.includes(action.payload) ||
    //   assetcolumn.SerialNo.includes(action.payload)
    // );
    //})
    //};
    default:
      return state;
  }
};
