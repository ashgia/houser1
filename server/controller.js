module.exports = {
  create: (req, res, next) => {
    const db = req.app.get("db");
    const { propertyName, address, city, state, zip } = req.body;
    db.create_house([propertyName, address, city, state, zip])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send("error");
        console.log(err);
      });
  },
  getHouses: (req, res, next) => {
    const db = req.app.get("db");

    db.get_houses()
      .then(houses => res.send(houses))
      .catch(err => {
        res.status(500).send("error");
        console.log(err);
      });
  },
  update: (req, res, next) => {
    const db = req.app.get("db");
    const { params, query } = req;
    db.update_house([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send("Error");
        console.log(err);
      });
  },
  delete: (req, res, next) => {
    const db = req.app.get("db");
    const { params } = req;

    db.delete_house(params.id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send("Error");
        console.log(err);
      });
  }
};
