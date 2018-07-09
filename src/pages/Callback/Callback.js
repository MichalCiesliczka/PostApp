import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isUserLoggedIn } from '../../reducers/selectors/userSelectors';

const Callback = ({ isLoggedIn }) => (
  <Fragment>
    {
      isLoggedIn ? (
        <Redirect to="/dashboard" />
      ) : (
        <Redirect to="/login" />
      )
    }
  </Fragment>
);

Callback.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: isUserLoggedIn(state),
});

export default connect(mapStateToProps)(Callback);
