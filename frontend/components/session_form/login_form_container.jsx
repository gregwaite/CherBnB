import React from 'react';
import { connect } from 'react-redux';
import { login, destroyErrors } from '../../actions/session_actions';
import sessionForm from './_session_form';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    formType: 'Log in',
    loggedIn: Boolean(state.session.id),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => {
      dispatch(login(user))
    },
    otherModalForm: (
      <a onClick={() => dispatch(openModal('signup'))}>Sign up</a>
    ),
    closeModal: () => dispatch(closeModal()),
    destroyErrors: () => dispatch(destroyErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);