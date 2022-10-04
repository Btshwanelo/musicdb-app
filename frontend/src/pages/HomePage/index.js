import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAlbums } from '../../reduxSlices/albumsSlice';
import { getArtistInfo, mountArtist } from '../../reduxSlices/artistInfoSlice';
import { getArtists, getNext, getPrev } from '../../reduxSlices/artistsSlice';
import { getTopTracks } from '../../reduxSlices/topTracksSlice';
import { ArtistCard, Navbar } from '../../shared/components';
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
    dispatch(getAlbums(artistId));
    dispatch(getTopTracks(artistId));
    navigate(`detailed/${artistId}`);
  };

  useEffect(() => {
    dispatch(getArtists(searchValue));
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
          <h1>Loading...</h1>
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
      <div className="pagination">
        <button
          className={
            prevPage === null ? 'button--inactive previous ' : 'previous pagination-button'
          }
          onClick={() => dispatch(getPrev(prevPage))}>
          &laquo; Previous
        </button>
        <button
          className={nextPage === null ? 'button--inactive next ' : 'next pagination-button'}
          onClick={() => dispatch(getNext(nextPage))}>
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default MainPage;
