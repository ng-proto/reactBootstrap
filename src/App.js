import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import JobSearch from './pages/jobsearch/jobsearch.js';
import Profile from './components/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

class App extends Component {
  render() {
    return (
      
      <div className='main'>
        
        <Header />
        <div class="container mt-2">
          <div class="row">
          <JobSearch />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
