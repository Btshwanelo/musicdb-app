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
  albumtitle: PropTypes.string,
  albumCover: PropTypes.string,
  artistId: PropTypes.number,
  artistName: PropTypes.string,
  trackTitle: PropTypes.string,
  trackDuration: PropTypes.number,
  handleViewDetails: PropTypes.func
};

export default ArtistCard;
