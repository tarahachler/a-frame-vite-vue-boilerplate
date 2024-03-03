<script setup>
  import { ref } from 'vue';
  import { randomHsl } from '../utils/color.js';
  import BoxColorChanging from './BoxColorChanging.vue';
  import PortalTeleporter from './PortalTeleporter.vue';
  import '../aframe/pavage.js';
  import '../aframe/listen-to.js';

  import '../aframe/life-like-automaton.js';

  defineProps({
    scale: Number,
  });

</script>

<template>
  <a-entity pavage="tileSize: 0.5; offset:0.0001; color_1:#726552; color_2: #4a3a25" position="0 -0.1 0" rotation="0 130 0"></a-entity>
    <PortalTeleporter
      position="-0.7 0.09 -2.4"
      rotation="0 40 0"
      :rot="180"
      :y="100"
      :z="0.2"
      listen-to="target: #portal"
      sound="src: #teleport; on: click; volume: 2"
    />
    <!-- <PortalTeleporter
      xlife-like-automatonlabel="Rage Zone"
      xlife-like-automaton="resolution: 256;"
      position="2 0 -3"
      rotation="0 -20 0"
      :rot="180"
      :y="100"
    /> -->
      <a-entity light="type: point; color: beige; intensity: 0.15;"
      position="0 0 0"></a-entity>
    <a-entity animation-mixer="repetitions: 6;" gltf-model="#teddy-bear" position="0.5 0 -2.5" scale="1.9 1.9 1.9" sound="src: #intro; autoplay: true">
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
    <a-entity sound="src: #lake; autoplay: true; loop: true; volume:0.5" ></a-entity>
  <!-- Main room navigation mesh  -->
<!--   <a-entity
    geometry="primitive: plane; height: 13.5; width: 6"
    position="0 0.01 -4.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: .5; width: 5"
    position="0 0.01 -11.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity> -->

</template>