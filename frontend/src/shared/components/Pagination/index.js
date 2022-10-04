import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

const Pagination = ({ getNext, getPrev, prevPage, nextPage }) => {
  const dispatch = useDispatch();
  return (
    <div className="pagination">
      <button
        className={prevPage === null ? 'button--inactive previous ' : 'previous pagination-button'}
        onClick={() => dispatch(getPrev(prevPage))}
      >
        &laquo; Previous
      </button>
      <button
        className={nextPage === null ? 'button--inactive next ' : 'next pagination-button'}
        onClick={() => dispatch(getNext(nextPage))}
      >
        Next &raquo;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  getNext: PropTypes.func,
  getPrev: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string
};

export default Pagination;
