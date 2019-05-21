import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import CancelButton from "../my-func/CancelButton";

export default class Upload extends Component {
  state = {
    comments: []
  };

  addVideo = event => {
    console.log("ok");
    event.preventDefault();
    axios
      .post("http://localhost:5000/video/videos/", {
        title: event.target.titleText.value,
        description: event.target.descriptionText.value
      })
      .then(response => {
        this.setState({
          comments: response.data
        });
      });
    console.log(this.state.comments);
  };
  render() {
    return (
      <form onSubmit={this.addVideo} className="upload">
        <Header />
        <p className="upload__title">Upload Video</p>
        <div className="upload__video">
          <div id="left">
            <p className="upload__video--text">VIDEO THUMBNAIL</p>
            <video
              id="poster"
              poster="../assets/images/upload-video-preview.jpg"
            />
          </div>
          <div id="right">
            <lable className="upload__video--text">TITLE YOUR VIDEO</lable>
            <input
              id="title"
              type="text"
              name="titleText"
              placeholder="  Add a title to your video"
            />
            <lable className="upload__video--text">
              ADD A VIDEO DESCRIPTION
            </lable>
            <textarea
              id="description"
              type="text"
              name="descriptionText"
              placeholder=" Add a description to your video"
              className="upload__video--text--area"
            />
          </div>
        </div>
        <div className="upload__button">
          <button className="upload__button--publish">PUBLISH</button>
          <button
            id="myButton"
            onClick={CancelButton}
            type="submit"
            className="upload__button--cancel"
          >
            CANCEL
          </button>
        </div>
      </form>
    );
  }
}
