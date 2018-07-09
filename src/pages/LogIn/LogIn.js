import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import firebaseObj, { firebaseGoogleAuth } from '../../api/firebase';

import { logInUser } from '../../actions/user';
import { accessTokenHandler } from '../../utils/user';

const mapUserObjectFromFirebase = (userObject) => {
  const {
    user: {
      email,
      displayName,
      photoURL,
      uid,
    },
  } = userObject;

  return {
    email,
    displayName,
    photoURL,
    accessToken: accessTokenHandler.getTokenFromFirebase(userObject),
    userId: uid,
  };
};

class LogIn extends PureComponent {
  loginCallback = () => {
    firebaseObj.auth().signInWithPopup(firebaseGoogleAuth).then((result) => {
      const mappedUserObject = mapUserObjectFromFirebase(result);

      this.props.logInUser(mappedUserObject);
      const accessToken = accessTokenHandler.getTokenFromFirebase(result);
      accessTokenHandler.save(accessToken);

      this.props.history.push('/dashboard');
    }).catch(({ message }) => {
      this.props.history.push('/error-page', {
        title: 'Login failure',
        message,
      });
    });
  }

  render() {
    return (
      <button onClick={this.loginCallback}>
        Login!
      </button>
    );
  }
}

LogIn.propTypes = {
  logInUser: PropTypes.func.isRequired,
  /* eslint-disable react/forbid-prop-types */
  history: PropTypes.object.isRequired,
  /* eslint-enable */
};

const mapDispatchToProps = {
  logInUser,
};

export default connect(null, mapDispatchToProps)(withRouter(LogIn));
