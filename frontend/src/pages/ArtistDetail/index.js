import PropTypes from 'prop-types';
import React from 'react';

import { SearchIcon } from '../../shared/assets/icons';
import './style.css';

const DetailsPage = (props) => {
  return (
    <div className="detail-page">
      <div className="navbar">
        <div className="navbar-logo">LOGO</div>
        <div className="navbar-search">
          <button>
            <SearchIcon />
          </button>
          <input type="text" placeholder="Search.." name="search" />
        </div>
      </div>
      <div className="main-section">
        <div className="artist-section">
          <div className="artist-info">
            <img src="https://via.placeholder.com/150" alt="Avatar" />
            <div>
              <h4>Burna Boy</h4>
              <p className="fans-count">382K fans</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="top-tracks">
            <h4>Top tracks</h4>
            <ul>
              <li>
                <p>1. You are my lady remastered </p>
                <span>03:00</span>
              </li>
              <li>
                2. You are my lady remastered <span>03:00</span>
              </li>
              <li>
                3. You are my lady remastered <span>03:00</span>
              </li>
              <li>
                4. You are my lady remastered <span>03:00</span>
              </li>
              <li>
                5. You are my lady remastered <span>03:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="albums-section">
          <h2>Albums</h2>
          <div className="album-cards">
            <div className="cards-card">
              <img src="https://via.placeholder.com/150" alt="Avatar" />
              <div className="cards-container">
                <h4>Impact of Intrisic</h4>
                <p>2018</p>
              </div>
            </div>
            <div className="cards-card">
              <img src="https://via.placeholder.com/150" alt="Avatar" />
              <div className="cards-container">
                <h4>Impact of Intrisic</h4>
                <p>2018</p>
              </div>
            </div>
            <div className="cards-card">
              <img src="https://via.placeholder.com/150" alt="Avatar" />
              <div className="cards-container">
                <h4>Impact of Intrisic</h4>
                <p>2018</p>
              </div>
            </div>
            <div className="cards-card">
              <img src="https://via.placeholder.com/150" alt="Avatar" />
              <div className="cards-container">
                <h4>Impact of Intrisic</h4>
                <p>2018</p>
              </div>
            </div>
            <div className="cards-card">
              <img src="https://via.placeholder.com/150" alt="Avatar" />
              <div className="cards-container">
                <h4>Impact of Intrisic</h4>
                <p>2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailsPage.propTypes = {};

export default DetailsPage;
