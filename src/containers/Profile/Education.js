import React, { Component } from 'react';
class Education extends Component {
    render(){
      return (
        <div className="container">
        <div className="row">
            <div className="col-sm">
            <div className="form-group">
            <label>Country</label>
            <select className="form-control" >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            </div>
            </div>
            <div className="col-sm">
                <div className="form-group">
                <label>Education level</label>
                    <select className="form-control" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
            </div>
            <div className="col-sm">
            <div className="form-group">
                <label>Degree status</label>
                    <select className="form-control" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
            </div>
        </div>
        
        
    </div>
      )
    
    }
}
export default Education;