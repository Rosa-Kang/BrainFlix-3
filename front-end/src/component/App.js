import React, { Component } from "react";
import axios from "axios";
import "../styles/main.css";
import Header from "./Header";
import Hero from "./Hero";
import Clip from "./Clip";
import NewComment from "./NewComment";
import CommentList from "../container/CommentList";
import VideoList from "../container/VideoList";

const videoUrl = "http://localhost:5000/video/videos";

class App extends Component {
  state = {
    videos: [],
    mainVideo: {
      id: "",
      title: "",
      description: "",
      channel: "",
      image: "",
      views: "",
      likes: "",
      duration: "",
      video: "",
      timestamp: 0,
      comments: []
    }
  };

  componentDidMount() {
    axios.get(videoUrl).then(video => {
      const newVideos = video.data.map(videolist => {
        return {
          id: videolist.id,
          title: videolist.title,
          channel: videolist.channel,
          image: videolist.image
        };
      });

      const mainVideoUrl = `http://localhost:5000/video/videos/${
        video.data[0].id
      }`;

      axios.get(mainVideoUrl).then(response => {
        this.setState({
          mainVideo: response.data,
          videos: newVideos
        });
      });
    });
  }

  componentDidUpdate(prevState) {
    if (
      typeof this.props.match.params.id === "undefined" &&
      prevState.location.pathname !== "/"
    ) {
      window.location.reload();
    }
    const videoId = this.props.match.params.id;
    const currentVideo = `http://localhost:5000/video/videos/${videoId}`;

    axios.get(currentVideo).then(response => {
      if (this.props.match.params.id !== this.state.mainVideo.id) {
        this.setState({
          mainVideo: response.data
        });
      }
    });
    console.log(this.state.mainVideo);
  }

  render() {
    console.log(this.state.mainVideo);
    return (
      <div className="App">
        <Header history={this.props.history} />
        <Hero videos={this.state.mainVideo} />
        <div className="box">
          <div className="boxClip">
            <Clip videos={this.state.mainVideo} />
            <NewComment videos={this.state.mainVideo} />
            <CommentList videos={this.state.mainVideo} />
          </div>
          <VideoList
            videos={this.state.videos}
            mainVideo={this.state.mainVideo}
          />
        </div>
      </div>
    );
  }
}

export default App;
