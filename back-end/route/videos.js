const express = require("express");
const router = express.Router();
const videosData = require("../model/data.js");
const contentController = require("../controllers/contentController");

router.route("/videos").get((req, res) => {
  res.json(videosData);
});

router
  .route("/videos/:id")
  .get((req, res) => {
    res.json(contentController.getContents(req.params.id));
  })

  .post((req, res) => {
    res.json(TodoController.addTodo(req.params.username, req.body));
  });

module.exports = router;
