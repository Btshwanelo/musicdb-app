import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchIcon } from '../../assets/icons';

const Navbar = ({setSearchValue, searchValue}) => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        LOGO
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search.."
          value={searchValue}
          name="search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
