/*
  รอเล่นท่า :/id
*/

//import express
import express from "express";

//init express router
const router = express.Router();
/*----------------------------------------------------------------------*/
/*
  Bin routes 
  Bin read all, delete by selected
*/
import {
  showBins,
  showBinById,
  createBin,
  updateBin,
  deleteBin,
} from "../controllers/binController.js";
//get all Bins
router.get("/bins", showBins);
//get single Bin
router.get("/bins/:id", showBinById);
// Create New Bin
router.post("/bins", createBin);
// Update Bin
router.put("/bins/:id", updateBin);
// Delete Bin
router.delete("/bins/:id", deleteBin);
/*----------------------------------------------------------------------*/
/*
  Course(หลักสูตร) routes
  Course CRUD & ById
  ไปแสดงใน List
*/
import {
  showCourses,
  showCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";
//get all Courses
router.get("/courses", showCourses);
//get single Course
router.get("/courses/:id", showCourseById);
// Create New Course
router.post("/courses", createCourse);
// Update Course
router.put("/courses/:id", updateCourse);
// Delete Course
router.delete("/courses/:id", deleteCourse);
/*----------------------------------------------------------------------*/
/*
  List(รายการที่มีทุกอย่าง) routes
  CRUD & ท่ายาก
*/
import {
  showLists,
  showListById,
  createList,
  updateList,
  deleteList,
} from "../controllers/listController.js";
//get all Lists
router.get("/lists", showLists);
//get single List
router.get("/lists/:id", showListById);
// Create New List
router.post("/lists", createList);
// Update List
router.put("/lists/:id", updateList);
// Delete List
router.delete("/lists/:id", deleteList);
/*----------------------------------------------------------------------*/
/*
  Plan(แผนใหญกว่า หลักสูตร) routes
  Plan CRUD & ById
  ไปแสดงใน List
*/
import {
  showPlans,
  showPlanById,
  showPlanByBudgetYear,
  createPlan,
  updatePlan,
  deletePlan,
} from "../controllers/planController.js";
//get all plans
router.get("/plans", showPlans);
//get single plan
router.get("/plans/:id", showPlanById);
//get single product
router.get("/plans/year/:budget_year", showPlanByBudgetYear);
// Create New Product
router.post("/plans", createPlan);
// Update Plan
router.put("/plans/:id", updatePlan);
// Delete Plan
router.delete("/plans/:id", deletePlan);
/*----------------------------------------------------------------------*/
/*
  Result(ผลการไป) routes
*/
import {
  showResults,
  showResultById,
  createResult,
  updateResult,
  deleteResult,
} from "../controllers/resultController.js";
//get all Results
router.get("/results", showResults);
//get single Result
router.get("/results/:id", showResultById);
// Create New Result
router.post("/results", createResult);
// Update Result
router.put("/results/:id", updateResult);
// Delete Result
router.delete("/results/:id", deleteResult);
/*----------------------------------------------------------------------*/
/*
  User routes
*/
//import userfunctions from controller
import {
  showUsers,
  showUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";
//get all users
router.get("/users", showUsers);
//get single product
router.get("/users/:id", showUserById);
// Create New Product
router.post("/users", createUser);
// Update Product
router.put("/users/:id", updateUser);
// Delete Product
router.delete("/users/:id", deleteUser);
/*----------------------------------------------------------------------*/
export default router
