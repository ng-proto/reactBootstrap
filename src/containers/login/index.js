import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";
class Login extends Component {
  render() {
    const btnWidth = {
      width: "100%"
    };

    const btnLeft = {
      marginLeft: "15%"
    };

    const middleOr = {
      position: "absolute",
      top: "0%",
      left: "60%",
      borderLeft: "1px solid grey",
      height: "100%"
    };
    return (
      <div className="container">
        <h3 className="text-center">Login</h3>
        <div className="row mt-6">
          <div className="col-sm">
            <div className="row">
              <input
                type="text"
                className="form-control"
                placeholder="Email/Mobile Number"
              />
            </div>
            <div className="row mt-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="row mt-2">
              <button
                type="button"
                className="btn btn-success"
                style={btnWidth}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="col-1">
            <div style={middleOr} />
          </div>
          <div className="col-sm">
            <div className="row">
              <button className="loginBtn loginBtn--google">
                Login with Google
              </button>
            </div>
            <div className="row text-center">
              <h4 className="text-center orBtn">Or</h4>
            </div>
            <div className="row">
              <button className="loginBtn loginBtn--linkedin">
                Login with Linkedin
              </button>
            </div>
          </div>
        </div>
        <div className="row horizontalLine" />
        <div className="row mt-4">
          <button
            type="button"
            className="btn btn-outline-success signUp"
            onClick={this.props.onClick}
            style={btnLeft}
          >
            {/* <Link className="nav-link" to="/signup"> */}
            <Link className="nav-link" to="/org-role">
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Login;
