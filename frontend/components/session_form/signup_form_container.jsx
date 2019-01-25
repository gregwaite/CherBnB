import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import sessionForm from './_session_form';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: "Sign up",
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => {
      dispatch(signup(user))
      dispatch(closeModal())
    },
    otherModalForm: (
      <a onClick={() => dispatch(openModal('login'))}>Log in</a>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);