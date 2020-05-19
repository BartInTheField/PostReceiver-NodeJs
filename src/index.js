const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

app.use(bodyParser.json({ limit: "100mb" }));

app.post("*", (req, res) => {
  console.log("Received a post request");
  res.status(200).send("Received");
});

app.listen(PORT, () =>
  console.log(`PostReceiver is listening at http://localhost:${PORT}`)
);
