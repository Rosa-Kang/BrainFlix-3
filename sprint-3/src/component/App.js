import React, { Component } from "react";
import axios from "axios";
import "../styles/main.css";
import Header from "./Header";
import Hero from "./Hero";
import Clip from "./Clip";
import NewComment from "./NewComment";
import CommentList from "../container/CommentList";
import VideoList from "../container/VideoList";

const videoUrl =
  "https://project-2-api.herokuapp.com/videos?api_key=46a5c4b9-e4ed-4f7e-bbf7-be32f1a02279";

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

      const mainVideoUrl = `https://project-2-api.herokuapp.com/videos/${
        video.data[0].id
      }?api_key=46a5c4b9-e4ed-4f7e-bbf7-be32f1a02279`;

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
    const currentVideo = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=46a5c4b9-e4ed-4f7e-bbf7-be32f1a02279`;

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
