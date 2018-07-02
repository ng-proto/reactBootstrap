import React, { Component } from 'react';
import './search.css';

class Search extends Component {

  onMessage(m) {
    alert(m);
   }


    render() {
      return (
        <div class="container">
        <div class="row">
                 
           <div class="col-sm">
           <input type="text" class="form-control" placeholder="Job code"/>
           </div>
           <div class="col-sm">
           <input type="text" class="form-control" placeholder="Job Title"/>
           </div>
           <div class="col-sm">
           <input type="text" class="form-control" placeholder="Skill/Technology"/>
           </div>
           <div class="col-sm">
           <button type="button" class="btn btn-secondary" onClick={this.onMessage}>Search</button>
           </div>
         
        </div>
        </div>
        
      );
    }
  }
  
  export default Search;