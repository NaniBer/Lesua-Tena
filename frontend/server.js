const express = require("express"),
  dbOperations = require("./dbfiles/dbOperation"),
  cors = require("cors");

const API_PORT = process.env.PORT || 7000;
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/planning", function (req, res) {
  console.log("Called");
  res.send({ result: "Go aways" });
});

dbOperations.Above21Nochilderen().then((res) => {
  console.log(res.recordset);
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
