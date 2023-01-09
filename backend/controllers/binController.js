//import functions from Bin model
import {
  getBins,
  getBinById,
  insertBin,
  updateBinById,
  deleteBinById,
} from "../models/binModel.js";

//get all bin
export const showBins = (req, res) => {
  getBins((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get single bin
export const showBinById = (req, res) => {
  getBinById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//create new bin
export const createBin = (req, res) => {
  const data = req.body;
  insertBin(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//update bin
export const updateBin = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateBinById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//delete bin
export const deleteBin = (req, res) => {
  const id = req.params.id;
  deleteBinById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
