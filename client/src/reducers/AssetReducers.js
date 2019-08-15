import {
  GET_ASSETLIST,
  SET_LOADING,
  ASSET_ERROR,
  SEARCH_ASSETLIST,
  CLEAR_ASSET,
  ASSET_STATUS,
  ASSET_CATEGORY,
  ASSET_DIVISION,
  ASSET_SUB_CATEGORY,
  ASSET_DEPARTMENT,
  ASSET_SERVICE_DEPT,
  ASSET_MAINTE_TYPE,
  ASSET_CUSTODIAN,
  SET_SIDEBAR_MENU,
  ASSET_SAVE,
  ASSET_DATA_CLEAR
} from '../types/Assettypes';

const initialState = {
  assetlist: null,
  assetcol: null,
  loading: false,
  current: null,
  filtered: null,
  error: null,
  assetstatus: [],
  assetcategory: [],
  assetsubcat: [],
  assetdiv: [],
  assetdept: [],
  assetservedept: [],
  assetmainte: [],
  assetcustodian: [],
  opencloseMenu: false,
  assetsave: {
    assetcode: '',
    assetname: '',
    assetdesc: '',
    statselect: '',
    catselect: ''
  }
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
    case ASSET_CATEGORY:
      return { ...state, assetcategory: action.payload };
    case ASSET_SUB_CATEGORY:
      return { ...state, assetsubcat: action.payload };
    case ASSET_DIVISION:
      return { ...state, assetdiv: action.payload };
    case ASSET_DEPARTMENT:
      return { ...state, assetdept: action.payload };
    case ASSET_SERVICE_DEPT:
      return { ...state, assetservedept: action.payload };
    case ASSET_MAINTE_TYPE:
      return { ...state, assetmainte: action.payload };
    case ASSET_CUSTODIAN:
      return { ...state, assetcustodian: action.payload };
    case SET_SIDEBAR_MENU:
      return { ...state, opencloseMenu: true }; // para sa appsidebarmenu eto aayusin pa
    case ASSET_DATA_CLEAR:
      return {
        ...state,
        assetsave: {
          assetcode: '',
          assetname: '',
          assetdesc: '',
          statselect: '',
          catselect: ''
        }
      };
    case ASSET_SAVE:
      console.log(action.payload);
      const catkey =
        action.payload.catselect === undefined ? '' : action.payload.catselect;
      const statkey =
        action.payload.statselect === undefined
          ? ''
          : action.payload.statselect;
      const codekey =
        action.payload.assetcode === undefined ? '' : action.payload.assetcode;
      const namekey =
        action.payload.assetname === undefined ? '' : action.payload.assetname;
      const desckey =
        action.payload.assetdesc === undefined ? '' : action.payload.assetdesc;
      //// checker ko ng data to /////
      const dataset = {
        ...state,
        assetsave: {
          catselect:
            catkey !== ''
              ? state.assetsave.catselect === catkey
                ? state.assetsave.catselect
                : catkey
              : state.assetsave.catselect,
          statselect:
            statkey !== ''
              ? state.assetsave.statselect === statkey
                ? state.assetsave.statselect
                : statkey
              : state.assetsave.statselect,
          assetcode:
            codekey !== ''
              ? state.assetsave.assetcode === codekey
                ? state.assetsave.assetcode
                : codekey
              : state.assetsave.assetcode,
          assetname:
            namekey !== ''
              ? state.assetsave.assetname === namekey
                ? state.assetsave.assetname
                : namekey
              : state.assetsave.assetname,
          assetdesc:
            desckey !== ''
              ? state.assetsave.assetdesc === desckey
                ? state.assetsave.assetdesc
                : desckey
              : state.assetsave.assetdesc
        }
      };

      //// checker ko ng data to /////
      console.log(dataset);

      return {
        ...state,
        assetsave: {
          catselect:
            catkey !== ''
              ? state.assetsave.catselect === catkey
                ? state.assetsave.catselect
                : catkey
              : state.assetsave.catselect,
          statselect:
            statkey !== ''
              ? state.assetsave.statselect === statkey
                ? state.assetsave.statselect
                : statkey
              : state.assetsave.statselect,
          assetcode:
            codekey !== ''
              ? state.assetsave.assetcode === codekey
                ? state.assetsave.assetcode
                : codekey
              : state.assetsave.assetcode,
          assetname:
            namekey !== ''
              ? state.assetsave.assetname === namekey
                ? state.assetsave.assetname
                : namekey
              : state.assetsave.assetname,
          assetdesc:
            desckey !== ''
              ? state.assetsave.assetdesc === desckey
                ? state.assetsave.assetdesc
                : desckey
              : state.assetsave.assetdesc
        }
      };

    default:
      return state;
  }
};
