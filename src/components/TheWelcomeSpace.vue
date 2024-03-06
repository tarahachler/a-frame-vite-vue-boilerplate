<script setup>
import { ref } from "vue";
import { randomHsl } from "../utils/color.js";
import BoxColorChanging from "./BoxColorChanging.vue";
import PortalTeleporter from "./PortalTeleporter.vue";
import { firstTimeinRoom } from "../state.js";
import "../aframe/pavage.js";
import "../aframe/listen-to.js";
import "../aframe/clickable.js";

import "../aframe/life-like-automaton.js";

defineProps({
  scale: Number,
});

if(!firstTimeinRoom.value){
  document.getElementById("start-button").setAttribute("visible", false);
}

function startAnimation(evt) {
  console.log("startAnimation");
  const teddyBear = evt.target;
  teddyBear.setAttribute("animation-mixer", "repetitions: 3; timeScale: 0.7");
  document.querySelector("#start-button").setAttribute("visible", false);
}
</script>

<template>
  <a-entity
    pavage="tileSize: 0.5; offset:0.0001; color_1:#726552; color_2: #4a3a25"
    position="0 -0.1 0"
    rotation="0 130 0"
  ></a-entity>
  <PortalTeleporter
    position="-0.7 0.09 -2.4"
    rotation="0 40 0"
    :rot="180"
    :y="100"
    :z="0.2"
    listen-to="target: #portal"
    sound="src: #teleport; on: click; volume: 2"
  />
  <a-entity
    gltf-model="#plant-1"
    position="-1.1 0.07 -1.6"
    scale="0.6 0.6 0.6"
  ></a-entity>
  <a-entity
    id="start-button"
    clickable
    gltf-model="#button"
    position="0.33 1.57 -1.835"
    rotation="0 -90 -90"
    scale="0.1 0.06 0.13"
    animation__up="property: position; to: 0.33 1.64 -1.835; dur: 1600; easing: easeInOutSine; startEvents: animationcomplete__down"
    animation__down="property: position; to: 0.33 1.57 -1.835; dur: 1600; easing: easeInOutSine; startEvents: animationcomplete__up"
    emit-when-near="distance: 5; event: animationcomplete__down"
    visible="true"
  >
    <a-text
      value="C'est parti !"
      width="3"
      position="-0.1 1.8 2.67"
      rotation="-90 -170 -100"
      color="#FFF"
      scale="8 9.6 8"
    ></a-text>
  </a-entity>
  <a-entity
    gltf-model="#wooden-sign"
    position="-1.2 0.72 -1.3"
    rotation="0 90 0"
    scale="0.6 0.8 0.8"
  >
    <a-text
      value="L'atelier"
      width="3"
      position="-0.241 0.415 0.115"
      color="#FFF"
      scale="1 1 1"
    ></a-text>
    <a-text
      value="d'expression"
      width="3.1"
      position="-0.4 0.29 0.115"
      color="#FFF"
      scale="1 1 1"
    ></a-text>
    <a-text
      value="virtuel"
      width="3"
      position="-0.22 0.163 0.115"
      color="#FFF"
      scale="1 1 1"
    ></a-text>
  </a-entity>
  <a-entity
    light="type: point; color: beige; intensity: 0.15;"
    position="0 0 0"
  ></a-entity>
  <a-entity
    listen-to="target: #start-button"
    animation-mixer="timeScale: 0"
    gltf-model="#teddy-bear"
    position="0.5 0.2 -2.5"
    scale="1.9 1.9 1.9"
    sound="src: #intro; autoplay: false; on: click"
    @click="(evt) => startAnimation(evt)"
  >
  </a-entity>
  <a-ocean
    position="0 -0.5 0"
    width="50"
    depth="50"
    density="10"
    speed="1"
    amplitude="0.2"
    color="#235184"
  ></a-ocean>
  <a-ocean
    position="0 -0.5 0"
    width="50"
    depth="50"
    density="7"
    speed="0.2"
    amplitude="0.2"
    color="#235184"
  ></a-ocean>
  <a-entity
    sound="src: #lake; autoplay: true; loop: true; volume:0.5"
  ></a-entity>
</template>
