import React, { Component } from "react";
import { connect } from "react-redux";
const mapStateToProps = state => ({
  addJobSearch: check(state)
});
function check(data) {
  console.log(data);
  return data;
}
class JobDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <h1>Job Description {this.props.selectedJob}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(JobDetail);
