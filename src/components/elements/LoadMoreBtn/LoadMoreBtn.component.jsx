import React from 'react';
import PropTypes from 'prop-types';
import './LoadMoreBtn.styles.css';

const LoadMoreBtn = ({ text, onClick }) => (
  <center>
  <div className="rmdb-loadmorebtn" onClick={onClick}>
    <p>{text}</p>
  </div>
  </ center>
)

LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default LoadMoreBtn;
