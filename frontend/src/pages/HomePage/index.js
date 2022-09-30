import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAlbums, getArtistInfo, getArtists, getTopTracks } from '../../reduxSlices/artistSlice';
import { SearchIcon } from '../../shared/assets/icons';
import ArtistCard from '../../shared/components/ArtistCard';
import Navbar from '../../shared/components/Navbar';
import './style.css';

const MainPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  const { artists, artistInfo, loading, error } = useSelector((state) => state.artists);

  useEffect(() => {
    !isEmpty(artistInfo) && navigate(`detailed/${artistInfo.id}`);
  }, [artistInfo, navigate]);

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
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Loading...</h1>
        </div>
      )}
      {error && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>{error}</h1>
        </div>
      )}
      {artists === undefined && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Search for a song</h1>
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

MainPage.propTypes = {};

export default MainPage;
