const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
// const controller = require("./controller");
const port = 3001;

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
