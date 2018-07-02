import React, { Component } from 'react';
import './search.css';

class Search extends Component {

  onMessage(m) {
    alert(m);
   }


    render() {
      return (
        
        <div className="Search left-margin">
        <form>
          <div class="row">
           <div class="col-3">
           <input type="text" class="form-control" placeholder="Job code"/>
           </div>
           <div class="col-3">
           <input type="text" class="form-control" placeholder="Job Title"/>
           </div>
           <div class="col-3">
           <input type="text" class="form-control" placeholder="Skill/Technology"/>
           </div>
           <div class="col-1">
           <button type="button" class="btn btn-secondary" onClick={this.onMessage}>Search</button>
           </div>
          </div>
          </form>
        </div>
      );
    }
  }
  
  export default Search;