/*
  simple query CRUD for bin
  getall 
  get single
  insert
  update (all)
  delete
*/

//import connection
import db from "../config/database.js";

//get all bin
export const getBins = (result) => {
  db.query("SELECT * FROM bin", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single bin
export const getBinById = (id, result) => {
  db.query("SELECT * FROM bin WHERE bin_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//insert bin to databased
export const insertBin = (data, result) => {
  db.query("INSERT INTO bin SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

/*
    เอามาจาก list ที่มีการต่อกันกับ course, user, result
*/
//update bin to Database
export const updateBinById = (data, id, result) => {
  db.query(
    "UPDATE bin SET list_prefix = ?, list_first_name = ?, list_last_name = ?, list_department = ?, list_position = ?, list_level = ?, list_role = ?, list_note = ?, list_confirm_status = ?, list_plan_type = ?, list_training_status = ?, list_assessment = ?, WHERE bin_id  = ?",
    [
      //   data.course_id,
      //   data.user_id,
      //   data.result_id,
      data.list_prefix,
      data.list_first_name,
      data.list_last_name,
      data.list_department,
      data.list_position,
      data.list_level,
      data.list_role,
      data.list_note,
      data.list_confirm_status,
      data.list_plan_type,
      data.list_training_status,
      data.list_assessment,
      id,
    ],
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

/*
    delete from list table than insert into bin table
*/
//delete bin to Database
export const deleteBinById = (id, result) => {
  db.query("DELETE FROM bin WHERE bin_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
