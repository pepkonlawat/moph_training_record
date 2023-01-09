<!-- table title -->
<!--approve buttom-->
<!--search-->
<!-- table [select , approve, budget year, name ,position],level,department,plan ,course,trinnung status,result, estimate-->
<!--number of selected rows-->
<!--page navigate-->
<script setup lang="ts">
import pageheader from "../components/PageHeader.vue";
import { Key } from "ant-design-vue/lib/_util/type";
const columns = [
  {
    title: "เจ้าหน้าที่",
    dataIndex: "Name",
  },
  {
    title: "ตำแหน่ง",
    dataIndex: "Position",
  },
  {
    title: "ระดับ",
    dataIndex: "Level",
  },
  {
    title: "กลุ่ม/ฝ่าย",
    dataIndex: "Department",
  },
  {
    title: "แผนการอบรม",
    dataIndex: "Plan",
  },
  {
    title: "หลักสูตร",
    dataIndex: "Course",
  },
  {
    title: "ผู้จัดอบรม",
    dataIndex: "Organizer",
  },
  {
    title: "การอนุมัติ",
    dataIndex: "Approve",
  },
  {
    title: "สถานะการไปอบรม",
    dataIndex: "TrainningStatus",
  },
  {
    title: "ผลการอบรม",
    dataIndex: "Result",
  },
  {
    title: "การประเมินผล",
    dataIndex: "Estimate",
  },
];
interface DataType {
  ID: Key;
  Name: String;
  Position: String;
  Level: String;
  Department: String;
  Plan: String;
  Course: String;
  Organizer: String;
  Approve: String;
  TrainningStatus: String;
  Result: String;
  Estimate: String;
}
const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    ID: i,
    Name: `กลวัชร คธาเพ็ชร ${i}`,
    Position: `นักวิชาการคอมพิวเตอร์`,
    Level: `ชำนาญการพิเศษ`,
    Department: `กลุ่มบริหารเทคโนโลยีสารสนเทศและการจัดการ`,
    Plan: `แผนพัฒนาบุคคลากรด้านCyber Security`,
    Course: `หลักสูตรpentestและการหาช่องโหว่คอมพิวเตอร์`,
    Organizer: `มหาวิทยาลัยมหิดล`,
    Approve: `อนุมัติ`,
    TrainningStatus: `รอการเข้าอบรม`,
    Result: `รอการเข้าอบรม`,
    Estimate: `ยังไม่มีการประเมิน`,
  });
}
const selectedRowKeys = {};
</script>

<template>
  <pageheader title="ถังขยะ" sub-title="จัดการผู้ใช้งาน" />
  <a-table
    :columns="columns"
    :data-source="data"
    :scroll="{ x: 1500, y: 560 }"
    :row-selection="selectedRowKeys"
  />
</template>
