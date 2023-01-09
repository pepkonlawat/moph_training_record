import { createRouter, createWebHistory } from "vue-router";
import CreateListPage from "../page/CreateListPage.vue";
import HomePage from "../page/HomePage.vue";
import PlanandCoursePage from "../page/PlanandCoursePage.vue";
import TrainningListPage from "../page/TrainningListPage.vue";
import RecyclebinPage from "../page/RecyclebinPage.vue";
import UserPage from "../page/UserPage.vue";
import login from "../page/LoginPage.vue";
import AddUserPage from "../page/AddNewUser.vue";
import ReportUserbyYear from "../page/ReportUserbyYear.vue";

let routes = [
  {path: "/login", component:login},
  { path: "/", redirect: "/HomePage" },
  {
    path: "/CreateListPage",
    name: "CreateListPage",
    component: CreateListPage,
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/PlanandCoursePage",
    name: "PlanandCoursePage",
    component: PlanandCoursePage,
  },
  {
    path: "/TrainningListPage",
    name: "TrainningListPage",
    component: TrainningListPage,
  },
  {
    path: "/RecyclebinPage",
    name: "RecyclebinPage",
    component: RecyclebinPage,
  },
  {
    path: "/UserPage",
    name: "UserPage",
    component: UserPage,
  },
   {
    path: "/AddUserPage",
    name: "AddUserPage",
    component: AddUserPage,
  },
  //ReportUserbyYear
  {
    path: "/ReportUserbyYear",
    name: "ReportUserbyYear",
    component: ReportUserbyYear,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
