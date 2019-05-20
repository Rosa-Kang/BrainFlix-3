const videos = require("../model/data");

const VideoController = {
  getVideo: id => {
    const eachVideo = videos.find(
      eachVideo => eachVideo.id.toLowerCase() === id.toLowerCase()
    );
    return eachVideo;
  }

  /*
    addVideo: (newVideo) => {
      const video = VideoController.getVideo(id)
      video.body.push(todo)
      return video.todos
    }
    */
};

module.exports = VideoController;
