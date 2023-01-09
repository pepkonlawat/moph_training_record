//import functions from Course model
import {
  getCourses,
 getCoursesByPlan,
  getCourseById,
  insertCourse,
  updateCourseById,
  deleteCourseById,
} from "../models/courseModel.js";

//get all course
export const showCourses = (req, res) => {
  getCourses((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get single course
export const showCourseById = (req, res) => {
  getCourseById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get  course by plan
export const showCoursesByPlan = (req, res) => {
  getCoursesByPlan(req.params.plan_id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//create new course
export const createCourse = (req, res) => {
  const data = req.body;
  insertCourse(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//update course
export const updateCourse = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateCourseById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//delete course
export const deleteCourse = (req, res) => {
  const id = req.params.id;
  deleteCourseById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
