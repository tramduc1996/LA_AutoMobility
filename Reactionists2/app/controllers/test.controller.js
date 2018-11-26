const responses = require("../models/responses/index");

const getById = (req, res) => {
  res.json(new responses.ItemResponse({ id: 3, firstName: "John", lastName: "Galt" }));
};

module.exports = {
  getById
};
