/*
  simple query CRUD for users
  getall 
  get single
  insert
  update (all)
  delete
*/

//import connection
import db from "../config/database.js";

//get all users
export const getUsers = (result) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single user
export const getUserById = (id, result) => {
  db.query("SELECT * FROM users WHERE user_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//get department user

//insert user to databased
export const insertUser = (data, result) => {
  db.query("INSERT INTO users SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//update user to Database
export const updateUserById = (data, id, result) => {
  db.query(
    "UPDATE users SET prefix = ?, first_name = ?, last_name = ?, department = ?, position = ?, level = ?, role = ?, email = ?, password = ? WHERE user_id  = ?",
    [
      data.prefix,
      data.first_name,
      data.last_name,
      data.department,
      data.position,
      data.level,
      data.role,
      data.email,
      data.password,
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

//delete user to Database
export const deleteUserById = (id, result) => {
  db.query("DELETE FROM users WHERE user_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
