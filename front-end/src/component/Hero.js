import React, { Component } from "react";
import Fullscreen from "../assets/icons/SVG/Icon-fullscreen.svg";
import Play from "../assets/icons/SVG/Icon-play.svg";
import Volume from "../assets/icons/SVG/Icon-volume.svg";

class Hero extends Component {
  render() {
    return (
      <section id="background">
        <div className="hero">
          <video className="hero__play" poster={this.props.videos.image} />

          <div className="hero__scroll">
            <img id="play" src={Play} alt="play-button" />
            <div className="hero__scroll--hr">
              <hr /> <p>0:00 / {this.props.videos.duration}</p>
            </div>
            <div className="hero__scroll--stuffs">
              <img id="fullscreen" src={Fullscreen} alt="curser" />
              <img id="volume" src={Volume} alt="volume" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
