<!-- table title -->
<!--option-->
<!--search-->
<!-- table [select , code, budget year, plan ,course,organizer,plateform,plan ,limit,date ,cost, plan status]-->
<!--number of selected rows-->
<!--page navigate-->
<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { Key } from "ant-design-vue/lib/_util/type";
import axios from "axios";
import pageheader from "../components/PageHeader.vue";
import Addplan from "./components/Addplan.vue";
import Addcourse from "./components/Addcourse.vue";
const planColumns = [
  {
    title: "รหัสแผน",
    dataIndex: "plan_id",
  },
  {
    title: "ชื่อแผน",
    dataIndex: "plan_name",
  },
  {
    title: "ปีงบประมาน",
    dataIndex: "budget_year",
  },
];
const courseColumns = [
  { title: "รหัสหลักสูตร", dataIndex: "course_id" },
  { title: "รหัสแผน", dataIndex: "plan_id" },
  { title: "ชื่อหลักสูตร", dataIndex: "course_name" },
  { title: "ผู้จัดการอบรม", dataIndex: "organizer" },
  { title: "ประเภทแผน", dataIndex: "course_type" },
  { title: "จำนวนผู้อบรม", dataIndex: "qouta" },
  { title: "งบประมาณ", dataIndex: "budget" },
  { title: "สถานะหลักสูตรอบรม", dataIndex: "course_status" },
  { title: "วันที่จัดอบรม", dataIndex: "course_date" },
  { title: "หมายเหตุเพิ่มเติม", dataIndex: "course_note" },
];
interface PlanDataType {
  plan_id: Key;
  plan_name: String;
  budget_year: Number;
}
interface CourseDataType {
  course_id: Key;
  plan_id: String;
  course_name: String;
  organizer: String;
  course_type: String;
  qouta: Number;
  budget: Number;
  course_status: String;
  course_date: Date;
  course_note: Text;
}
const planData = ref<PlanDataType[]>([]);
const courseData = ref<CourseDataType[]>([]);
onBeforeMount(() => {
  getAllPlan();
  getAllCourse();
});
async function getAllPlan() {//เรียกแผนทั้งหมด
  await axios
    .get("http://localhost:5000/plans")
    .then((response) => (planData.value = response.data))
    .catch((err) => console.log(err));
}
async function getAllCourse() {//เรียกคอสทั้งหมด
  await axios
    .get("http://localhost:5000/courses")
    .then((response) => (courseData.value = response.data))
    .catch((err) => console.log(err));
}
</script>

<template>
  <pageheader title="แผนและหลักสูตร" sub-title="จัดการผู้ใช้งาน" />
  <div class="">
    <a-space>
      <Addplan />
      <Addcourse />
    </a-space>
    <div>
      <a-typography-title :level="5">รายการแผนทั้งหมด</a-typography-title>
      <a-table
        :columns="planColumns"
        :data-source="planData"
        :scroll="{ x: 1500, y: 260 }"
      >
        <template #footer>จำนวนรายการที่เลือก</template></a-table
      >
    </div>
    <div>
      <a-typography-title :level="5">รายการหลักสูตรทั้งหมด</a-typography-title>
      <a-table
        :columns="courseColumns"
        :data-source="courseData"
        :scroll="{ x: 1500, y: 560 }"
      >
        <template #footer>จำนวนรายการที่เลือก</template></a-table
      >
    </div>
  </div>
</template>
