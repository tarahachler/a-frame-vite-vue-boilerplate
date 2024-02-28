<script setup>
  import { ref } from 'vue';
  import { randomHsl } from '../utils/color.js';
  import BoxColorChanging from './BoxColorChanging.vue';
  import PortalTeleporter from './PortalTeleporter.vue';

  import '../aframe/life-like-automaton.js';

  defineProps({
    scale: Number,
  });

</script>

<template>
    <PortalTeleporter
      label="Calm Zone"
      life-like-automaton="resolution: 256;"
      position="-2 1.5 -3"
      rotation="0 20 0"
      :rot="180"
      :y="200"
      :z="0.2"
    />
    <PortalTeleporter
      label="Rage Zone"
      life-like-automaton="resolution: 256;"
      position="2 1.5 -3"
      rotation="0 -20 0"
      :rot="180"
      :y="100"
    />
    <a-entity gltf-model="#light-bulb" position="2 2.3 2">
      <a-entity light="type: point; color: beige; intensity: 1;"
      position="0 0.2 0"></a-entity>
    </a-entity>
    <a-entity animation-mixer="repetitions: 6" gltf-model="#teddy-bear" position="0 0 -2" scale="1.9 1.9 1.9">
      </a-entity>
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