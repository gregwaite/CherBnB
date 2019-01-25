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
    this.handleKeyDown = this.handleKeyDown.bind(this);
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

  handleKeyDown(e) {
    debugger
    if (e.keyCode === 27) {
      this.props.closeModal();
    }
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
      <label className="login-input" key="Username">
            <input
          type="text"
          onChange={this.update('username')}
          value={this.state.username} 
          placeholder="Name"
          />
      </label>
    )

    const email = (
      <label className="login-input" key="Email">
            <input
          type="text"
          onChange={this.update('email')}
          value={this.state.email}
          placeholder="Email Address"/>
      </label>
    )

    const password = (
      <label className="login-input" key="Password">
            <input
          type="text"
          onChange={this.update('password')}
          value={this.state.password} 
          placeholder="Password"
          />
      </label>
    )
    let labels;
    let text;
    
    if (this.props.formType === "Log in") {
        labels = (
          [email,
          <br key="1"/>,
          password,
          <br key="2"/>]
        );
        text = "Not yet a Cher?";
     } else if (this.props.formType === "Sign up") {
        labels = (
        [email,
          <br key="1"/>,
        name,
          <br key="2" />,
        password,
          <br key="3" />,]
        );
        text = "Already a Cher?";
    }
    return (
      <div className="login-form-container" >
        <form onSubmit={this.handleSubmit} className="login-form-box">
            <div onClick={this.props.closeModal} className="close-x">X</div>
            {this.renderErrors()}
            <h2>{this.props.formType} to continue</h2>

            {labels}
          <button type="submit" className="login-button">
            <span className="login-type-button">
              {this.props.formType}
            </span>
          </button>
          </form>
          <br/>
        <div className="other-modal">
          <p>{text}</p>
          {this.props.otherModalForm}
        </div>
      </div>
    )


  }

}

export default withRouter(SessionForm);