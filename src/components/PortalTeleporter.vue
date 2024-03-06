<script setup>
import "../aframe/teleport-camera-rig.js";
import "../aframe/clickable.js";
import "../aframe/sakura-circle.js";

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
      sakura-circle="resolution: 100"
    ></a-entity>
  </a-entity>
</template>
