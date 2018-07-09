import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import DashboardOverview from '../Overview/DashboardOverview';
import { isUserLoggedIn } from '../../reducers/selectors/userSelectors';

const DashboardRouting = ({ isLoggedIn }) => (
  <Fragment>
    {
      isLoggedIn ? (
        <Switch>
          <Route path="/dashboard/overview" component={DashboardOverview} />

          <Route component={DashboardOverview} />
        </Switch>
      ) : (
        <Redirect to="/login" />
      )
    }
  </Fragment>
);

DashboardRouting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: isUserLoggedIn(state),
});

export default connect(mapStateToProps)(DashboardRouting);
