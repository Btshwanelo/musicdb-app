import PropTypes from 'prop-types';
import React from 'react';

const ArtistInfo = ({ artistName, totalFans, coverPicture }) => {
  return (
    <div className="artist-info">
      <img src={coverPicture} alt="Avatar" />
      <div>
        <h4>{artistName}</h4>
        <p className="fans-count">{totalFans || 0}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

ArtistInfo.propTypes = {
  artistName: PropTypes.string,
  totalFans: PropTypes.any,
  coverPicture: PropTypes.string
};

export default ArtistInfo;
