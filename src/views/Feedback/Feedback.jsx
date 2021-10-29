import React from 'react';
import PropTypes from 'prop-types';
import successImg from './success.png';
import errorImg from './error.png';

const Feedback = ({ success }) => (
  <img alt="Feedback" src={success ? successImg : errorImg} />
);

Feedback.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Feedback;
