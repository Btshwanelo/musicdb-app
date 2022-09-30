import PropTypes from 'prop-types';
import React from 'react';

const TopTrack = ({ trackDuration, trackTite, index }) => {
  return (
    <li>
      <p>
        {index + 1}. {trackTite}{' '}
      </p>
      <span>{trackDuration}</span>
    </li>
  );
};

TopTrack.propTypes = {};

export default TopTrack;
