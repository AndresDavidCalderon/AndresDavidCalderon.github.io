
<script setup>
  import { ref } from 'vue';
  import InPagePlay from './InPagePlay.vue';
  import InPagePlayer from './InPagePlayer.vue';
  const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    images: { type: Array, default: () => [] },
    accent: { type: String, default: '#ffffff' },
    image_width: { type: String, default: '100%' },
    title_class: { type: String, default: '' },
    button_class: { type: String, default: '' },
    run_url : { type: String, default: '' },
    iframe_height : { type: String, default: '80vh' },
    iframe_width : { type: String, default: '80vw' }
  });

  let running = ref(false);
</script>
<template>
  <div :style="{ '--accentColor': accent }">
    <div class="project_title_container">
      <h1 :class="title_class">
        {{ title }}
        <div class="accent_glow"></div>
      </h1>
    </div>
    <p>{{ description }}</p>
    <div v-if="!running" class="image_container">
        <img
        :src="images[0]"
        :alt="title"
        :style="{ width: image_width}"
        />
    </div>
    <div v-else class="run_cointainer">
      <in-page-player :play-u-r-l="run_url" :button-class="button_class" :height="iframe_height" :width="iframe_width">
      </in-page-player>
    </div>
    <div class="image_selector_container">
      <div
        class="image_selector"
        v-for="(img, idx) in images"
        :key="idx"
      />
    </div>

		<div class="project_interaction_container">
			<InPagePlay v-if="button_class!='' && run_url" :custom_class="button_class" @click="running=true;"/>
      <slot />
    </div>
  </div>
</template>


<style scoped>
div{
    margin:0
}
.project_title_container {
    width: 100vw;
    position: relative;

    margin: 0;
}
h1 {
    color: white;
    text-align: left;
    position: relative;
    vertical-align: middle;
}
p {
    text-align: left;
    width: 90vw;
}
.accent_glow {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 5%;
    left: -60%;
    margin: 0;
}
.image_selector_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.image_selector {
    border-radius: 4px;
    background-color: var(--main-accent-color);
    width: 30vw;
    height: 2px;
}
.image_container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
.run_cointainer{
    display: flex;
    justify-content: center;
}
img {
    width: 100vw;
    margin:0;
}
</style>
