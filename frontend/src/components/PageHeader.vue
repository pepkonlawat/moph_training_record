<script setup lang="ts">
const props = defineProps({
  Title: String,
  Sub: String,
});
</script>
<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="props.title"
    sub-title="props.sub"
    @back="() => null"
  />
</template>
