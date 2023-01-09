<script setup lang="ts">
//บันทึกข้อมูลหลักสูตร
import axios from "axios";
import { Key } from "ant-design-vue/lib/_util/type";
import { ref } from "vue";
interface PlanDataType {
  plan_id: Key;
  plan_name: String;
}
interface OptionDataType {
  value: Key;
  label: String;
}
interface FormState {
  budget_year: Number;
  selectedPlanValue: Number;
  course_name: String;
  organizer: String;
  course_type: String;
  qouta: Number;
  budget: Number;
  course_status: String;
  amount_day: Number;
  course_note: String;
}
const visible = ref(false); //ควบคุมการอนุญาตเข้าถึงcomponentในhtml
const planData = ref<PlanDataType[]>([]); //เก็บแผนจากdatabase
const courseData = ref([]); //เก็บข้อมูลหลักสูตรเพื่ออัพลงdatabase
const planOptions = ref<OptionDataType[]>([]);//เอาข้อมูลแผนมาเป็นoption ในselection
// const formState = ref<FormState>();
const formState = ref<FormState>({//ข้อมูลที่บันทึกในForm
  budget_year: new Date().getFullYear() + 543,
  selectedPlanValue: 0,
  course_name: "",
  organizer: "",
  course_type: "",
  qouta: 0,
  budget: 0,
  course_status: "",
  amount_day: 0,
  course_note: "",
});
const course_date = ref([]); //บันทึกวันที่ที่จะไปอบรม เนื่องจากเป็นarray จึงต้องแยกออกมาจาก formstate

async function getPlansbyBYear(year: Number) {//เรียกแผนจากdatabase โดย filter ด้วยปี
  await axios
    .get(`http://localhost:5000/plans/year/${year}`)
    .then((response) => (planData.value = response.data))
    .catch((err) => console.log(err));
}
async function saveCourse() {//บันทึกหลักสูตรลงdatabase
  await axios
    .get(`http://localhost:5000/courses`)
    .then((response) => (courseData.value = response.data))
    .catch((err) => console.log(err));
  let id = 1;
  if (courseData.value.length !== 0) {
    id = (courseData.value[courseData.value.length - 1] as any).course_id + 1;
  }
  for (let i in course_date.value) {
    await axios
      .post("http://localhost:5000/courses", {
        course_id: id,
        plan_id: formState.value?.selectedPlanValue,
        course_name: formState.value?.course_name,
        organizer: formState.value?.organizer,
        course_type: formState.value?.course_type,
        quota: formState.value?.qouta,
        budget: formState.value?.budget,
        course_status: formState.value?.course_status,
        course_date: course_date.value[i],
        course_note: formState.value?.course_note,
      })
      .catch((err) => console.log(err));
  }
  formState.value = {//หลังจากบันทึกทำการ set to default
    budget_year: new Date().getFullYear() + 543,
    selectedPlanValue: 0,
    course_name: "",
    organizer: "",
    course_type: "",
    qouta: 0,
    budget: 0,
    course_status: "",
    amount_day: 0,
    course_note: "",
  };
}
const planCollectOptions = () => {//ฟังก์ชันเก็บแผนลงselection
  planOptions.value = planData.value.map(({ plan_id, plan_name }) => ({
    label: plan_name,
    value: plan_id,
  }));
};
const filterOption = (input: string, option: any) => {//ทำให้ค้นหาในselection's input
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const changeBySelection = () => {//เมื่อ selection เปลี่ยน
  getPlansbyBYear(formState.value.budget_year);
  planCollectOptions();
};

const onOk = (values: any) => {//เมื่อกดตกลง
  saveCourse();//บันทึกลงdatabase
  console.log("Success:", values);
};
</script>
<template>
  <div>
    <a-button type="primary" @click="visible = true">เพิ่มหลักสูตร</a-button>
    <a-modal
      v-model:visible="visible"
      title="เพิ่มแผนการอบรม"
      ok-text="ยืนยัน"
      cancel-text="ยกเลิก"
      @ok="onOk"
    >
      <a-form :model="formState" layout="vertical" name="form_in_modal">
        {{ courseData[11] }}
        <!-- ====ปีงบประมาน===== -->
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
          <a-input-group compact>
            <a-input
              v-model:value="formState.budget_year"
              style="width: calc(100% - 200px)"
              placeholder="ปีงบประมาน"
            />
            <a-button type="primary" @click="changeBySelection"
              >Submit</a-button
            >
          </a-input-group>
        </a-form-item>
        <!-- ====แผนการฝึกอบรม===== -->
        <a-form-item
          name="selectedPlanValue"
          label="แผนการฝึกอบรม"
          :rules="[
            {
              required: true,
              message: 'กรุณาเพิ่มแผนการอบรม',
            },
          ]"
        >
          <a-select
            v-model:value="formState.selectedPlanValue"
            style="width: calc(100% - 200px)"
            show-search
            placeholder="เลือกบุคคลากร"
            :options="planOptions"
            :filter-option="filterOption"
          />
        </a-form-item>
        <!-- ====ชื่อหลักสูตร===== -->
        <a-form-item
          name="course_name"
          label="ชื่อหลักสูตรการอบรม"
          :rules="[
            {
              required: true,
              message: 'กรุณาเพิ่มชื่อหลักสูตรการอบรม',
            },
          ]"
        >
          <a-input
            v-model:value="formState.course_name"
            style="width: calc(100% - 200px)"
            placeholder="ชื่อหลักสูตร"
          />
        </a-form-item>
        <!-- ====ผู้จัดอบรม===== -->
        <a-form-item
          name="organizer"
          label="ผู้จัดอบรม"
          :rules="[
            {
              required: true,
              message: 'กรุณาเพิ่มชื่อผู้จัดอบรม',
            },
          ]"
        >
          <a-input
            v-model:value="formState.organizer"
            style="width: calc(100% - 200px)"
            placeholder="ผู้จัดอบรม"
          />
        </a-form-item>
        <!-- ==== ออนไลน์หรือออนไซต์===== -->
        <a-form-item
          name="course_type"
          label="รูปแบบการจัดอบรม(เพิ่มรายละเอียดสถานที่จัดในหมายเหตุ)"
          :rules="[
            {
              required: true,
              message: 'กรุณาเพิ่มชื่อผู้จัดอบรม',
            },
          ]"
        >
          <a-select
            v-model:value="formState.course_type"
            style="width: calc(100% - 200px)"
          >
            <a-select-option value="Online">ออนไลน์ (Online)</a-select-option>
            <a-select-option value="Onsite">ออนไซต์ (Onsite)</a-select-option>
          </a-select>
        </a-form-item>
        <!-- ====โควต้า===== -->
        <a-form-item
          name="qouta"
          label="จำนวนผู้อบรมที่ต้องการ"
          :rules="[
            {
              required: true,
              message: 'กรุณาเพิ่มจำนวนผู้อบรมที่ต้องการ',
            },
          ]"
        >
          <a-input
            v-model:value="formState.qouta"
            style="width: calc(100% - 200px)"
            placeholder="จำนวนผู้อบรมที่ต้องการ"
          />
        </a-form-item>
        <!-- ====งบประมาณ===== -->
        <a-form-item
          name="budget"
          label="งบประมาณ"
          :rules="[
            {
              required: true,
              message: 'กรุณาเพิ่มงบประมาณ',
            },
          ]"
        >
          <a-input
            v-model:value="formState.budget"
            style="width: calc(100% - 200px)"
            placeholder="งบประมาณ"
          />
        </a-form-item>
        <!-- ====สถานะหลักสูตร===== -->
        <a-form-item
          name="course_status"
          label="สถานะหลักสูตร"
          :rules="[
            {
              required: true,
              message: 'สถานะหลักสูตร',
            },
          ]"
        >
          <a-select
            v-model:value="formState.course_status"
            style="width: calc(100% - 200px)"
          >
            <a-select-option value="active">เปิดรับอยู่</a-select-option>
            <a-select-option value="inactive">ไม่เปิดรับ</a-select-option>
          </a-select>
        </a-form-item>
        <!-- ====วันที่ไปอบรม===== -->
        <a-form-item
          name="amount_day"
          label="วันที่ไปอบรม"
          :rules="[
            {
              required: true,
              message: 'วันที่ไปอบรม',
            },
          ]"
        >
          <va-date-picker mode="multiple" stateful v-model="course_date" />
          <h3>จำนวน {{ (formState.amount_day = course_date.length) }} วัน</h3>
        </a-form-item>
        <!-- ====หมายเหตุเพิ่มเติม -->
        <a-form-item name="course_note" label="หมายเหตุเพิ่มเติม">
          <a-textarea
            v-model:value="formState.course_note"
            show-count
            :maxlength="600"
            :rows="6"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
