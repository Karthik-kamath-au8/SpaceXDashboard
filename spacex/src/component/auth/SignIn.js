import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/authActions";
import logo from "./img/logo.svg";
// import mail from "./img/mail.svg";
import pass from "./img/mail.svg";
import user from "./img/user.svg";
import "./style.css";
import { Redirect, Link } from "react-router-dom";
// import Checkbox from "@material-ui/core/Checkbox";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="align">
         <img style={{backgroundColor: 'black'}} src="../spacex.png" alt="spacex-logo" width='13%' height='20px' />
        <img className="logo" src={logo} alt=""/>
        <div className="card">
          <div className="head">
            <div>
            <p id="login" className="selected">
              Login
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
                  <img src={user} alt="" />
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
                <Link to="/register">No Account!! Register Here!</Link>
                
              </div>
              <button>Login</button>
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
  console.log(state);
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
