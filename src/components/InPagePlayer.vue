<script setup>
    let props = defineProps({
        playURL: String,
        buttonClass: String,
        width: {type: String, default: '100vw'},
        height: {type: String, default: '50vw'}
    });
    const fullscreen=()=>{
        const iframe=document.getElementById(props.playURL)
        iframe.requestFullscreen();
    }
</script>
<template>
    <div>  
        <iframe :src="playURL" :id="playURL" class="game_window" allowfullscreen></iframe>
        <button class="material-symbols-outlined interaction_button" :class="buttonClass" @click="fullscreen">fullscreen</button>
    </div>
 </template>
 <style src="../styles/index.css"></style>
<style>

    .game_window{
        position: relative;
        width: v-bind("props.width");
        height: v-bind("props.height");
        background-color: white;
    }


</style>