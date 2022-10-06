import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAlbums } from '../../reduxSlices/albumsSlice';
import { getArtistInfo, mountArtist } from '../../reduxSlices/artistInfoSlice';
import { getArtists } from '../../reduxSlices/artistsSlice';
import { getTopTracks } from '../../reduxSlices/topTracksSlice';
import { ArtistCard, Loader, Navbar } from '../../shared/components';
import Pagination from '../../shared/components/Pagination';
import { indexStringToNum } from '../../shared/utils';
import './style.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { artistInfo } = useSelector((state) => state.artistInfo);
  const { artists, loading, error, isArtistInfo, nextPage, prevPage } = useSelector(
    (state) => state.artists
  );

  useEffect(() => {
    isArtistInfo && navigate(`detailed/${artistInfo.id}`);
  }, [isArtistInfo, artistInfo.id, navigate]);

  const handleViewDetails = (artistId) => {
    if (!artistId) return null;
    dispatch(mountArtist());
    dispatch(getArtistInfo(artistId));
    dispatch(getAlbums({ artistId: artistId, indexId: 0 }));
    dispatch(getTopTracks(artistId));
    navigate(`detailed/${artistId}`);
  };

  useEffect(() => {
    dispatch(getArtists({ query: searchValue, indexId: 0 }));
  }, [dispatch, searchValue]);

  return (
    <div className="main">
      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Loader />
        </div>
      )}
      {error && (
        <div className="info">
          <h1>{error}</h1>
        </div>
      )}
      {artists === undefined && (
        <div className="info">
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
      <Pagination
        getFunc={getArtists}
        prevId={indexStringToNum(prevPage)}
        nextId={indexStringToNum(nextPage)}
        artistId={artistInfo.id}
      />
    </div>
  );
};

export default MainPage;
