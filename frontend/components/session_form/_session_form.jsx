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
    let link = "";
    let text = "";
    switch(this.formType) {
      case "Login":
        link = "/signup";
        text="Signup instead";
      case "Signup":
        link= "/login";
        text = "Login instead";
      default:
        link;
    }
    return (
    <div className="login-form-container">
      {this.renderErrors()}
      <h2>{this.formType}</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <label>Email: 
            <input
            type="text"
            onChange={this.update('email')}
            value={this.state.email} />
          </label>
          <br/>

          <label>Username: 
            <input
            type="text"
            onChange={this.update('username')}
            value={this.state.username} />
          </label>
          <br/>

          <label>Password: 
            <input  
              type="text" 
              onChange={this.update('password')}
              value={this.state.password}/>
          </label>
          <br/>

        <input className="session-submit" type="submit" value={this.formType}/>
        </form>
        <Link to={link}>{text}</Link>
    </div>)

  }

}

export default SessionForm;