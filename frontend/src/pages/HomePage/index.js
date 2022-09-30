import axios from 'axios';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAlbums, getArtistInfo, getArtists, getTopTracks } from '../../reduxSlices/artistSlice';
import { SearchIcon } from '../../shared/assets/icons';
import './style.css';

const MainPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  const { artists, artistInfo, loading, error } = useSelector((state) => state.artists);

  useEffect(() => {
    !isEmpty(artistInfo) && navigate(`detailed/${artistInfo.id}`);
  }, [artistInfo]);

  const handleViewDetails = (artistId) => {
    if (!artistId) return null;
    dispatch(getArtistInfo(artistId));
    dispatch(getAlbums(artistId));
    dispatch(getTopTracks(artistId));
  };

  useEffect(() => {
    dispatch(getArtists(searchValue));
  }, [dispatch, searchValue]);
  console.log(artists);
  return (
    <div className="main">
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
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {error && (
        <div>
          <h1>{error}</h1>
        </div>
      )}
      {artists === undefined && (
        <div>
          <h1>Search for a song...</h1>
        </div>
      )}
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
