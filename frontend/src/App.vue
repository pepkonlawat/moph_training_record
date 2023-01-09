<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header style="background: #fff; padding: 0" />
    <a-layout>
      <a-layout-sider style="background: #fff">
        <Sidemenu />
      </a-layout-sider>
      <a-layout>
        <a-layout-content style="margin: 0 16px">
          <div style="background: #fff; margin: 10px 0 0">
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          แผนฝึกอบรม ©2022 Created by ICT.MOPH
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import Sidemenu from "./components/Sidemenu.vue";
</script>
<style>
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #fff;
}
</style>
