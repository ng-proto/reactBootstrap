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
      marginLeft: "20%",
      width: "48%",
      "border-radius": "2px"
    };

    const middleOr = {
      position: "absolute",
      top: "0%",
      left: "45%",
      borderLeft: "1px solid grey",
      height: "100%"
    };
    return (
      <div className="container">
        <label>
          <h5>Login</h5>
        </label>
        <div class="grid">
          <div class="row border-bottom bd-cyan pb-2">
            <div class="cell-6 border-right bd-cyan">
              <form>
                <div class="form-group">
                  <label>Email address</label>
                  <input type="email" placeholder="Enter email" />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input type="password" placeholder="Enter email" />
                </div>
                <div class="form-group">
                  <button class="button success">Submit data</button>
                </div>
              </form>
            </div>
            <div class="cell-6">
              <div className="grid">
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
                <div className="row text-center">
                  <h4 className="text-center orBtn">Or</h4>
                </div>
                <div className="row">
                  <button
                    type="button"
                    className="button primary  "
                    onClick={this.props.onClick}
                    style={btnLeft}
                  >
                    <Link className="nav-link fg-white" to="/signup">
                      Sign Up
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Login;
