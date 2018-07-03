import React, { Component } from "react";
import PropTypes from "prop-types";
import "./card.css";

class CardView extends Component {
  render() {
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className="card mt-2" onClick={this.props.detail}>
              <h5 className="card-header">{this.props.jobTitle}</h5>
              <div className="card-body">
                <h5 className="card-title">{this.props.jobCode}</h5>
                <p className="card-text">{this.props.keySkills}</p>
                <a className="btn btn-primary">Apply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CardView.propTypes = {
  jobTitle: PropTypes.string,
  jobCode: PropTypes.string,
  keySkills: PropTypes.any,
  detail: PropTypes.func.isRequired
};

export default CardView;
