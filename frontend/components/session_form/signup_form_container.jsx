import React from 'react';
import { connect } from 'react-redux';
import { signup, destroyErrors } from '../../actions/session_actions';
import sessionForm from './_session_form';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    formType: "Sign up",
    loggedIn: Boolean(state.session.id),
    otherModalForm: ['login', 'Log in']
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => {
      dispatch(signup(user))
    },
    // otherModalForm: (
    //   <a onClick={() => dispatch(openModal('login'))}>Log in</a>
    // ),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    destroyErrors: () => dispatch(destroyErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);