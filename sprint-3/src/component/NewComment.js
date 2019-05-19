import React, { Component } from "react";
import Mohan from "../assets/images/Mohan-muruge.jpg";

export default class NewComment extends Component {
  state = {
    message: ""
  };

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleClick = () => {
    this.setState({
      message: ""
    });
  };
  render() {
    return (
      <div className="newComment">
        <h4 className="newComment__num">
          {this.props.videos.comments.length} Comments
        </h4>
        <div className="newComment__new">
          <img id="Mohan" src={Mohan} alt="mohan" />
          <div className="newComment__new--comment">
            <div id="setAside">
              <label>JOIN THE CONVERSATION</label>
              <textarea
                placeholder=" Add a new comment"
                id="inputComment"
                type="text"
                name="text"
                rows="7"
                cols="50"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </div>
            <button id="myButton" type="submit" onClick={this.handleClick}>
              COMMENT
            </button>
          </div>
        </div>
      </div>
    );
  }
}
