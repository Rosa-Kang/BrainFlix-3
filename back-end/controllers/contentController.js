const videoController = require("./videoController");

const contentController = {
  getContents: id => {
    const video = videoController.getVideo(id);
    //let contents = video.comments
    const contents = {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
      description: video.description,
      views: video.views,
      likes: video.likes,
      duration: video.duration,
      video: video.video,
      timestamp: video.timestamp,
      comments: video.comments
    };

    return contents;
  }
  /*
    addTodo: (username, todo) => {
      const user = videoController.getUser(username)
      user.todos.push(todo)
      return user.todos
    }
    */
};

module.exports = contentController;
