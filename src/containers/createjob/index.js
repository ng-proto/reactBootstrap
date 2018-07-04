import React, { Component } from "react";
import CKEditor from "react-ckeditor-component";
import "./index.css";

class CreateJob extends Component {
  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
    this.state = {
      content: "Job description"
    };
  }

  updateContent(newContent) {
    this.setState({
      content: newContent
    });
  }

  onChange(evt) {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    this.setState({
      content: newContent
    });
  }

  onBlur(evt) {
    console.log("onBlur event called with event info: ", evt);
  }

  afterPaste(evt) {
    console.log("afterPaste event called with event info: ", evt);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="cell">
            <h3>Create Job</h3>
          </div>
        </div>
        <div className="row mt-2">
          <div className="cell">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Job title"
              />
            </div>
            <div className="ckeditor input-group mb-3">
              <CKEditor
                activeclassName="p10"
                content={this.state.content}
                events={{
                  blur: this.onBlur,
                  afterPaste: this.afterPaste,
                  change: this.onChange
                }}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Minimum salary"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Maximum salary"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Experience in years"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Key skills"
              />
            </div>
            <div className="input-group mb-3">
              <button type="button" className="button success">
                Create Job
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateJob;
