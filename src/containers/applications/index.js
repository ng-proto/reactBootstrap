import React, { Component } from "react";
import ProgressSteps from "react-progress-steps";
import "./index.css";

class Applications extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h4>View all job applications</h4>
          </div>
        </div>
        <div className="row mt-2">
          <div className="fullWidth card ">
            <div className="card-header">
              Job code - Job Title{" "}
              <span className="status">
                {" "}
                Current status: Resume shortlisted.
              </span>
            </div>
            <div className="card-body">
              <h5 className="card-title">Key Skills</h5>
              <p className="card-text">
                Description Description Description v Description Description
                Description
              </p>
            </div>
            <div className="card-footer text-muted">
              <ProgressSteps steps={7} current={3} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Applications;
