import PropTypes from 'prop-types';

export default {
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onClick: PropTypes.func,
  isLink: PropTypes.bool,
  disabled: PropTypes.bool,
};
