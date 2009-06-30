import React, { Fragment } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-default navbar-sticky bootsnav'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle'
            data-toggle='collapse'
            data-target='#navbar-menu'
          >
            <i class='fa fa-bars'></i>
          </button>
          <Link className='navbar-brand' to='/'>
            <p className='nav-p'>
              {" "}
              Tech <span className='nav-span'>Jobs</span>{" "}
            </p>
          </Link>
        </div>

        <div className='collapse navbar-collapse' id='navbar-menu'>
          <ul
            className='nav navbar-nav navbar-right'
            data-in='fadeInDown'
            data-out='fadeOutUp'
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>

            <li className='dropdown'>
              <a href='#' class='dropdown-toggle' data-toggle='dropdown'>
                Browse
              </a>
              <ul
                className='dropdown-menu animated fadeOutUp'
                style={{ display: "none", opacity: "1" }}
              >
                <li className='active'>
                  <Link to='/jobs'>Browse Jobs</Link>
                </li>
                <li>
                  <a href=''>Job Detail</a>
                </li>
                <li>
                  <a href=''>Resume Detail</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
