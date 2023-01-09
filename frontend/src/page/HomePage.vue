<script setup lang="ts">
import pageheader from "../components/PageHeader.vue";
</script>
<template>
  <pageheader title="หน้าแรก" sub-title="" />
  <div class="home-image">
    <div class="home-text">
      <a-typography-title>ยินดีต้อนรับ</a-typography-title>

      <a-typography-title :level="3">
        เข้าสู่ระบบเพื่อใช้งานโปรแกรมสำหรับการบันทึกข้อมูลการอบรมของบุคคลากร<br />
        ภายในศูนย์เทคโนโลยีสารสนเทศและการสื่อสาร<br />
        สำนักงานปลัดกระทรวงสาธารณสุข</a-typography-title
      >
    </div>
  </div>
</template>
<style scoped>
.home-text {
  padding: 30px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
}
.home-image {
  height: 720px;
  background-image: url(../assets/background_home.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  background-color: #cccccc;
}
</style>
