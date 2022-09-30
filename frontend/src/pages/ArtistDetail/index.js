import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SearchIcon } from '../../shared/assets/icons';
import './style.css';

const DetailsPage = (props) => {
  let navigate = useNavigate();

  const { artistInfo, topTracks, albums } = useSelector((state) => state.artists);


  return (
    <div className="detail-page">
      <div className="navbar">
        <button className="navbar-logo" onClick={() => navigate('/')}>
          LOGO
        </button>
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
            <img src={artistInfo.picture_xl} alt="Avatar" />
            <div>
              <h4>{artistInfo.name}</h4>
              <p className="fans-count">{artistInfo.nb_fan}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="top-tracks">
            <h4>Top tracks</h4>
            <ul>
              {topTracks &&
                topTracks.map((item, index) => (
                  <li key={item.id}>
                    <p>
                      {index + 1}. {item.title}{' '}
                    </p>
                    <span>{item.duration}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="albums-section">
          <h2>Albums</h2>
          <div className="album-cards">
            {albums &&
              albums.map((item) => (
                <div className="cards-card" key={item.id}>
                  <img src={item.cover} alt="Avatar" />
                  <div className="cards-container">
                    <h4>{item.title}</h4>
                    <p>{item.release_date}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

DetailsPage.propTypes = {};

export default DetailsPage;
