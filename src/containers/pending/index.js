import React, { Component } from "react";
import "./index.css";

class PendingApprovals extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h4> My pending job approvals </h4>
          </div>
        </div>
        <div className="row mt-2">
          <div className="fullWidth card ">
            <div className="card-header">Job code - Job Title</div>
            <div className="card-body">
              <h5 className="card-title">Key Skills</h5>
              <p className="card-text">
                Description Description Description v Description Description
                Description
              </p>
              <a href="#" className="btn btn-success">
                Approve
              </a>{" "}
              <a href="#" className="btn btn-danger">
                Reject
              </a>
            </div>
            <div className="card-footer text-muted">posted 2 days ago</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PendingApprovals;
