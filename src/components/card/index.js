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
            <div class="container mt-2">
            <div class="row">
            <div class="col">
            <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            
            </div>
            </div>
            
        );
    }
}

export default CardView;