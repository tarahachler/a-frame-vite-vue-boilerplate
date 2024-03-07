<script setup>
import { ref, onMounted } from "vue";
import { randomHsl } from "../utils/color.js";
import PortalTeleporter from "./PortalTeleporter.vue";
import { copyPosition, copyRotation } from "../utils/aframe.js";

import ColorPicker from "./ColorPicker.vue";
import "../aframe/pavage.js";
import "../aframe/bind-position.js";
import "../aframe/bind-rotation.js";
import "../aframe/listen-to.js";
import "../aframe/emit-when-near.js";
import "../aframe/color-switch.js";
import "../aframe/disable-in-vr.js";

function grabTheThing(evt) {
  // if something already grabbed, switch it
  const el = evt.target;
  const grabbedEl = document.querySelector("[data-grabbed]");
  if (grabbedEl) {
    grabbedEl.removeAttribute("bind-position");
    grabbedEl.removeAttribute("bind-rotation");
    copyPosition(el, grabbedEl);
    copyRotation(el, grabbedEl);
    delete grabbedEl.dataset.grabbed;
    delete grabbedEl.dataset.dropped;
    if (el.dataset.dropped) {
      grabbedEl.dataset.dropped = el.dataset.dropped;
    }
  }
    //if vr, grab the thing
  if (document.querySelector("a-scene").is("vr-mode")) {
    el.setAttribute("bind-position", "target: #hand-right");
    el.setAttribute("bind-rotation", "target: #hand-right");
  } else {
    el.setAttribute("bind-position", "target: #desktop-hand-right");
    el.setAttribute("bind-rotation", "target: #desktop-hand-right");
  }
  el.components.sound.playSound();

  el.dataset.grabbed = true;
  delete el.dataset.dropped;
}

function dropTheThing(evt) {
  const grabbedEl = document.querySelector("[data-grabbed]");
  // if nothing grabbed, return
  if (!grabbedEl) return;

  //drop it
  grabbedEl.removeAttribute("bind-position");
  grabbedEl.removeAttribute("bind-rotation");
  copyPosition(evt.target, grabbedEl);
  copyRotation(evt.target, grabbedEl);
  delete grabbedEl.dataset.grabbed;

  const dropZoneId = evt.target.id;
  // if something was in the drop zone, grab it
  const elInDropZone = document.querySelector(`[data-dropped="${dropZoneId}"]`);
  if (elInDropZone) {
    grabTheThing({ target: elInDropZone });
  }

  grabbedEl.dataset.dropped = dropZoneId;
  evt.target.components.sound.playSound();
}

function takePicture(evt) {
  const polaroid = document.querySelector("#polaroid");
  const picture = document
    .querySelector("a-scene")
    .components.screenshot.capture("perspective");
  evt.target.components.sound.playSound();
}
</script>

<template>
  <a-entity pavage="tileSize: 0.6; offset:0.0001 " position="0 99.9 0">
    <PortalTeleporter
      position="0 0 0"
      rotation="0 45 0"
      :rot="220"
      :y="0"
      :x="-0.7"
      :z="-2.4"
      listen-to="target: #portal"
      sound="src: #teleport; on: click; volume: 2"
    />
    <a-entity
      id="polaroid"
      gltf-model="#polaroid"
      rotation="0 20 0"
      position="0.8 1.7 -0.2"
      scale="0.3 0.3 0.3"
      clickable
      @click="(evt) => takePicture(evt)"
      material="fog: false"
      sound="src: #picture-sound; autoplay: false; volume: 1.5;"
    ></a-entity>

    <a-entity
      rotation="0 40 -90"
      position="0.3 1.005 2.05"
      emit-when-near__vr="distance: 0.5; target: #hand-right; event: click"
      emit-when-near__desktop="distance: 0.5; target: #desktop-hand-right; event: click"
      @click="(evt) => grabTheThing(evt)"
      sound="src: #brush-up-hand; autoplay: false; volume: 1.5;"
    >
      <a-entity
        id="paintbrush"
        gltf-model="#paintbrush"
        position="-0.02 -0.1 0"
        rotation="-45 0 0"
        scale="0.02 0.02 0.02"
      >
        <a-sphere
          id="paintbrush-color"
          scale="0.2 0.2 0.2"
          position="0.3 0.75 0"
          color-switch
          visible="false"
          sound="src: #brush-sound; autoplay: false;"
        ></a-sphere>
      </a-entity>
    </a-entity>

    <a-entity
      id="table"
      gltf-model="#calm-table"
      rotation="0 -225 0"
      position="0.3 0.2 2.1"
    >
      <a-box
        id="table-detect-zone"
        position="0.2 0.85 0"
        scale="0.3 0.1 0.5"
        visible="false"
        emit-when-near__vr="distance: 0.25; target: #hand-right; event: click"
        emit-when-near__desktop="distance: 1.15; target: #desktop-hand-right; event: click"
      >
      </a-box>
    </a-entity>
    <a-entity
      id="drop-zone-table"
      rotation="0 40 -90"
      position="0.3 1.005 2.05"
      listen-to="target: #table-detect-zone;"
      @click="(evt) => dropTheThing(evt)"
      sound="src: #brush-down-table; autoplay: false;"
    ></a-entity>
    <ColorPicker />
    <a-entity
      gltf-model="#cans"
      rotation="0 45 0"
      position="-0.05 1 1.8"
    ></a-entity>
    <a-entity gltf-model="#light-bulb" position="2.3 2 3.6">
      <a-entity
        light="type: point; color: #ef59e1; intensity: 0.1; groudColor: #ef59e1"
        position="0 0 0"
      ></a-entity>
    </a-entity>
    <a-entity gltf-model="#light-bulb" position="1 2.5 2.5">
      <a-entity
        light="type: point; color: #e88846; intensity: 0.2; groudColor: #e88846"
        position="0 0 0"
      ></a-entity>
    </a-entity>
    <a-entity gltf-model="#light-bulb" position="2 2.3 2">
      <a-entity
        light="type: point; color: #3399e5; intensity: 0.2; groudColor: #3399e5"
        position="0 0.2 0"
      ></a-entity>
    </a-entity>
    <a-entity
      id="main-light"
      light="color: beige; intensity: 0.3;"
      position="2.3 2 3.5"
    ></a-entity>
    <a-entity
      animation__up="property: position; to: 0 2 2.98; dur: 2000; easing: easeInOutSine; startEvents: animationcomplete__down"
      animation__down="property: position; to: 0 2 2.9; dur: 2000; easing: easeInOutSine; startEvents: animationcomplete__up"
      gltf-model="#cloud"
      position="0 2 2.9"
      scale="0.002 0.002 0.002"
      emit-when-near="distance: 5; event: animationcomplete__down"
    ></a-entity>
    <a-entity
      animation__up="property: position; to: 1.5 2.7 -0.375; dur: 1800; easing: easeInOutSine; startEvents: animationcomplete__down"
      animation__down="property: position; to: 1.5 2.6 -0.375; dur: 2000; easing: easeInOutSine; startEvents: animationcomplete__up"
      gltf-model="#cloud"
      position="1.5 2.6 -0.375"
      scale="0.002 0.002 0.002"
      emit-when-near="distance: 5; event: animationcomplete__down"
    ></a-entity>
    <a-entity
      animation__up="property: position; to: 1.46 3.3 4.16; dur: 2100; easing: easeInOutSine; startEvents: animationcomplete__down"
      animation__down="property: position; to: 1.46 3.2 4.16; dur: 2100; easing: easeInOutSine; startEvents: animationcomplete__up"
      gltf-model="#cloud"
      position="1.46 3.2 4.16"
      scale="0.002 0.002 0.002"
      emit-when-near="distance: 5; event: animationcomplete__down"
    ></a-entity>
    <a-entity
      animation__up="property: position; to: 1 2.92 4; dur: 2000; easing: easeInOutSine; startEvents: animationcomplete__down"
      animation__down="property: position; to: 1 2.8 4; dur: 2000; easing: easeInOutSine; startEvents: animationcomplete__up"
      gltf-model="#cloud"
      position="1 2.8 4"
      scale="0.002 0.002 0.002"
      emit-when-near="distance: 5; event: animationcomplete__down"
    ></a-entity>
    <a-entity
      animation__up="property: position; to: -1 2.5 2; dur: 2000; easing: easeInOutSine; startEvents: animationcomplete__down"
      animation__down="property: position; to: -1 2.4 2; dur: 2000; easing: easeInOutSine; startEvents: animationcomplete__up"
      gltf-model="#cloud"
      position="-1 2.4 2"
      scale="0.002 0.002 0.002"
      emit-when-near="distance: 5; event: animationcomplete__down"
    ></a-entity>
    <a-entity
      animation__up="property: position; to: 3.2 1.89 2.62; dur: 1900; easing: easeInOutSine; startEvents: animationcomplete__down"
      animation__down="property: position; to: 3.2 1.8 2.6; dur: 2000; easing: easeInOutSine; startEvents: animationcomplete__up"
      gltf-model="#cloud"
      position="3.2 1.8 2.6"
      scale="0.002 0.002 0.002"
      emit-when-near="distance: 5; event: animationcomplete__down"
    ></a-entity>
    <a-entity
      animation__up="property: position; to: 3.3 2.8 1; dur: 2000; easing: easeInOutSine; startEvents: animationcomplete__down"
      animation__down="property: position; to: 3.3 2.7 1; dur: 2000; easing: easeInOutSine; startEvents: animationcomplete__up"
      gltf-model="#cloud"
      position="3.3 2.7 1"
      scale="0.002 0.002 0.002"
      emit-when-near="distance: 5; event: animationcomplete__down"
    ></a-entity>
    <a-entity
      animation__up="property: position; to: 1 2.1 3; dur: 1000; easing: easeInOutSine; startEvents: animationcomplete__down"
      animation__down="property: position; to: 1 2 3; dur: 1000; easing: easeInOutSine; startEvents: animationcomplete__up"
      gltf-model="#butterfly"
      position="1 2 3"
      rotation="60 -45 0"
      scale="0.01 0.01 0.01"
      emit-when-near="distance: 5; event: animationcomplete__down"
    ></a-entity>
    <a-entity
      animation__up="property: position; to: 2 2.4 1; dur: 1200; easing: easeInOutSine; startEvents: animationcomplete__down"
      animation__down="property: position; to: 2 2.3 1; dur: 1200; easing: easeInOutSine; startEvents: animationcomplete__up"
      gltf-model="#butterfly"
      position="2 2.3 1"
      rotation="70 80 0"
      scale="0.01 0.01 0.01"
      emit-when-near="distance: 5; event: animationcomplete__down"
    ></a-entity>
    <a-entity
      animation__up="property: position; to: 2.8 1.7 1.8; dur: 1100; easing: easeInOutSine; startEvents: animationcomplete__down"
      animation__down="property: position; to: 2.8 1.6 1.8; dur: 1100; easing: easeInOutSine; startEvents: animationcomplete__up"
      gltf-model="#butterfly"
      position="2.8 1.6 1.8"
      rotation="50 90 0"
      scale="0.01 0.01 0.01"
      emit-when-near="distance: 5; event: animationcomplete__down"
    ></a-entity>
    <a-ocean
      position="0 -0.5 0"
      width="50"
      depth="50"
      density="10"
      speed="1"
      amplitude="0.2"
      color="#a6bcff"
    ></a-ocean>
    <a-ocean
      position="0 -0.5 0"
      width="50"
      depth="50"
      density="7"
      speed="0.2"
      amplitude="0.2"
      color="#c2c2ff"
    ></a-ocean>
    <a-entity
      sound="src: #lake; autoplay: true; loop: true; volume:0.5"
    ></a-entity>
    <a-entity
      sound="src: #music; autoplay: true; loop: true; volume:0.3"
    ></a-entity>
  </a-entity>
</template>
