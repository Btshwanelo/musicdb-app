import PropTypes from 'prop-types';
import React from 'react';

import { fansNumToString } from '../../utils/index';

const ArtistInfo = ({ artistName, totalFans, coverPicture }) => {
  return (
    <div className="artist-info">
      <img src={coverPicture} alt="Avatar" />
      <div>
        <h4>{artistName}</h4>
        <p className="fans-count">{totalFans}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

ArtistInfo.propTypes = {};

export default ArtistInfo;
