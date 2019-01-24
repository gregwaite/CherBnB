import { merge } from 'lodash';
import { withRouter } from 'react-router-dom';
import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const user = merge({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  update(field) {
    
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const name = ( 
      <label className="login-name" key="Username">Name
            <input
          type="text"
          onChange={this.update('username')}
          value={this.state.username} 
          />
      </label>
    )

    const email = (
      <label className="login-email" key="Email">Email Address
            <input
          type="text"
          onChange={this.update('email')}
          value={this.state.email}/>
      </label>
    )

    const password = (
      <label className="login-password" key="Password">Password
            <input
          type="text"
          onChange={this.update('password')}
          value={this.state.password} 
          />
      </label>
    )
    let labels;
    if (this.props.formType === "Login") {
        labels = (
          [email,
          <br key="1"/>,
          password,
          <br key="2"/>]
        );
     } else if (this.props.formType === "Signup") {
        labels = (
        [email,
          <br key="1"/>,
        name,
          <br key="2" />,
        password,
          <br key="3" />,]
        );
    }

    return (
      <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div onClick={this.props.closeModal} className="close-x">X</div>
            Please {this.props.formType} or {this.props.otherModalForm}
            {this.renderErrors()}
            <h2>{this.props.formType} to continue</h2>

            {labels}
          <input className="session-submit" type="submit" value={this.formType}/>
          </form>
      </div>
    )


  }

}

export default withRouter(SessionForm);