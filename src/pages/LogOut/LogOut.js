import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import firebaseObj from '../../api/firebase';
import { logOutUser } from '../../actions/user';
import { accessTokenHandler } from '../../utils/user';

const LogOut = (props) => {
  props.logOutUser();
  accessTokenHandler.remove();

  firebaseObj.auth().signOut()
    .then(() => {
      props.history.push('/');
    });

  return null;
};

const mapDispatchToProps = {
  logOutUser,
};

export default connect(null, mapDispatchToProps)(withRouter(LogOut));
