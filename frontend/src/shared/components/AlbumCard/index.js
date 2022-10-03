import PropTypes from 'prop-types';
import React from 'react';

import { getYear } from '../../utils/index';

const AlbumCard = ({ albumCover, albumTiltle, albumRealeseDate }) => {
  return (
    <div className="cards-card">
      <img src={albumCover} alt="Avatar" />
      <div className="cards-container">
        <h4>{albumTiltle}</h4>
        <p>{getYear(albumRealeseDate)}</p>
      </div>
    </div>
  );
};

AlbumCard.propTypes = {};

export default AlbumCard;
