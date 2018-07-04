import React, { Component } from "react";
import { Link } from "react-router-dom";
class sideNav extends Component {
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
      <aside
        className="sidebar pos-absolute z-2"
        data-role="sidebar"
        data-toggle="#sidebar-toggle-3"
        id="sb3"
        data-shift=".shifted-content-2"
        data-static-shift=".shifted-content-2"
        data-static="md"
      >
        <div className="sidebar-header" data-image="images/sb-bg-1.jpg">
          <div className="avatar">
            <img data-role="gravatar" data-email="sergey@pimenov.com.ua" />
          </div>
          <span className="title fg-white">Metro 4 Components Library</span>
          <span className="subtitle fg-white"> 2018 © Sergey Pimenov</span>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/dashoboard">
              <span className="mif-home icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/jobSearch">
              <span className="mif-home icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobSearch">
              <span className="mif-home icon" />
              Jobs Search
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <span className="mif-home icon" />
              My Profile
            </Link>
          </li>
          <li>
            <a>
              <span className="mif-books icon" />Guide
            </a>
          </li>

          <li className="divider" />
          <li>
            <a>
              <span className="mif-images icon" />Icons
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}
export default sideNav;
