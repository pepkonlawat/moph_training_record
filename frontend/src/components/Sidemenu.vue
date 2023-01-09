<script setup lang="ts">
import { ref } from "vue";
import {
  HomeOutlined,
  DesktopOutlined,
  FileAddOutlined,
  TeamOutlined,
  FieldTimeOutlined,
  BookOutlined,
  LogoutOutlined,
} from "@ant-design/icons-vue";
const selectedKeys = ref<string[]>(["1"]);
</script>
<template>
  <div class="logo">
    <img
      src="../assets/moph_logo.png"
      style="width: 2em; height: 2em; margin-right: 5px"
    />
    <span>แผนฝึกอบรม</span>
  </div>
  <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
    <router-link to="/HomePage">
      <a-menu-item key="1">
        <home-outlined />
        <span>หน้าแรก</span>
      </a-menu-item>
    </router-link>
    <router-link to="/TrainningListPage">
      <a-menu-item key="2">
        <desktop-outlined />
        <span>รายการการอบรม</span>
      </a-menu-item>
    </router-link>
    <router-link to="/PlanandCoursePage">
      <a-menu-item key="3">
        <book-outlined />
        <span>แผนและหลักสูตร</span>
      </a-menu-item>
    </router-link>
    <router-link to="/CreateListPage">
      <a-menu-item key="4">
        <file-add-outlined />
        <span>เพิ่มรายการ</span>
      </a-menu-item>
    </router-link>
    <router-link to="/UserPage">
      <a-menu-item key="5">
        <TeamOutlined />
        <span>ผู้ใช้งาน</span>
      </a-menu-item>
    </router-link>
    <router-link to="/RecyclebinPage">
      <a-menu-item key="6">
        <field-time-outlined />
        <span>ถังขยะ</span>
      </a-menu-item>
    </router-link>

    <router-link to="/login">
      <a-menu-item key="7">
        <logout-outlined />
        <span>ออกจากระบบ</span>
      </a-menu-item>
    </router-link>
  </a-menu>
</template>
<style>
.logo {
  padding: 10px 0 10px 16px;
}
</style>
