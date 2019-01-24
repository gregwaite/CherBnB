import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import sessionForm from './_session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'Login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);