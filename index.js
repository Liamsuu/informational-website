let express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html", 200);
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html", 200);
});

app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html", 200);
});

// in case of 404 error
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/404.html", 404);
});

const PORT = 8080;

app.listen(PORT, () => `Listening on port ${PORT}`);
