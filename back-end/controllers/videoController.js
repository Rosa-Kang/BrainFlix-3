const videos = require("../model/data");

const VideoController = {
  getVideo: id => {
    const eachVideo = videos.find(
      eachVideo => eachVideo.id.toLowerCase() === id.toLowerCase()
    );
    return eachVideo;
  }
};

module.exports = VideoController;
