//import functions from List model
import {
  getLists,
  getListById,
  insertList,
  updateListById,
  deleteListById,
} from "../models/listModel.js";

//get all list
export const showLists = (req, res) => {
  getLists((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get single list
export const showListById = (req, res) => {
  getListById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//create new list
export const createList = (req, res) => {
  const data = req.body;
  insertList(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//update list
export const updateList = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateListById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//delete list
export const deleteList = (req, res) => {
  const id = req.params.id;
  deleteListById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
