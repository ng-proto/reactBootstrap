import React, { Component } from "react";
import { Receiver } from "react-file-uploader";

class UploadDocs extends Component {
  onDragEnterHandler() {
    console.log("on drag enter");
  }

  onDragOverHandler() {
    console.log("on drag over");
  }

  onDragLeaveHandler() {
    console.log("on drag leave");
  }

  onFileDropHandler() {
    console.log("on file drop");
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div id="upload" className="col-sm">
            <Receiver
              wrapperId="upload"
              isOpen={true}
              onDragEnter={this.onDragEnterHandler}
              onDragOver={this.onDragOverHandler}
              onDragLeave={this.onDragLeaveHandler}
              onFileDrop={this.onFileDropHandler}
            >
              <div>visual layer of the receiver (drag & drop panel)</div>
            </Receiver>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadDocs;
