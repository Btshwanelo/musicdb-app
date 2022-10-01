import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  getAlbums,
  getArtistInfo,
  getArtists,
  getTopTracks,
  mountArtist
} from '../../reduxSlices/artistSlice';
import { ArtistCard, Navbar } from '../../shared/components';
import './style.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  const { artists, artistInfo, loading, error, isArtistInfo } = useSelector(
    (state) => state.artists
  );

  useEffect(() => {
    isArtistInfo && navigate(`detailed/${artistInfo.id}`);
  }, [artistInfo, navigate]);

  const handleViewDetails = (artistId) => {
    if (!artistId) return null;
    dispatch(mountArtist());
    dispatch(getArtistInfo(artistId));
    dispatch(getAlbums(artistId));
    dispatch(getTopTracks(artistId));
  };

  useEffect(() => {
    dispatch(getArtists(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className="main">
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
            // fontSize: '40px',
            // color: 'aliceblue',
            // background: '#e63333',
            // height: 'fit-content'
          }}>
          <h1>Loading...</h1>
        </div>
      )}
      {error && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '40px',
            color: 'aliceblue',
            background: '#103551',
            height: 'fit-content'
          }}>
          <h1>{error}</h1>
        </div>
      )}
      {artists === undefined && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '40px',
            color: 'aliceblue',
            background: '#103551',
            height: 'fit-content'
          }}>
          <h1>Search a song</h1>
        </div>
      )}
      <div className="cards">
        {artists &&
          artists.map((item) => (
            <ArtistCard
              key={item.id}
              albumtitle={item.album.title}
              albumCover={item.album.cover}
              artistId={item.artist.id}
              artistName={item.artist.name}
              trackTitle={item.title_short}
              trackDuration={item.duration}
              handleViewDetails={handleViewDetails}
            />
          ))}
      </div>
    </div>
  );
};

export default MainPage;
