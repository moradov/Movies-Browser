import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../Banner.js/Banner.css";

const Banner = props => {
  const [searchValue, setSearch] = useState({
    skill: "",
    location: ""
  });
  const inputHund = e => {
    setSearch({ ...searchValue, [e.target.name]: e.target.value });
  };

  const SearchSubmit = e => {
    props.history.push(
      `/search?skill=${searchValue.skill}&location=${searchValue.location}`
    );
  };

  return (
    <section className='main-banner'>
      <div className='container'>
        <div className='caption'>
          <h2>Build Your Career</h2>
          <form>
            <fieldset>
              <div className='col-md-2 col-sm-2'></div>
              <div className='col-md-4 col-sm-4 no-pad'>
                <input
                  type='text'
                  className='form-control border-right'
                  placeholder='Skills, Designation, Companies'
                  name='skill'
                  onChange={inputHund}
                />
              </div>
              <div className='col-md-3 col-sm-3 no-pad'>
                <input
                  type='text'
                  className='form-control border-right'
                  placeholder='location'
                  name='location'
                  onChange={inputHund}
                />
              </div>
              <div className='col-md-2 col-sm-2 no-pad'>
                <button className='btn seub-btn' onClick={SearchSubmit}>
                  submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Banner);
