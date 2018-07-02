import React, { Component } from 'react';
import './card.css';

class CardView extends Component{

   /*  var items = [
        { code: '10332', title: 'Analyst', Skills: 'Java, Angular', Description: '4-6 years on experience in working on java desirably on spring boot and min 2 years of experience on Angular'  },
        { code: '10332', title: 'Analyst', Skills: 'Java, Angular', Description: '4-6 years on experience in working on java desirably on spring boot and min 2 years of experience on Angular'  },
        { code: '10332', title: 'Analyst', Skills: 'Java, Angular', Description: '4-6 years on experience in working on java desirably on spring boot and min 2 years of experience on Angular'  }         
    ]; */

    render(){
        return (
            <div className="CardView card-size card-margin">
                <div class="card align-left card-top">
  <h5 class="card-header">Job-Title</h5>
  <div class="card-body">
    <h5 class="card-title">Job code - skills</h5>
    <p class="card-text">Job Descriptions</p>
  </div>
</div>
            </div>
        );
    }
}

export default CardView;