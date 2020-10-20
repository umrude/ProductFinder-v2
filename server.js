const express = require("express");
const path = require("path");
const app = express();
const request = require("request");

app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/ABDR", (req, res, next) => {
  request.get("https://jsonkeeper.com/b/ABDR", (err, response, body) => {
    if (err) {
      return next(err);
    }
    const data = JSON.parse(body);
    res.send(data);
  });
});

app.listen(8080);
