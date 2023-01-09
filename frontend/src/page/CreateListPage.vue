<script setup lang="ts">
//สร้างรายการการอบรม
import pageheader from "../components/PageHeader.vue";
import axios from "axios";
import { ref, onBeforeMount } from "vue";
onBeforeMount(() => {
  //ก่อนจะmount ให้เอาข้อมูลuser จาก data base มาก่อน
  getAllUsers();
});
interface dataType {
  user_id: number;
  prefix: string;
  first_name: string;
  last_name: string;
  department: string;
  position: string;
  role: string;
  level: string;
}
interface option {
  value: Number;
  label: String;
}

const Users = ref([]); //เก็บข้อมูลuser จาก database
const PlanData = ref([]); //เก็บข้อมูลแผน จาก database
const CoursesbyPlanID = ref([]); //เก็บข้อมูลหลักสูตรจากแผน จาก database
const List = ref({
  course_id: "",
  user_id: "",
  result_id: "",
  list_prefix: "",
  list_first_name: "",
  list_last_name: "",
  list_department: "",
  list_position: "",
  list_level: "",
  list_role: "",
  list_note: "",
  list_timestamp: "",
});

const columns = [
  {
    title: "ชื่อ",
    dataIndex: "name",
    width: "30%",
  },
  {
    title: "ตำแหน่ง",
    dataIndex: "position",
  },
  {
    title: "กลุ่ม/ฝ่าย",
    dataIndex: "department",
  },
  {
    title: "ลบ",
    dataIndex: "operation",
  },
];
const unselectedData = ref<dataType[]>([]); //array object ของบุคลคลากรที่ยังไม่ถูกเลือก
const selectedData = ref<dataType[]>([]); //array object ของบุคคลากรที่ถูกเลือก
const userOptions = ref<option[]>([]); //option ของการเลือกผู้อบรม
const planOptions = ref<option[]>([]); //option ของแผน
const courseOptions = ref<option[]>([]); //option ของหลักสูตร //ยังไม่เสร็จ
const selecteduserOption = ref(); //option ของการเลือกผู้อบรมที่ถูกเลือก
const selectedplanOption = ref(); //option ของแผน ที่ถูกเลือก
const budget_year = ref(); //ปีงบประมาณ
const visible_plan = ref("false"); //ควบคุมการมองเห้น html
async function getAllUsers() {
  //เรียกข้อมูลuserทั้งหมดจาก database
  await axios
    .get("http://localhost:5000/users")
    .then((response) => (Users.value = unselectedData.value = response.data))
    .then(() => userCollectOptions())
    .catch((err) => console.log(err));
}
async function getPlansbyBYear(year: Number) {
  await axios
    .get(`http://localhost:5000/plans/year/${year}`)
    .then((response) => (PlanData.value = response.data))
    .then(() => planCollectOptions())
    .catch((err) => console.log(err));
}
// async function getCoursesbyPlanID() {
//   await axios
//     .get("http://localhost:5000/users")
//     .then((response) => (CoursesbyPlanID.value = response.data))
//     .catch((err) => console.log(err));
// }
// async function addList() {
//   await axios
//     .post("http://localhost:5000/plans", {
//       course_id: List.value.course_id,
//       user_id: List.value.user_id,
//       result_id: List.value.result_id,
//       list_prefix: List.value.list_prefix,
//       list_first_name: List.value.list_first_name,
//       list_last_name: List.value.list_last_name,
//       list_department: List.value.list_department,
//       list_position: List.value.list_position,
//       list_level: List.value.list_level,
//       list_role: List.value.list_role,
//       list_note: List.value.list_note,
//       list_timestamp: List.value.list_timestamp,
//     })
//     .catch((err) => console.log(err));
// }
//  `${prefix}${first_name} ${last_name}`
const userCollectOptions = () => {
  //เก็บข้อมูล user ลง selection
  userOptions.value = unselectedData.value.map(
    ({ user_id, prefix, first_name, last_name }) => ({
      label: `${prefix}${first_name} ${last_name}`,
      value: user_id,
    })
  );
};
const planCollectOptions = () => {
  //เก็บข้อมูล แผน ลง selection
  planOptions.value = PlanData.value.map(({ plan_id, plan_name }) => ({
    label: plan_name,
    value: plan_id,
  }));
  console.log(planOptions.value);
};
const changeBySelection = () => {
  selectedData.value.push(
    unselectedData.value.filter(
      (item) => item.user_id === selecteduserOption.value
    )[0]
  );
  unselectedData.value = unselectedData.value.filter(
    (item) => item.user_id !== selecteduserOption.value
  );
  selecteduserOption.value = [];
  userCollectOptions();
};
const chageByDepartment = () => {};
const changeByYear = () => {
  getPlansbyBYear(budget_year.value);
  planCollectOptions();
};

const filterOption = (input: string, option: any) => {
  //ทำให้คนหาในselectionได้
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const onDelete = (key: Number) => {//ลบรายการuser
  unselectedData.value.push(
    selectedData.value.filter((item) => item.user_id === key)[0]
  );
  selectedData.value = selectedData.value.filter(
    (item) => item.user_id !== key
  );
  userCollectOptions();
};
const resetForm = () => {
  unselectedData.value = Users.value;
  selectedData.value = [];
};
</script>

<template>
  <!-- v-model:value="selectedOption" -->
  <pageheader title="เพิ่มรายการอบรม" sub-title="เพิ่มรายการอบรม" />
  {{ planOptions }}
  <div class="container">
    <a-form>
      <a-form-item label="เพิ่มผู้อบรม">
        <a-input-group compact>
          <a-select
            v-model:value="selecteduserOption"
            style="width: calc(100% - 200px)"
            show-search
            placeholder="เลือกบุคคลากร"
            :options="userOptions"
            :filter-option="filterOption"
          />
          <a-button type="primary" @click="changeBySelection">Submit</a-button>
        </a-input-group>
      </a-form-item>
      <a-form-item label="เพิ่มผู้อบรมจากกลุ่ม/ฝ่าย">
        <a-checkbox></a-checkbox>
      </a-form-item>
      <a-form-item label="แสดงผู้เข้าอบรม">
        <a-table bordered :data-source="selectedData" :columns="columns">
          <template #bodyCell="{ column, text, record }">
            <template v-if="column.dataIndex === 'name'">
              {{ record.prefix }}{{ record.first_name }}
              {{ record.last_name }}</template
            >
            <template v-else-if="column.dataIndex === 'operation'">
              <a-popconfirm
                v-if="selectedData.length"
                title="ตั้งใจที่จะลบหรือไม่?"
                @confirm="onDelete(record.user_id)"
              >
                <a>Delete</a>
              </a-popconfirm>
            </template>
          </template>
        </a-table>
      </a-form-item>
      <a-form-item label="ปีงบประมาน">
        <a-input-group compact>
          <a-input v-model:value="budget_year"></a-input>
          <a-button type="primary" @click="changeByYear">Submit</a-button>
        </a-input-group>
      </a-form-item>
      <a-form-item label="แผนการอบรม">
        <a-select
          v-model:value="selectedplanOption"
          style="width: calc(100% - 200px)"
          show-search
          placeholder="เลือกแผน"
          :options="planOptions"
          :filter-option="filterOption"
          :disabled="!visible_plan"
        ></a-select>
      </a-form-item>
      <a-form-item label="หลักสูตรอบรม">
        <a-select :disabled="budget_year == ''"></a-select>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 18 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
