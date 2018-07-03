import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal/modal.js";
import Login from "../containers/login/index";
import logo from "../img/logo.png";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark headerbgColor">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="brandImg" alt="verizon_logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <h5>Home</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Profile">
                <h5>Profile</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobSearch">
                <h5>Job Search</h5>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.toggleModal}
            >
              Login
            </button>
          </form>
        </div>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <Login onClick={this.toggleModal.bind(this)} />
        </Modal>
      </nav>
    );
  }
}
export default Header;
