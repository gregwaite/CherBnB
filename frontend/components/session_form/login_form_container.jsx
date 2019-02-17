import { connect } from 'react-redux';
import { login, destroyErrors } from '../../actions/session_actions';
import sessionForm from './_session_form';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    formType: 'Log in',
    loggedIn: Boolean(state.session.id),
    otherModalForm: ['signup', 'Sign up'],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => {
      dispatch(login(user))
    },
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    destroyErrors: () => dispatch(destroyErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);