import React, { Component } from 'react';
class Myinfo extends Component {
    render(){
      return (
        <div className="container">
        <div className="row">
            <div className="col-sm">
            <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            </div>
            <div className="col-sm">
                <div className="form-group">
                    <label>Middle Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Middle Name" />
                </div>
            </div>
            <div className="col-sm">
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Last Name" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            </div>
            <div className="col-sm">
                <div className="form-group">
                    <label>Phone No</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Middle Name" />
                </div>
            </div>
            <div className="col-sm">
                <div className="form-group">
                    <label>Alternate No</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Last Name" />
                </div>
            </div>
        </div>
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
                <label>State </label>
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
                    <label>City</label>
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
export default Myinfo;