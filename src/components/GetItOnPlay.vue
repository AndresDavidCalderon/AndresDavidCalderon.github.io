<template>
  <a :href="url" target="_blank">
    <img src="/icons/get_it_on_play.svg" class="get_it_on_play" />
  </a>
</template>

<script setup>
const props = defineProps({
  url: { type: String, default: 'https://play.google.com' }
})
</script>

<style scoped>
/* uses global .get_it_on_play from src/styles/index.css */
</style>
