import React, { Component } from "react";
import "./index.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h3>Overview</h3>
            <div className="card">
              <div className="bodyMsg card-body">
                In this dashboard you can see the number of jobs created and the
                number of applications.
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-6">
            <div className="card alert alert-danger">
              <div className="card-body">
                <h5 className="card-title">
                  <span className="badge badge-danger">5 </span> JOB POSTED
                </h5>
                <p className="card-text">
                  See what are the job posted currently.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card alert alert-success">
              <div className="card-body">
                <h5 className="card-title">
                  <span className="badge badge-success">17 </span>APPLICATIONS
                  FOR JOB
                </h5>
                <p className="card-text">
                  View the applications applied for jobs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
