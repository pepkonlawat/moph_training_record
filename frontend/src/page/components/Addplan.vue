<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
interface FormState {
  budget_year: Number;
  plan_name: String;
}
const visible = ref(false); //ควบคุมแสดงhtml
const formState = ref<FormState>({//เก็บข้อมูล form
  budget_year: new Date().getFullYear() + 543,
  plan_name: "",
});
async function savePlan() {//บันทึกแผน
  await axios
    .post("http://localhost:5000/plans", {
      plan_name: formState.value.plan_name,
      budget_year: formState.value.budget_year,
    })
    .then(() => (formState.value.plan_name = ""))
    .catch((err) => console.log(err));
}

const onOk = (values: any) => {
  savePlan();
  console.log("Success:", values);
};
</script>
<template>
  <div>
    <a-button type="primary" @click="visible = true">เพิ่มแผน</a-button>
    <a-modal
      v-model:visible="visible"
      title="เพิ่มแผนการอบรม"
      ok-text="ยืนยัน"
      cancel-text="ยกเลิก"
      @ok="onOk"
    >
      <a-form :model="formState" layout="vertical" name="form_in_modal">
        <a-form-item
          name="budget_year"
          label="ปีงบประมาน (โปรดตรวจสอบปีงบประมานก่อนยืนยัน)"
          :rules="[
            {
              required: true,
              message: 'กรุณาเพิ่มปีงบประมาณ',
            },
          ]"
        >
          <a-input v-model:value="formState.budget_year" />
        </a-form-item>
        <a-form-item
          name="plan_name"
          label="ชื่อแผนการฝึกอบรม"
          :rules="[
            {
              required: true,
              message: 'กรุณาเพิ่มแผนการอบรม',
            },
          ]"
        >
          <a-input v-model:value="formState.plan_name" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
  <template></template>
</template>
