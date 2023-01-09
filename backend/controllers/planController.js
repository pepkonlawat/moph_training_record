//import functions from Plan model
import {
  getPlans,
  getPlanById,
  getPlanByBudgetYear,
  insertPlan,
  updatePlanById,
  deletePlanById,
} from "../models/planModel.js";

//get all plans
export const showPlans = (req, res) => {
  getPlans((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get single plan
export const showPlanById = (req, res) => {
  getPlanById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get budget_year plan
export const showPlanByBudgetYear = (req, res) => {
  getPlanByBudgetYear(req.params.budget_year, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
//create new plan
export const createPlan = (req, res) => {
  const data = req.body;
  insertPlan(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//update plan
export const updatePlan = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updatePlanById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//delete plan
export const deletePlan = (req, res) => {
  const id = req.params.id;
  deletePlanById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
