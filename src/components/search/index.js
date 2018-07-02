import React, { Component } from 'react';
import './search.css';

class Search extends Component {

  onMessage(m) {
    alert(m);
   }


    render() {
      return (
        <div className="container">
        <div className="row">
                 
           <div className="col-sm">
           <input type="text" className="form-control" placeholder="Job code"/>
           </div>
           <div className="col-sm">
           <input type="text" className="form-control" placeholder="Job Title"/>
           </div>
           <div className="col-sm">
           <input type="text" className="form-control" placeholder="Skill/Technology"/>
           </div>
           <div className="col-sm">
           <button type="button" className="btn btn-secondary" onClick={this.onMessage}>Search</button>
           </div>
         
        </div>
        </div>
        
      );
    }
  }
  
  export default Search;