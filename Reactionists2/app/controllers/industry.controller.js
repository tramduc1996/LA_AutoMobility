const industryService = require("../services/industry.service");
const responses = require("../models/responses/index");

const getAll = (req, res) => {
  const pageIndex = req.params.pageIndex || req.query.pageIndex || null;
  const pageSize = req.params.pageSize || req.query.pageSize || null;
  industryService
    .getAll(pageIndex, pageSize)
    .then(item => {
      const r = new responses.ItemResponse(item);
      res.json(r);
    })
    .catch(err => {
      res.set(500).send(err);
    });
};
const getById = (req, res) => {
  industryService
    .getById(req.params.id)
    .then(item => {
      res.json(new responses.ItemResponse(item));
    })
    .catch(err => {
      res.set(500).send(err);
    });
};

const post = (req, res) => {
  console.log(req);
  console.log(req.body);
  industryService
    .post(req.model)
    .then(outputParms => {
      res.status(201).json(outputParms);
      console.log(outputParms);
    })
    .catch(err => {
      res.set(500).send(err);
    });
};

const put = (req, res) => {
  industryService
    .put(req.body)
    .then(outputParms => {
      res.status(201).json(outputParms);
    })
    .catch(err => {
      res.set(500).send(err);
    });
};

const del = (req, res) => {
  industryService
    .del(req.params.id)
    .then(response => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.set(500).send(err);
    });
};
const search = (req, res) => {
  const searchString = req.params.search || req.query.search || "";
  const pageIndex = req.params.pageIndex || req.query.pageIndex || null;
  const pageSize = req.params.pageSize || req.query.pageSize || null;
  industryService
    .search(pageIndex, pageSize, searchString)
    .then(item => {
      const r = new responses.ItemResponse(item);
      res.json(r);
    })
    .catch(err => {
      res.set(500).send(err);
    });
};

module.exports = {
  getAll,
  getById,
  search,
  post,
  put,
  del
};
