import axios from 'axios';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getArtists } from '../../reduxSlices/artistSlice';
import { SearchIcon } from '../../shared/assets/icons';
import './style.css';

const MainPage = (props) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const { artists } = useSelector((state) => state.artists);

  useEffect(() => {
    dispatch(getArtists(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className="main">
      <div className="navbar">
        <div className="navbar-logo">LOGO</div>
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
      <div className="cards">
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <div>
              <h4>Miss you bad</h4>
              <p>03:00</p>
            </div>
            <p>By Burna Boy</p>
            <h4>Impact of Intrisic</h4>
          </div>
        </div>
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <div>
              <h4>Miss you bad</h4>
              <p>03:00</p>
            </div>
            <p>By Burna Boy</p>
            <h4>Impact of Intrisic</h4>
          </div>
        </div>
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <div>
              <h4>Miss you bad</h4>
              <p>03:00</p>
            </div>
            <p>By Burna Boy</p>
            <h4>Impact of Intrisic</h4>
          </div>
        </div>
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <div>
              <h4>Miss you bad</h4>
              <p>03:00</p>
            </div>
            <p>By Burna Boy</p>
            <h4>Impact of Intrisic</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
