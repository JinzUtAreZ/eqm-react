import {
  JO_METER_LOAD_FORKLIFT_HD,
  JO_METER_GET_LIST,
  JO_METER_UPDATE_LIST_ROW,
  JO_METER_DELETE_LIST_ROW,
  JO_METER_SAVE_LIST,
  JO_METER_SEARCH_LIST,
  JO_MATER_LIST,
  SET_LOADING
} from '../types/JOtypes';

const initialState = {
  loading: false,
  meterlist: null,
  metercol: null,
  current: null,
  filtered: null,
  error: null,
  materlist: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case JO_METER_GET_LIST:
      console.log(action.payload);
      const metercol = Object.keys(action.payload[0]).map(key => {
        return {
          //Header: key,
          //accessor: key
          columns: [
            {
              Header: 'AssetID',
              accessor: 'AssetID'
            },
            {
              Header: '1',
              accessor: 'Col1'
            },
            {
              Header: '2',
              accessor: 'Col2'
            },
            {
              Header: '3',
              accessor: 'Col3'
            },
            {
              Header: 'Edit/Delete Rows',
              accessor: 'Actions',
              Cell: row =>
                '<center>' +
                '<button onClick={() => handleEdit(row.original)}>Edit</button>' +
                '&nbsp;&nbsp;' +
                '<button onClick={() => handleDelete(row)}>Delete</button>' +
                '</center>'
            }
          ]
        };
      });
      return {
        ...state,
        meterlist: action.payload,
        //fitered: action.payload,
        metercol: metercol,
        loading: false
      };
    case JO_METER_DELETE_LIST_ROW:
      return {
        ...state,
        meterlist: state.meterlist.filter(
          meterlist => meterlist._id !== action.payload
        ),
        loading: false
      };
    case JO_MATER_LIST:
      console.log(action.payload);
      return {
        ...state,
        materlist: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
