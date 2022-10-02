import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchIcon } from '../../assets/icons';

const Navbar = ({ setSearchValue, searchValue, isSearchOpen, setIsSearchOpen }) => {
  const navigate = useNavigate('/');
  const handleNavigation = () => navigate('/');
  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={handleNavigation}>
        LOGO
      </div>
      <div className={!isSearchOpen ? ' navbar-search' : 'navbar-search--active'}>
        <input
          type="text"
          placeholder="Search.."
          value={searchValue}
          name="search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
