import React from 'react';
import { useSelector } from 'react-redux';

import AlbumCard from '../../shared/components/AlbumCard';
import ArtistInfo from '../../shared/components/ArtistInfo';
import Navbar from '../../shared/components/Navbar';
import TopTrack from '../../shared/components/TopTracks';
import './style.css';

const DetailsPage = (props) => {
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
                    trackDuration={item.duration}
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

DetailsPage.propTypes = {};

export default DetailsPage;
