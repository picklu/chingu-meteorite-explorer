const meteorites = require('../models/meteorites');

const controller = {};

controller.getmeteorites = (req, res, next) => {
  meteorites
    .find({})
    .then(data => res.json(data))
    .catch(next);
};

controller.addmeteorites = (req, res, next) => {
  if (req.body.meteorite) {
    meteorites
      .create(req.body)
      .then(data => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The field was empty'
    });
  }
};

controller.getStat = (req, res, next) => {
  meteorites
    .find({})
    .then(data => {
      let newData = {
        total: data.length,
        found: data.reduce((acc, curr) => {
          return curr.count > 0 ? acc + 1 : acc;
        }, 0)
      };
      res.json(newData);
    })
    .catch(next);
};

module.exports = controller;
