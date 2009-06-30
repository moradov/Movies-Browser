import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/global/globalContext";
import Item from "../../component/Item/Item";
import Spinner from "../../component/UI/Spinner/Spinner";
import ResultNotFound from "../../component/UI/ResultsNotFound/ResultsNotFound";
const Search = props => {
  const { getJobs, searchJobs, loading } = useContext(GlobalContext);
  const search = props.location.search
    .replace("?skill=", "")
    .replace("location=", "")
    .split("&");
  useEffect(() => {
    getJobs(search);
  }, []);
  // console.log(searchJobs);
  console.log("dddddddddddddddddddd");

  const [searchValue, setSearch] = useState({
    skill: "",
    location: ""
  });
  const inputHund = e => {
    setSearch({ ...searchValue, [e.target.name]: e.target.value });
  };
  const searchHund = () => {
    const data = [searchValue.skill, searchValue.location];
    getJobs(data);
    console.log(data);
  };
  useEffect(() => {
    console.log(loading);
  }, [loading]);
  return (
    <div>
      <div className='search-sec'>
        <input
          type='search'
          name='skill'
          placeholder='Skills'
          onChange={inputHund}
        />
        <input
          type='search'
          name='location'
          placeholder='Location'
          onChange={inputHund}
        />
        <button className='btn btn-danger' onClick={searchHund}>
          Search
        </button>
      </div>
      <div className='container'>
        {!loading ? searchJobs.map(el => <Item item={el} />) : <Spinner />}
        {searchJobs.length === 0 && !loading ? <ResultNotFound /> : null}
      </div>
    </div>
  );
};

export default Search;
