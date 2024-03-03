<script setup>
import "../aframe/listen-to.js";
import "../aframe/emit-when-near.js";
import "../aframe/point-in-box.js";

/* function sendColor(evt) {
  const el = evt.target;
  console.log("sendColor");
  const colorString = el.getAttribute("color");
  const colorEvent = new CustomEvent("color-picked", { detail: colorString });
  document.dispatchEvent(colorEvent);
} */

const el = document.querySelector("a-scene");

//TODO : vérifier que c'est true en VR
const vr = el.sceneEl.is("vr-mode");

</script>
<template>
  <a-box
  id="palette"
    position="0.5 1.4 1.8"
    rotation="0 -45 0"
    width="0.3"
    height="0.5"
    depth="0.01"
    color="beige"
    roughness="0.75"
    material="opacity: 0.1"
    sound="src: #color-pick; autoplay: false;"
  >
    <a-cylinder
      position="0.1 0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="#ff0000"
    >
      <a-box
        id="palette-picker-red"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"        
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#ff0000"
      ></a-box>
    </a-cylinder>
    <a-cylinder
      position="0 0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="blue"
    >
    <a-box
        id="palette-picker-blue"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"        
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#0000ff"
      ></a-box>
    </a-cylinder>
    <a-cylinder
      position="-0.1 0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="green"
    >
    <a-box
        id="palette-picker-green"
        height="0.1"
        width="0.1"
        depth="0.1"
        visible="false"        
        point-in-box="target: #paintbrush-color;"
        data-palette-color="#00ff00"
      ></a-box></a-cylinder>
    <a-cylinder
      position="0.1 0 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="black"
    ></a-cylinder>
    <a-cylinder
      position="0 0 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="purple"
    ></a-cylinder>
    <a-cylinder
      position="-0.1 0 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="orange"
    ></a-cylinder>
  </a-box>
</template>
