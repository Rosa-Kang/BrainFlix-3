const express = require("express");
const router = express.Router();
const videosData = require("../model/data.js");
const contentController = require("../controllers/contentController");
const uniqueId = require("../helper/helper");

router.route("/videos").get((req, res) => {
  res.json(videosData);
});

router.route("/videos/:id").get((req, res) => {
  res.json(contentController.getContents(req.params.id));
});

router.post("/videos", (req, res) => {
  let newVideo = {
    id: uniqueId,
    title: req.body.title,
    description: req.body.description,
    image: "http://localhost:5000/static/upload-video-preview.jpg"
  };
  videosData.push(newVideo);
  //res.json(videoController.addVideo(newVideo));
});

module.exports = router;
