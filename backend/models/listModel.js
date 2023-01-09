/*
  simple query CRUD for list
  getall 
  get single
  insert
  update (all)
  delete
*/

//import connection
import db from "../config/database.js";

//get all list
export const getLists = (result) => {
  db.query("SELECT * FROM list", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single list
export const getListById = (id, result) => {
  db.query("SELECT * FROM list WHERE list_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//insert list to databased
export const insertList = (data, result) => {
  db.query("INSERT INTO list SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

/* 
    foreign keys ??? 
    course_id user_id result_id
*/
//update list to Database
export const updateListById = (data, id, result) => {
  db.query(
    "UPDATE list SET list_prefix = ?, list_first_name = ?, list_last_name = ?, list_department = ?, list_position = ?, list_level = ?, list_role = ?, list_note = ?, list_confirm_status = ?, list_plan_type = ?, list_training_status = ?, list_assessment = ?, WHERE list_id  = ?",
    [
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
//delete list to Database
export const deleteListById = (id, result) => {
  db.query("DELETE FROM list WHERE list_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
