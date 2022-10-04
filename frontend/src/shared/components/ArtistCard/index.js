import PropTypes from 'prop-types';
import React from 'react';

import { durationToRatio } from '../../utils/index';

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
          <p>{durationToRatio(trackDuration)}</p>
        </div>
        <p>By {artistName}</p>
        <h4>{albumtitle}</h4>
      </div>
    </div>
  );
};

ArtistCard.propTypes = {
  albumtitle: PropTypes.string.isRequired,
  albumCover: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  trackTitle: PropTypes.string.isRequired,
  trackDuration: PropTypes.string.isRequired,
  handleViewDetails: PropTypes.string.isRequired
};

export default ArtistCard;
