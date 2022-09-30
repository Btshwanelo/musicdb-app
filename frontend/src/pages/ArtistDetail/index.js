import React from 'react';
import { useSelector } from 'react-redux';

import { AlbumCard, ArtistInfo, Navbar, TopTrack } from '../../shared/components';
import { durationToRatio } from '../../shared/utils/index';
import './style.css';

const DetailsPage = () => {
  const { artistInfo, topTracks, albums } = useSelector((state) => state.artists);

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
