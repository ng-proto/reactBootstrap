import React, { Component } from "react";
import PropTypes from "prop-types";
import "./card.css";

class CardView extends Component {
  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
              <h5>{this.props.jobTitle} - {this.props.jobCode}</h5>
              </div>
              <div className="card-content p-2">
                {this.props.desc} - {this.props.keySkills}
              </div>
              <div className="card-footer">
              <button class="button secondary">Apply</button>
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
