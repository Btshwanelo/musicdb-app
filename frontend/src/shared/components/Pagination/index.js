import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

const Pagination = ({ getFunc, prevId, nextId, artistId }) => {
  const dispatch = useDispatch();
  return (
    <div className="pagination">
      <button
        className={prevId === null ? 'button--inactive previous ' : 'previous pagination-button'}
        onClick={() => dispatch(getFunc({ artistId: artistId, indexId: prevId }))}>
        &laquo; Previous
      </button>
      <button
        className={nextId === null ? 'button--inactive next ' : 'next pagination-button'}
        onClick={() => dispatch(getFunc({ artistId: artistId, indexId: nextId }))}>
        Next &raquo;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  getAlbums: PropTypes.func,
  artistId: PropTypes.number,
  prevPage: PropTypes.number,
  nextPage: PropTypes.number
};

export default Pagination;
