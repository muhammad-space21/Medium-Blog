import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { init } from '../../redux/modules/auth/authActions';

import Spinner from '../../components/spinner';

const Auth = ({
  children,
  token,
  error,
  loading,
  init
}) => {
  if (!token && !loading && !error) {
    init();
  }
  return (
    <>
      {loading && <Spinner />}
      {/* {error && <span>Uh sorry something not right, please refresh)</span>} */}
      {!loading && children}
    </>
  );
};

Auth.defaultProps = {
  children: '',
  init: () => {},
  token: {},
  loading: false,
  error: false
};

Auth.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  init: PropTypes.func,
  token: PropTypes.objectOf(PropTypes.any),
  loading: PropTypes.bool,
  error: PropTypes.bool
};

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  loading: state.authReducer.loading,
  error: state.authReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(init())
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
