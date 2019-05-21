const express = require("express");
const app = express();
const videoRouter = require("./route/videos");
const cors = require("cors");

app.use(cors());
app.use("/static", express.static("media"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(new Date() + " " + req.path);
  next();
});

app.use("/video", videoRouter);

app.listen(5000, () => {
  console.log("Listening...");
});
