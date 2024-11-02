const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/user", (req, res) => {
  const data = [{
    id: 1,
    name: "Nawazzz khannn",
  },
  {
    id: 1,
    name: "Sahil khannssasn ff",
  }];
  res.status(200).json(data);
});

const port = 8080;
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
