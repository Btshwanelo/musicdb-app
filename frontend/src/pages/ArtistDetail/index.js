import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { unmountArtist } from '../../reduxSlices/artistSlice';
import { AlbumCard, ArtistInfo, Navbar, TopTrack } from '../../shared/components';
import { durationToRatio } from '../../shared/utils/index';
import './style.css';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { artistInfo, topTracks, albums } = useSelector((state) => state.artists);
  useEffect(() => {
    return () => {
      dispatch(unmountArtist());
    };
  }, []);
  console.log(artistInfo)

  return (
    <div className="detail-page">
      <Navbar />
      <div className="main-section">
        <div className="artist-section">
          <ArtistInfo
            artistName={artistInfo.name}
            totalFans={artistInfo.nb_fan}
            coverPicture={artistInfo.picture_xl}
          />
          <div className="top-tracks">
            <h4>Top tracks</h4>
            <ul>
              {topTracks &&
                topTracks.map((item, index) => (
                  <TopTrack
                    key={item.id}
                    trackDuration={durationToRatio(item.duration)}
                    trackTite={item.title}
                    index={index}
                  />
                ))}
            </ul>
          </div>
        </div>
        <div className="albums-section">
          <h2>Albums</h2>
          <div className="album-cards">
            {albums &&
              albums.map((item) => (
                <AlbumCard
                  key={item.id}
                  albumCover={item.cover}
                  albumTiltle={item.title}
                  albumRealeseDate={item.release_date}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
