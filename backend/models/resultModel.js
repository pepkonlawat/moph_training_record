/*
  simple query CRUD for result
  getall 
  get single
  insert
  update (all)
  delete
*/

//import connection
import db from "../config/database.js";

//get all results
export const getResults = (result) => {
  db.query("SELECT * FROM result", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single result
export const getResultById = (id, result) => {
  db.query("SELECT * FROM result WHERE user_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//insert result to databased
export const insertResult = (data, result) => {
  db.query("INSERT INTO result SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//update result to Database
export const updateResultById = (data, id, result) => {
  db.query(
    "UPDATE result SET course_description = ?, certificate = ?, exam_result = ?  WHERE result_id  = ?",
    [data.course_description, data.certificate, data.exam_result, id],
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

// //delete result to Database
export const deleteResultById = (id, result) => {
  db.query("DELETE FROM result WHERE user_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
