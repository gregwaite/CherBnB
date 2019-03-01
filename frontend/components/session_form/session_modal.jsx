import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignupFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import BookingIndexContainer from '../bookings/booking_index_container';
import { destroyErrors } from '../../actions/session_actions';
import React from 'react';


function Modal({ modal, closeModal, destroyErrors }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
    component = <LoginFormContainer />;
    break;
    case 'signup':
    component = <SignupFormContainer />;
    break;
    case 'booking':
    component= <BookingIndexContainer />;
    break;
    default:
    return null;
  }

  return (
    <div className="background-modal" onClick={() => handleModalClick(destroyErrors, closeModal)}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

function handleModalClick(destroyErrors, closeModal) {
  destroyErrors();
  closeModal();
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
  }
}

export default connect(mapStateToProps, null)(Modal);