import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/global/globalContext";
import Item from "../../component/Item/Item";
import Spinner from "../../component/UI/Spinner/Spinner";
import ResultNotFound from "../../component/UI/ResultsNotFound/ResultsNotFound";
import ErrHund from "../../component/ErrHund/ErrHund";
const Search = ({ history, location }) => {
  // pull the nedded values from the global state
  const { getJobs, searchJobs, loading, err } = useContext(GlobalContext);
  //pars the URL
  const search = location.search
    .replace("?skill=", "")
    .replace("location=", "")
    .split("&");
  useEffect(() => {
    // getJobs when the component load
    getJobs({
      skill: search[0],
      loaction: search[1]
    });
  }, []);
  // local state for search input value
  const [searchValue, setSearch] = useState({
    skill: "",
    location: ""
  });
  // hundle search input fields
  const inputHund = e => {
    setSearch({ ...searchValue, [e.target.name]: e.target.value });
  };
  // submit the search
  const submit = () => {
    history.push(
      `/search?skill=${searchValue.skill}&location=${searchValue.location}`
    );
    getJobs({
      skill: search[0],
      loaction: search[1]
    });
  };

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
        <button className='btn btn-danger' onClick={submit}>
          Search
        </button>
      </div>
      <div className='container'>
        {!loading ? (
          searchJobs.map(el => <Item key={el.id} item={el} />)
        ) : (
          <Spinner />
        )}
        {!location.search && !loading ? (
          <div
            style={{
              textAlign: "center",
              paddingTop: "105px",
              fontSize: "22px"
            }}
          >
            fille the search field{" "}
          </div>
        ) : null}
        {err ? <ErrHund /> : null}
        {searchJobs.length === 0 && !loading && location.search ? (
          <ResultNotFound />
        ) : null}
      </div>
    </div>
  );
};

export default Search;
