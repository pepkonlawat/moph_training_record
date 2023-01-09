/*
  simple query CRUD for plan
  getall 
  get single
  insert
  update (all)
  delete
*/

//import connection
import db from "../config/database.js";

//get all plans
export const getPlans = (result) => {
  db.query("SELECT * FROM plan", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single plan
export const getPlanById = (id, result) => {
  db.query("SELECT * FROM plan WHERE User_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//get budgetYear plan
export const getPlanByBudgetYear = (budget_year, result) => {
  db.query(
    "SELECT * FROM plan WHERE budget_year = ?",
    [budget_year],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
//insert plan to databased
export const insertPlan = (data, result) => {
  db.query("INSERT INTO plan SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//update plan to Database
export const updatePlanById = (data, id, result) => {
  db.query(
    "UPDATE plan SET plan_name = ?, budget_year = ? WHERE User_id  = ?",
    [data.plan_name, data.budget_year, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// //delete plan to Database
export const deletePlanById = (id, result) => {
  db.query("DELETE FROM plan WHERE plan_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
