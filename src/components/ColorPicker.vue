<script setup>
import "../aframe/listen-to.js";
import "../aframe/emit-when-near.js";
import "../aframe/point-in-box.js";
</script>
<template>
  <a-box
    id="palette"
    position="0.55 1.4 2.2"
    rotation="0 -45 0"
    width="0.3"
    height="0.5"
    depth="0.01"
    color="beige"
    roughness="0.75"
    material="opacity: 0.1"
    sound="src: #color-pick; autoplay: false;"
  >
    <a-entity
      id="color-picker-light"
      light="type: point; color: beige; intensity: 0.4;"
      position="-0.006 0.018 -0.171"
    ></a-entity>
    <a-cylinder
      position="0.1 0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="#ef59e1"
    >
      <a-box
        id="palette-picker-rose"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#ef59e1"
      ></a-box>
    </a-cylinder>
    <a-cylinder
      position="0 0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="#903fef"
    >
      <a-box
        id="palette-picker-purple"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#903fef"
      ></a-box>
    </a-cylinder>
    <a-cylinder
      position="-0.1 0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="#3399e5"
    >
      <a-box
        id="palette-picker-blue"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#3399e5"
      ></a-box
    ></a-cylinder>
    <a-cylinder
      position="0.1 0 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="#6fd35e"
    >
      <a-box
        id="palette-picker-green"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#6fd35e"
      ></a-box
    ></a-cylinder>
    <a-cylinder
      position="0 0 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="#eadb57"
    >
      <a-box
        id="palette-picker-yellow"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#eadb57"
      ></a-box
    ></a-cylinder>
    <a-cylinder
      position="-0.1 0 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="#e88846"
    >
      <a-box
        id="palette-picker-orange"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#e88846"
      ></a-box
    ></a-cylinder>
    <a-cylinder
      position="0.1 -0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="#000000"
    >
      <a-box
        id="palette-picker-black"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#000000"
      ></a-box>
    </a-cylinder>
    <a-cylinder
      position="0 -0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="#7a7a7a"
    >
      <a-box
        id="palette-picker-grey"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#7a7a7a"
      ></a-box>
    </a-cylinder>
    <a-cylinder
      position="-0.1 -0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="#ffffff"
    >
      <a-box
        id="palette-picker-white"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#ffffff"
      ></a-box
    ></a-cylinder>
  </a-box>
</template>
