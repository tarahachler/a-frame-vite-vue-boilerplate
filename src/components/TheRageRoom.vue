<script setup>
import { ref } from "vue";
import { randomHsl } from "../utils/color.js";
import BoxColorChanging from "./BoxColorChanging.vue";
import PortalTeleporter from "./PortalTeleporter.vue";
import "../aframe/life-like-automaton.js";
</script>

<template>
  <a-entity
    gltf-model="#wooden-floor"
    rotation="0 90 0"
    position="0 100 0"
    scale="0.7 0.2 0.7"
  >
    <PortalTeleporter
      xlabel="Sortie"
      position="-1.3 6.4 -4.2"
      rotation="0 0 0"
      scale="0.5 0.5 0.5"
      xlife-like-automaton="resolution: 256;"
      :rot="0"
      :y="0"
    />
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
