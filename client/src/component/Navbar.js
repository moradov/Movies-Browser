import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import globalContext from '../context/global/globalContext';

const Navbar = () => {
  //pull the context values
  const { setCurrentPagePath, currentPagePath } = useContext(globalContext);
  // navbar links
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Top Movies', path: '/top_movies' },
    { name: 'Upcoming', path: '/upcoming' },
    { name: 'Random', path: '/random' }
  ];

  return (
    <div className='navigation'>
      <ul className='nav-ul'>
        {links.map(link => (
          <li
            onClick={() => setCurrentPagePath(link.name)}
            className={currentPagePath === link.name ? 'active' : null}
            key={link.name}
          >
            <Link to={link.path}> {link.name} </Link>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
