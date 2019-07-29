import {
  GET_ASSETLIST,
  SET_LOADING,
  ASSET_ERROR,
  SEARCH_ASSETLIST,
  CLEAR_ASSET,
  ASSET_STATUS
} from '../types/Assettypes';

const initialState = {
  assetlist: null,
  assetcol: null,
  loading: false,
  current: null,
  filtered: null,
  error: null,
  assetstatus: []
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
      const assetcol = Object.keys(action.payload[0]).map(key => {
        return {
          Header: key,
          accessor: key
        };
      });
      return {
        ...state,
        assetlist: action.payload,
        fitered: action.payload,
        assetcol: assetcol,
        loading: false
      };
    case SEARCH_ASSETLIST:
      const textvalue = action.payload.toUpperCase();
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
    case CLEAR_ASSET:
      return { ...state, filtered: null };
    case ASSET_STATUS:
      return { ...state, assetstatus: action.payload };
    default:
      return state;
  }
};
