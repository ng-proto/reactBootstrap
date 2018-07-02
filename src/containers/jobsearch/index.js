import React, { Component } from 'react';
import Search from '../../components/search/index';
import CardView from '../../components/card/index';

class JobSearch extends Component {
    render() {
      return (
        
        <div className="container">
          <Search />
          <CardView />
        </div>
      );
    }
  }
  
  export default JobSearch;