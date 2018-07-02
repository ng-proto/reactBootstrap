import React, { Component } from 'react';
class Workexp extends Component {
    render(){
      return (
        <div className="container">
        <div className="row">
            <div className="col-sm">
            <div className="form-group">
                <label>Employer</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            </div>
            <div className="col-sm">
                <div className="form-group">
                    <label>Job title</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Middle Name" />
                </div>
            </div>
            <div className="col-sm">
                
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
            <div className="form-group">
                    <label>Start month</label>
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
                    <label>Start year</label>
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
                
            </div>
        </div>
        <div className="row">
        <div className="col-sm">
            <div className="form-group">
                    <label>End month</label>
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
                    <label>End year</label>
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
                
            </div>
            
        </div>
    </div>
      )
    
    }
}
export default Workexp;