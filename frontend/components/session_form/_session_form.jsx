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
    this.demoCher = this.demoCher.bind(this);
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

  handleKeyDown(e) {
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

  demoCher(e) {
    e.preventDefault();
    const email = 'yeezyyeezywhatsgood@ye.ye'.split('');
    const password = 'hurryupwithmydamncroissants'.split('');
    const submit = document.getElementById('login-button');
    this.setState({ email: '', password: '' }, () =>
      this.demoCherHelper(email, password, submit)
    );
  }

  demoCherHelper(email, password, submit) {
    if (email.length > 0) {
      this.setState(
        { email: this.state.email + email.shift() }, () => {
          window.setTimeout(() =>
            this.demoCherHelper(email, password, submit), 10);
        }
      );
    } else if (password.length > 0) {
      this.setState(
        { password: this.state.password + password.shift() }, () => {
          window.setTimeout(() =>
            this.demoCherHelper(email, password, submit), 10);
        }
      );
    } else {
      submit.click();
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", (e) => this.handleKeyDown(e))
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.closeModal();
    }
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", (e) => this.handleKeyDown(e));
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

    const submitbutton = (
      <button id="login-button" type="submit" className="login-button">
        <span className="login-type-button">
          {this.props.formType}
        </span>
      </button>
      )

    const demoUser = (
      <button key="eleven" type="button" id="cher-demo-button"  onClick={this.demoCher} className="demo-login-button">
        <span className="login-type-button-demo">
          Demo Cher
        </span>
      </button>
    )
    let labels;
    let text;
    
    if (this.props.formType === "Log in") {
        labels = (
          [email,
            <br key="1"/>,
          password,
            <br key="2"/>,
          submitbutton,
            <br key="3"/>,
          demoUser,
            <br key="4" />,]
        );
        text = "Not yet a Cher?";
     } else if (this.props.formType === "Sign up") {
        labels = (
        [email,
          <br key="1"/>,
        name,
          <br key="2" />,
        password,
          <br key="3" />,
        submitbutton,
          <br key="4" />,]
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