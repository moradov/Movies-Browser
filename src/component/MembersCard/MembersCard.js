import React from "react";
import { Link } from "react-router-dom";
const MembersCard = () => {
  return (
    <section className='membercard dark'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-4'>
            <div className='left-widget-sidebar'>
              <div className='card-widget bg-white user-card'>
                <div className='u-img img-cover img1 '></div>
                <div className='u-content'>
                  <div className='avatar box-80'>
                    <img
                      className='img-responsive img-circle img-70 shadow-white'
                      src='img/avatar3.jpg'
                      alt=''
                    />
                    <i className='fa fa-circle-o fa-green'></i>
                  </div>
                  <h5>Sazzel Shi</h5>
                  <p className='text-muted'>UX/ Designer</p>
                </div>
                <div className='user-social-profile'>
                  <ul>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-facebook'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-google-plus'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-twitter'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-instagram'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-linkedin'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-4'>
            <div className='left-widget-sidebar'>
              <div className='card-widget bg-white user-card'>
                <div className='u-img img-cover img2'></div>
                <div className='u-content'>
                  <div className='avatar box-80'>
                    <img
                      className='img-responsive img-circle img-70 shadow-white'
                      src='img/avatar2.jpg'
                      alt=''
                    />
                    <i className='fa fa-circle-o fa-green'></i>
                  </div>
                  <h5>Daniel Dezox</h5>
                  <p className='text-muted'>CEO Founder</p>
                </div>
                <div className='user-social-profile'>
                  <ul>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-facebook'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-google-plus'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-twitter'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-instagram'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-linkedin'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-4'>
            <div className='left-widget-sidebar'>
              <div className='card-widget bg-white user-card'>
                <div className='u-img img-cover img3'></div>
                <div className='u-content'>
                  <div className='avatar box-80'>
                    <img
                      className='img-responsive img-circle img-70 shadow-white'
                      src='img/avatar1.jpg'
                      alt=''
                    />
                    <i className='fa fa-circle-o fa-green'></i>
                  </div>
                  <h5>Silp Sizzer</h5>
                  <p className='text-muted'>Human Resource</p>
                </div>
                <div className='user-social-profile'>
                  <ul>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-facebook'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-google-plus'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-twitter'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-instagram'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <i className='fa fa-linkedin'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersCard;
