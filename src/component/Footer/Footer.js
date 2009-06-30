import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='col-md-4 col-sm-6'>
          <h4>Featured Job</h4>
          <ul className='footer-ui'>
            <li>Browse Jobs</li>
            <li>Premium MBA Jobs</li>
            <li>Access Database</li>
            <li>Manage Responses</li>
            <li>Report a Problem</li>
            <li>Mobile Site</li>
          </ul>
        </div>

        <div className='col-md-4 col-sm-6'>
          <h4>Reach Us</h4>
          <address>
            <ul>
              <li>1201, Murakeu Market, 12 street</li>
              <li>Email: Support@job-api.com</li>
              <li>Call: 044 123 458 65879</li>
              <li>Skype: job-api@skype</li>
              <li>FAX: 123 456 85</li>
            </ul>
          </address>
        </div>

        <div className='col-md-4 col-sm-6'>
          <h4>Drop A Mail</h4>
          <form>
            <input
              type='text'
              className='form-control input-lg'
              placeholder='Your Name'
            />
            <input
              type='text'
              className='form-control input-lg'
              placeholder='Email...'
            />
            <textarea className='form-control' placeholder='Message'></textarea>
            <button type='submit' className='btn btn-primary'>
              Login
            </button>
          </form>
        </div>
      </div>
      <div className='copy-right'>
        <p>
          &copy;Copyright 2019 Tech Jobs | Developed By{" "}
          <a href='https://themezhub.com/'>Morad</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
