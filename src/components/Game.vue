<script setup>
    import { ref,computed } from "vue"
    import InPagePlayer from "./InPagePlayer.vue";
    import { getUI } from "../language.js";
    const props=defineProps({
        image: String,
        accent: String,
        playURL: String,
        titleURL: String,
        titleHeight : {type: String, default: '20%',required: false},
        buttonClass : {type: String, default: '', required: false},
        focusedImage: {type: String, default: '', required: false}
    })

    let playing=ref(false)
    let focused=ref(false)

    const onFocused=()=>{
        if(props.focusedImage!=''){
            focused.value=true;
        }
    }

    const freshImage=computed(()=>{
        return `${props.focusedImage}?t=${new Date().getTime()}`
    })

</script>
<template>
    <div v-if="!playing" class="game_container"  @mouseover="onFocused">
        <img :src="focused ? freshImage:image" alt="Showcase project image" class="game_image"/>
        <div class="game_title_container">
            <img :src="titleURL" alt="Game title" class="game_title"/>

        </div>
        <h1 class="play_button" @click="playing=true">
            <div class="accent_glow"></div>
            <span class="play_text">{{ getUI('contents.play') }}</span>
        </h1>
    </div>
    <div v-else class="game_container">
        <InPagePlayer :playURL="playURL" :buttonClass="buttonClass"/>
    </div>


</template>
<style src="../styles/index.css"></style>
<style scoped>
    .game_title_container{
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        height: v-bind(titleHeight);
        top: 0%;
    }
    .game_image{
    position: relative;
    width: 100vw;
    margin: 0;
    z-index: 0;
    mask-image: linear-gradient(to bottom,transparent 0%, white 5%,white 95%,transparent 100%);
    }
    .game_title{
        position: absolute;
        height: 100%;
    }

    .play_button{
    position: absolute;
    height: 100%;
    top : 0%;
    display: flex;
    align-items: center;
    cursor: pointer;
    }


    .game_container{
    position: relative;
    margin:0;
    }

    .play_text{
        font-family: "Jersey 15", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 18vw;
        -webkit-text-stroke: 0.5px black;
        z-index:2;
    }


    .accent_glow{
    --accentColor: v-bind(accent);
    position:absolute;
    width: 200%;
    height: 20%;
    left: -105%;
    z-index:1;
    }
</style>    