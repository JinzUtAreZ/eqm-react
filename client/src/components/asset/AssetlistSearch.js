import React, { useState, useRef } from 'react';

const AssetlistSearch = () => {
  var [searchdata, setSearch] = useState([]);
  const text = useRef('');

  const SearchTable = e => {
    let search = text.current.value;
    searchdata = tbldata;
    if (search) {
      searchdata = searchdata.filter(row => {
        return (
          row.AssetCode.includes(search) ||
          row.AssetTag.includes(search) ||
          row.AssetName.includes(search) ||
          row.Manufacturer.includes(search) ||
          row.ModelNo.includes(search) ||
          row.SerialNo.includes(search)
        );
      });
    }
  };

  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            Search:{' '}
            <input
              id="search"
              type="search"
              placeholder="Search Asset.."
              ref={text}
              onChange={SearchTable}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default AssetlistSearch;
