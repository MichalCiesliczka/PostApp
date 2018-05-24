import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const ErrorPage = ({ location: { state: { title, message } } }) => (
  <div>
    <h2>{title}</h2>
    <p>{message}</p>
  </div>
);

ErrorPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      message: PropTypes.string,
    }),
  }),
};

ErrorPage.defaultProps = {
  location: {
    state: {
      title: 'An Error occured',
      message: 'Please do not contact me',
    }
  }
};

export default withRouter(ErrorPage);
