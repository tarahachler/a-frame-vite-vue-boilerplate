<script setup>
import "../aframe/teleport-camera-rig.js";
import "../aframe/clickable.js";

defineProps({
  label: { type: String, default: "" },
  x: { type: Number, default: 0 },
  y: { type: Number, default: 0 },
  z: { type: Number, default: 0 },
  rot: { type: [Number, Boolean], default: false },
});
</script>

<template>
  <a-entity
    gltf-model="#portal-entrence"
    scale="0.25 0.25 0.1"
    :teleport-camera-rig="`
      x: ${x};
      y: ${y};
      z: ${z};s
      handleRotation: ${rot === false ? 'false' : 'true'};
      rot: ${rot === false ? 0 : rot};
    `"
    ><a-entity
      id="portal"
      clickable
      geometry="primitive: plane; height: 9; width: 5;"
      position="0 4 0"
      life-like-automaton="resolution: 128;"
    ></a-entity>
  </a-entity>
  <!-- <a-entity
    geometry="primitive: torusKnot; p: 9; q:7 ; radius: 0.3; radiusTubular: 0.1; segmentsTubular: 64; segmentsRadial: 8"
    clickable
    scale="1 1 0.05"
    :teleport-camera-rig="`
      x: ${x};
      y: ${y};
      z: ${z};
      handleRotation: ${rot === false ? 'false' : 'true'};
      rot: ${rot === false ? 0 : rot};
    `"
  >
    <a-text
      align="center"
      :value="label"
      position="0 1.2 0"
    ></a-text>
  </a-entity> -->
</template>
