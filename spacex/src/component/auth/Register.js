import React, { Component } from "react";
import { register } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import logo from "./img/logo.svg";
import mail from "./img/mail.svg";
import pass from "./img/mail.svg";
import user from "./img/user.svg";

import "./style.css";

class Register extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.register(this.state); 
    // this.props.history.push("/signin")

  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="align">
        <img style={{backgroundColor: 'black'}} src="../spacex.png" alt="spacex-logo" width='13%' height='20px' />	
        <img className="logo" src={logo} alt="" />
        <div className="card">
          <div className="head">
            <div>
              <p id="register" className="selected">
                Register
              </p>
            </div>
          </div>
          <div className="tabs">
            <form onSubmit={this.handleSubmit}>
              <div className="inputs">
                <div className="input">
                  <input
                    placeholder="Email"
                    id="email"
                    type="email"
                    onChange={this.handleChange}
                  />
                  <img src={mail} alt="" />
                </div>
                <div className="input">
                  <input
                    placeholder="Password"
                    id="password"
                    type="password"
                    onChange={this.handleChange}
                  />
                  <img src={pass} alt="" />
                </div>
                <div className="input">
                  <input
                    placeholder="Username"
                    id="userName"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <img src={user} alt="" />
                </div>
              </div>
              <button>Register</button>
              <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newUser) => dispatch(register(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
