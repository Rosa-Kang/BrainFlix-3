const express = require("express");
const app = express();
const videoRouter = require("./route/videos");

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
