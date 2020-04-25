import React, { useContext } from "react";
import { withRouter } from "react-router";
import globalContext from "../context/global/globalContext";
const Search = (props) => {
  // pull context values
  const { searchKeyHund, searchKey } = useContext(globalContext);

  return (
    <div className='search-sec'>
      <div className='logo' onClick={() => props.history.push("/")}>
        Movies Land
      </div>
      <div className='search'>
        <i className='fa fa-search'></i>
        <input
          onChange={(e) => searchKeyHund(e.target.value)}
          value={searchKey}
          name='search'
          type='search'
          placeholder='Search Movies...'
        />
      </div>
    </div>
  );
};

export default withRouter(Search);
