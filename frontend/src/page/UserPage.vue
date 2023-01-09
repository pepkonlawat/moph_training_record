<script setup lang="ts">
//แสดงuser ทั้งหมด
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { Key } from "ant-design-vue/lib/_util/type";
import pageheader from "../components/PageHeader.vue";
import axios from "axios";

//--------Table---------//
interface DataType {
  user_id: Key;
  prefix: String;
  first_name: String;
  last_name: String;
  department: String;
  position: String;
  level: String;
  role: String;
  email: String;
  password: String;
}
//---------[initial]
//duplicate from database
const userData: Ref<DataType[]> = ref([]);
//---------[connect to backend]
//onMounted
onMounted(() => {
  console.log("mounted");
  getUsers();
});
async function getUsers() {
  //เรียกUserทั้งหมด
  try {
    const response = await axios.get("http://localhost:5000/users");
    userData.value = response.data;
  } catch (err) {
    console.log(err);
  }
}
const selectedRowKeys = ref<Key[]>([]);
const columns = [
  {
    title: "ชื่อ",
    dataIndex: "name",
    width: "13%",
    fixed: "left",
    sorter: true,
  },
  {
    title: "กลุ่ม/ฝ่าย",
    dataIndex: "department",
    filters: [
      {
        text: "ผู้บริหาร",
        value: "ผู้บริหาร",
      },
      {
        text: "ฝ่ายบริหารทั่วไป",
        value: "ฝ่ายบริหารทั่วไป",
      },
      {
        text: "กลุ่มบริหารเทคโนโลยีสารสนเทศและการจัดการ",
        value: "กลุ่มบริหารเทคโนโลยีสารสนเทศและการจัดการ",
      },
      {
        text: "กลุ่มคอมพิวเตอร์และเครือข่าย",
        value: "กลุ่มคอมพิวเตอร์และเครือข่าย",
      },
      {
        text: "กลุ่มพัฒนามาตรฐานและบริการคอมพิวเตอร์",
        value: "กลุ่มพัฒนามาตรฐานและบริการคอมพิวเตอร์",
      },
      {
        text: "กลุ่มพัฒนาการบริหารข้อมูล",
        value: "กลุ่มพัฒนาการบริหารข้อมูล",
      },
      {
        text: "กลุ่มพัฒนานวัตกรรมดิจิทัล",
        value: "กลุ่มพัฒนานวัตกรรมดิจิทัล",
      },
    ],
  },
  {
    title: "ตำแหน่ง",
    dataIndex: "position",
  },
  {
    title: "ระดับ",
    dataIndex: "level",
  },
  {
    title: "บทบาท",
    dataIndex: "role",
    width: "10%",
  },
  {
    title: "อีเมลล์",
    dataIndex: "email",
    width: "25%",
  },
  {
    title: "รหัสผ่าน",
    dataIndex: "password",
    width: "10%",
  },
];
</script>
<template>
  <pageheader title="ผู้ใช้งาน" sub-title="จัดการผู้ใช้งาน" />

  <div class="content">
    <router-link to="/AddUserPage">
      <a-button type="primary">เพิ่มผู้ใช้งาน</a-button>
    </router-link>
    <a-button disabled>edit</a-button>
    <a-button disabled>delete</a-button>

    <!--search-->
    <a-input-search placeholder="input search text" enter-button @search="" />
    <a-table
      :columns="columns"
      :data-source="userData"
      :scroll="{ x: 1500, y: 560 }"
      :row-selection="selectedRowKeys"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'name'"
          >{{ record.prefix }}{{ record.first_name }}
          {{ record.last_name }}</template
        >
      </template>
    </a-table>
  </div>
</template>
