<script setup lang="ts">
//แสดงรายการการอบรมรายยบุคคล โดยต้องระบุช่วงปีงบประมาณ
import { ref, onBeforeMount } from "vue";
import { Key } from "ant-design-vue/lib/_util/type";
import axios from "axios";
import type { Dayjs } from "dayjs";

onBeforeMount(() => {
  getAllUsers();
});
interface formState {
  selecteduserOption: Key;
  startYear: Number;
  endYear: Number;
}
const userData = ref([]);
const userOptions = ref();
const formState = ref<formState>({
  selecteduserOption: "",
  startYear: new Date().getFullYear() + 543,
  endYear: new Date().getFullYear() + 543,
});
async function getAllUsers() {
  await axios
    .get("http://localhost:5000/users")
    .then((response) => (userData.value = response.data))
    .then(() => userCollectOptions())
    .catch((err) => console.log(err));
}
const userCollectOptions = () => {
  userOptions.value = userData.value.map(
    ({ user_id, prefix, first_name, last_name }) => ({
      label: `${prefix}${first_name} ${last_name}`,
      value: user_id,
    })
  );
};
const filterOption = (input: string, option: any) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>
<template>
  <a-form :model="formState" layout="vertical" name="form_in_modal">
    <!-- <a-form-item label="เพิ่มผู้อบรม">
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
      </a-form-item> -->
    <!-- ====ปีงบประมาน===== -->
    <a-form-item
      name="selecteduserOption"
      label="ชื่อบุคคลากร"
      :rules="[
        {
          required: true,
          message: 'กรุณาเพิ่มชื่อบุคคลากร',
        },
      ]"
    >
      <a-select
        v-model:value="formState.selecteduserOption"
        style="width: calc(100% - 200px)"
        show-search
        placeholder="เลือกบุคคลากร"
        :options="userOptions"
        :filter-option="filterOption"
      />
    </a-form-item>
    <a-form-item
      name="startYear"
      label="ตั้งแต่ปีงบประมาณ"
      :rules="[
        {
          required: true,
          message: 'กรุณาเพิ่มปีงบประมาณ',
        },
      ]"
    >
      <a-input v-model:value="formState.startYear" />
    </a-form-item>
    <a-form-item
      name="endYear"
      label="ถึงปีงบประมาณ"
      :rules="[
        {
          required: true,
          message: 'กรุณาเพิ่มปีงบประมาณ',
        },
      ]"
    >
      <a-input v-model:value="formState.endYear" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>
