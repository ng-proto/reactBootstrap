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
            <div className="container mt-2">
            <div className="row">
            <div className="col">
            <div className="card">
                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a  className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            
            </div>
            </div>
            
        );
    }
}

export default CardView;