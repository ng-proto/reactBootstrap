import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal/modal.js";
import Login from "../containers/login/index";
import logo from "../img/logo.png";
import './header.css'

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
      <div class="app-bar pos-absolute bg-red z-1" data-role="appbar">
        <button class="app-bar-item c-pointer" id="sidebar-toggle-3">
            <span class="mif-menu fg-white"></span>
        </button>
      </div>
    );
  }
}
export default Header;
