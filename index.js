const express = require("express");
const connection = require("./services/database");
const app = express();
const port = 3001;
const cors = require("cors");
const infoRouter = require("./routers/info");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.get("/", (req, res) => {
  return res.send("hello");
});
app.use("/info", infoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    throw "Database is not connected";
  } else {
    console.log("Database is connected");
  }
});
