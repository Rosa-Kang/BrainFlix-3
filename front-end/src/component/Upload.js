import React, { Component } from "react";
import Header from "./Header";

export default class Upload extends Component {
  render() {
    return (
      <div className="upload">
        <Header />
        <p className="upload__title">Upload Video</p>
        <div className="upload__video">
          <div id="left">
            <p className="upload__video--text">VIDEO THUMBNAIL</p>
            <video poster="../assets/images/upload-video-preview.jpg" />
          </div>
          <div id="right">
            <lable className="upload__video--text">TITLE YOUR VIDEO</lable>
            <input placeholder="  Add a title to your video" />
            <lable className="upload__video--text">
              ADD A VIDEO DESCRIPTION
            </lable>
            <textarea
              placeholder="  Add a description to your video"
              className="upload__video--text--area"
            />
          </div>
        </div>
        <div className="upload__button">
          <button className="upload__button--publish">PUBLISH</button>
          <button className="upload__button--cancel">CANCEL</button>
        </div>
      </div>
    );
  }
}
