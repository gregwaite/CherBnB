import { merge } from 'lodash';
import { Link } from 'react-router-dom';
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
    this.props.processForm(user);
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
    let name = ( 
      <label className="login-name" key="name">Name
            <input
          type="text"
          onChange={this.update('username')}
          value={this.state.username} />
      </label>
    )

    let email = (
      <label className="login-email" key="email">Email Address
            <input
          type="text"
          onChange={this.update('email')}
          value={this.state.email} />
      </label>
    )

    let password = (
      <label className="login-password" key="password">Password
            <input
          type="text"
          onChange={this.update('password')}
          value={this.state.password} />
      </label>
    )
    let link;
    let text;
    let labels;
    if (this.props.formType === "Login") {
        link = "/signup";
        text ="Signup instead";
        labels = (
          [ email,
          <br/>,
          password,
          <br/>]
        );
     } else if (this.props.formType === "Signup") {
        link = "/login";
        text = "Login instead";
        labels = (
        [email,
          <br/>,
          name ,
          <br/>,
          password,
          <br/>,
        ]
        )
    }
    return (
    <div className="login-form-container">
      {this.renderErrors()}
      <h2>{this.props.formType} to continue</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {labels}
        <input className="session-submit" type="submit" value={this.formType}/>
        </form>
        <Link to={link}>{text}</Link>
    </div>)

  }

}

export default SessionForm;