//import functions from Result model
import {
  getResults,
  getResultById,
  insertResult,
  updateResultById,
  deleteResultById,
} from "../models/resultModel.js";

//get all Results
export const showResults = (req, res) => {
  getResults((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get single Results
export const showResultById = (req, res) => {
  getResultById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//create new Result
export const createResult = (req, res) => {
  const data = req.body;
  insertResult(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//update Result
export const updateResult = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateResultById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//delete Result
export const deleteResult = (req, res) => {
  const id = req.params.id;
  deleteResultById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
