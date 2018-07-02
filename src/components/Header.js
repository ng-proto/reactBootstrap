import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal/modal.js';
import Login from '../containers/login/index.js';

class Header extends Component {

  constructor(props) {
    super(props);
console.log(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    console.log(this.state.isOpen)
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.isOpen)
  }


    render(){
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobSearch">Job Search</Link>
            </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.toggleModal}>Login</button>
    </form>
    
  </div>
  <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <Login />
        </Modal>
        
      </nav>

      
      )
        
    }
}
export default Header;