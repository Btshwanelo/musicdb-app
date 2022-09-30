import axios from 'axios';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArtistInfo, getArtists } from '../../reduxSlices/artistSlice';
import { SearchIcon } from '../../shared/assets/icons';
import './style.css';

const MainPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  const { artists, artistInfo } = useSelector((state) => state.artists);

  useEffect(() => {
    !isEmpty(artistInfo) && navigate(`detailed/${artistInfo.id}`);
  }, [artistInfo]);

  const handleViewDetails = (artistId) => {
    if (!artistId) return null;
    dispatch(getArtistInfo(artistId));
  };

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
        {artists &&
          artists.map((item) => (
            <div
              className="cards-card"
              key={item.id}
              onClick={() => handleViewDetails(item.artist.id)}>
              <img src={item.album.cover} alt="Avatar" />
              <div className="cards-container">
                <div>
                  <h4>{item.title_short}</h4>
                  <p>{item.duration}</p>
                </div>
                <p>By {item.artist.name}</p>
                <h4>{item.album.title}</h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
