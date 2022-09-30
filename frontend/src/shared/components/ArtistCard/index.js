import PropTypes from 'prop-types';
import React from 'react';

const ArtistCard = ({
  albumtitle,
  albumCover,
  artistId,
  artistName,
  trackTitle,
  trackDuration,
  handleViewDetails
}) => {
  return (
    <div className="cards-card" onClick={() => handleViewDetails(artistId)}>
      <img src={albumCover} alt="Avatar" />
      <div className="cards-container">
        <div>
          <h4>{trackTitle}</h4>
          <p>{trackDuration}</p>
        </div>
        <p>By {artistName}</p>
        <h4>{albumtitle}</h4>
      </div>
    </div>
  );
};

ArtistCard.propTypes = {};

export default ArtistCard;
