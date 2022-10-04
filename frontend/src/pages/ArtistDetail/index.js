import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAlbumsNext, getAlbumsPrev } from '../../reduxSlices/albumsSlice';
import { unmountArtist } from '../../reduxSlices/artistInfoSlice';
import { AlbumCard, ArtistInfo, Loader, Navbar, TopTrack } from '../../shared/components';
import Pagination from '../../shared/components/Pagination';
import { durationToRatio, fansNumToString } from '../../shared/utils/index';
import './style.css';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { albumsLoading, albums, prevPage, nextPage } = useSelector((state) => state.albums);
  const { tracksLoading, topTracks } = useSelector((state) => state.topTracks);
  const { artistLoading, artistInfo, isArtistInfo } = useSelector((state) => state.artistInfo);

  useEffect(() => {
    !isArtistInfo && navigate('/');
    return () => {
      dispatch(unmountArtist());
    };
  }, [dispatch, isArtistInfo, navigate]);

  return (
    <div className="detail-page">
      <Navbar />
      <div className="main-section">
        <div className="artist-section">
          {artistLoading ? (
            <Loader />
          ) : (
            <ArtistInfo
              artistName={artistInfo.name}
              totalFans={fansNumToString(artistInfo.nb_fan)}
              coverPicture={artistInfo.picture_xl}
            />
          )}
          <div className="top-tracks">
            <h4>Top tracks</h4>
            <ul>
              {tracksLoading ? (
                <Loader />
              ) : (
                topTracks.map((item, index) => (
                  <TopTrack
                    key={item.id}
                    trackDuration={durationToRatio(item.duration)}
                    trackTite={item.title}
                    index={index}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="albums-section">
          <h2>Albums</h2>
          <div className="album-cards">
            {albumsLoading ? (
              <Loader />
            ) : (
              albums.map((item) => (
                <AlbumCard
                  key={item.id}
                  albumCover={item.cover}
                  albumTiltle={item.title}
                  albumRealeseDate={item.release_date}
                />
              ))
            )}
          </div>
        </div>
        <Pagination
          getNext={getAlbumsNext}
          getPrev={getAlbumsPrev}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
