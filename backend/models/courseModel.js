/*
  simple query CRUD for course
  getall 
  get single
  insert
  update (all)
  delete
*/

//import connection
import db from "../config/database.js";

//get all course
export const getCourses = (result) => {
  db.query("SELECT * FROM course", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single course
export const getCourseById = (id, result) => {
  db.query("SELECT * FROM course WHERE course_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};
//get  course by plan_id
export const getCoursesByPlan = (plan_id, result) => {
  db.query("SELECT * FROM course WHERE plan_id = ?", [plan_id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//insert course to databased
export const insertCourse = (data, result) => {
  db.query("INSERT INTO course SET ?", [data], (err, results) => {
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
    plan_id
*/
//update course to Database
export const updateCourseById = (data, id, result) => {
  db.query(
    "UPDATE course SET course_name = ?, organizar = ?, quota = ?, budget = ?, course_status = ?, course_data = ?, course_note = ? WHERE course_id  = ?",
    [
      data.course_name,
      data.organizar,
      data.course_type,
      data.quota,
      data.budget,
      data.course_status,
      data.course_date,
      data.course_note,
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

//delete course to Database
export const deleteCourseById = (id, result) => {
  db.query("DELETE FROM course WHERE course_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
