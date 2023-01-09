<script setup lang="ts">
//เพิ่มข้อมูลuser
import { Key } from "ant-design-vue/lib/_util/type";
import { SelectProps } from "ant-design-vue";
import { ref } from "vue";
import axios from "axios";
import pageheader from "../components/PageHeader.vue";
interface FormState {
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
const formState = ref<FormState>({
  prefix: "",
  first_name: "",
  last_name: "",
  department: "",
  position: "",
  level: "",
  role: "",
  email: "",
  password: "",
});

const onFinish = (values: any) => {
  saveUser();
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const prefixOption = ref<SelectProps["options"]>([
  {
    value: "นาย",
  },
  {
    value: "นาง",
  },
  {
    value: "นางสาว",
  },
]);

const departmentOption = ref<SelectProps["options"]>([
  { value: "ฝ่ายบริหารทั่วไป" },
  { value: "กลุ่มคอมพิวเตอร์และเครือข่าย" },
  { value: "กลุ่มพัฒนาการบริหารข้อมูล" },
  { value: "ผู้บริหาร" },
  { value: "กลุ่มบริหารเทคโนโลยีสารสนเทศและการจัดการ" },
  { value: "กลุ่มพัฒนามาตรฐานและบริการคอมพิวเตอร์" },
  { value: "กลุ่มพัฒนานวัตกรรมดิจิทัล" },
]);

const positionOption = ref<SelectProps["options"]>([
  { value: "ผู้อำนวยการ" },
  { value: "รองผู้อำนวยการ" },
  { value: "นักวิชาการคอมพิวเตอร์" },
  { value: "เจ้าพนักงานเครื่องคอมพิวเตอร์" },
  { value: "นักวิเคราะห์นโยบายและแผน" },
  { value: "เจ้าพนักงานธุรการ" },
  { value: "นักจัดการงานทั่วไป" },
  { value: "นักทรัพยากรบุคคล" },
  { value: "นักวิชาการพัสดุ" },
  { value: "เจ้าพนักงานพัสดุ" },
  { value: "นักวิชาการเงินและบัญชี" },
  { value: "เจ้าภาระกิจสารบรรณและผลิตเอกสาร" },
  { value: "พนักงานขับรถ" },
]);

const levelOption = ref<SelectProps["options"]>([
  {
    label: "ประเภทบริหารหรือประเภทอำนวยการ",
    options: [{ value: "ระดับสูง" }, { value: "ระดับต้น" }],
  },
  {
    label: "ประเภทวิชาการ",
    options: [
      { value: "ระดับทรงคุณวุฒิ" },
      { value: "ระดับเชี่ยวชาญ" },
      { value: "ระดับชำนาญการพิเศษ" },
      { value: "ระดับชำนาญการ" },
      { value: "ระดับปฏิบัติการ" },
    ],
  },
  {
    label: "ประเภทวิชาการ",
    options: [
      { value: "ระดับทักษะพิเศษ" },
      { value: "ระดับอาวุโส" },
      { value: "ระดับชำนาญงาน" },
      { value: "ระดับปฏิบัติงาน" },
    ],
  },
]);
const roleOption = ref<SelectProps["options"]>([
  {
    value: "หัวหน้ากลุ่ม",
  },
  {
    value: "บุคลากร",
  },
]);
const filterOption = (input: string, option: any) => {//สามารถค้นหาในselection
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
async function saveUser() {//บันทึกข้อมูลuser
  try {
    await axios.post("http://localhost:5000/users", {
      prefix: formState.value.prefix,
      first_name: formState.value.first_name,
      last_name: formState.value.last_name,
      department: formState.value.department,
      position: formState.value.position,
      level: formState.value.level,
      role: formState.value.role,
      email: formState.value.email,
      password: formState.value.password,
    });
    (formState.value.prefix = ""),
      (formState.value.first_name = ""),
      (formState.value.last_name = ""),
      (formState.value.department = ""),
      (formState.value.position = ""),
      (formState.value.level = ""),
      (formState.value.role = ""),
      (formState.value.email = ""),
      (formState.value.password = "");
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <pageheader title="เพิ่มผู้ใช้งานใหม่" sub-title="เพิ่มผู้ใช้งานใหม่" />
  <a-form :model="formState" @finish="onFinish" @finishFailed="onFinishFailed">
    <a-form-item
      label="คำนำหน้า"
      name="prefix"
      :rules="[{ required: true, message: 'Please input your prefix!' }]"
    >
      <a-select
        v-model:value="formState.prefix"
        :options="prefixOption"
        style="width: 120px"
      />
    </a-form-item>

    <a-form-item
      label="ชื่อ"
      name="first_name"
      :rules="[{ required: true, message: 'Please input your first_name!' }]"
    >
      <a-input v-model:value="formState.first_name" style="width: 200px" />
    </a-form-item>
    <a-form-item
      label="นามสกุล"
      name="last_name"
      :rules="[{ required: true, message: 'Please input your last_name!' }]"
    >
      <a-input v-model:value="formState.last_name" style="width: 200px" />
    </a-form-item>

    <a-form-item
      label="กลุ่ม/ฝ่าย"
      name="department"
      :rules="[{ required: true, message: 'Please input your department!' }]"
    >
      <a-select
        v-model:value="formState.department"
        show-search
        :options="departmentOption"
        style="width: 400px"
      />
    </a-form-item>
    <a-form-item
      label="ตำแหน่ง"
      name="position"
      :rules="[{ required: true, message: 'Please input your position!' }]"
    >
      <a-select
        v-model:value="formState.position"
        show-search
        :options="positionOption"
        style="width: 400px"
      />
    </a-form-item>
    <a-form-item
      label="ระดับ"
      name="level"
      :rules="[{ required: true, message: 'Please input your level!' }]"
    >
      <a-select
        v-model:value="formState.level"
        :options="levelOption"
        style="width: 250px"
      />
    </a-form-item>
    <a-form-item
      label="บทบาท"
      name="role"
      :rules="[{ required: true, message: 'Please input your role!' }]"
    >
      <a-select
        v-model:value="formState.role"
        :options="roleOption"
        style="width: 120px"
      />
    </a-form-item>
    <a-form-item
      label="อีเมลล์"
      name="email"
      :rules="[
        { required: true, message: 'Please input your email!', type: 'email' },
      ]"
    >
      <a-input v-model:value="formState.email" style="width: 200px" />
    </a-form-item>
    <a-form-item
      label="รหัสผ่าน"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input v-model:value="formState.password" style="width: 200px" />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
