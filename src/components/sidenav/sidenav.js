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
      
        <aside class="sidebar pos-absolute z-2"
       data-role="sidebar"
       data-toggle="#sidebar-toggle-3"
       id="sb3"
       data-shift=".shifted-content-2"
       data-static-shift=".shifted-content-2"
       data-static="md">
    <div class="sidebar-header" data-image="images/sb-bg-1.jpg">
        <div class="avatar">
            <img data-role="gravatar" data-email="sergey@pimenov.com.ua" />
        </div>
        <span class="title fg-white">Metro 4 Components Library</span>
        <span class="subtitle fg-white"> 2018 © Sergey Pimenov</span>
    </div>
    <ul class="sidebar-menu">
        <li><Link  to="/dashoboard"><span class="mif-home icon"></span>
                Dashboard
              </Link>
        </li>
        <li>
            <Link  to="/profile"><span class="mif-home icon"></span>
                Home
              </Link>
        </li>
        <li>
            <Link  to="/jobSearch"><span class="mif-home icon"></span>
                Jobs Search
              </Link>
        </li>
        <li><a><span class="mif-books icon"></span>Guide</a></li>
        <li><a><span class="mif-files-empty icon"></span>Examples</a></li>
        <li class="divider"></li>
        <li><a><span class="mif-images icon"></span>Icons</a></li>
    </ul>
</aside>

    );
  }
}
export default sideNav;
