const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const controller = require("./controller");
const port = 3001;

const app = express();
app.use(json());
app.use(express.static(`${__dirname}/build`));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.create);
app.put("/api/houses/:id", controller.update);
app.delete("/api/houses/:id", controller.delete);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
