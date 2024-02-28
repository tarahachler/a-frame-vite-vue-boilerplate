<script setup>
import { ref } from "vue";
import { randomHsl } from "../utils/color.js";
import BoxColorChanging from "./BoxColorChanging.vue";
import PortalTeleporter from "./PortalTeleporter.vue";
import { copyPosition, copyRotation } from '../utils/aframe.js';

import ColorPicker from "./ColorPicker.vue";
import "../aframe/life-like-automaton.js";
import "../aframe/pavage.js";
import "../aframe/bind-position.js";
import "../aframe/bind-rotation.js";
/* import "../aframe/grabable.js";
import "../aframe/ungrabable.js"; */
import "../aframe/listen-to.js";
import "../aframe/emit-when-near.js";

function grabTheThing(evt) {
    // if something already grabbed, switch it
    const el = evt.target;
    const grabbedEl = document.querySelector('[data-grabbed]');
    if (grabbedEl) {
      grabbedEl.removeAttribute('bind-position');
      grabbedEl.removeAttribute('bind-rotation');
      copyPosition(el, grabbedEl);
      copyRotation(el, grabbedEl);
      delete grabbedEl.dataset.grabbed;
      delete grabbedEl.dataset.dropped;
      if (el.dataset.dropped) {
        grabbedEl.dataset.dropped = el.dataset.dropped;
      }
    }

    if (el.sceneEl.is('vr-mode')) {
      el.setAttribute('bind-position', 'target: #hand-right');
      el.setAttribute('bind-rotation', 'target: #hand-right');
    } else {
      el.setAttribute('bind-position', 'target: #desktop-hand-right');
      el.setAttribute('bind-rotation', 'target: #desktop-hand-right; convertToLocal: true');
    }
    el.dataset.grabbed = true;
    delete el.dataset.dropped;
  }

  function dropTheThing(evt) {
    const grabbedEl = document.querySelector('[data-grabbed]');
    // if nothing grabbed, return
    if (!grabbedEl) return;

    //drop it
    grabbedEl.removeAttribute('bind-position');
    grabbedEl.removeAttribute('bind-rotation');
    copyPosition(evt.target, grabbedEl);
    copyRotation(evt.target, grabbedEl);
    delete grabbedEl.dataset.grabbed;

    const dropZoneId = evt.target.id;
    // if something was in the drop zone, grab it
    const elInDropZone = document.querySelector(`[data-dropped="${dropZoneId}"]`);
    if (elInDropZone) {
      grabTheThing({ target: elInDropZone });
    };

    grabbedEl.dataset.dropped = dropZoneId;
  }
</script>

<template>
  <a-entity pavage="tileSize: 0.5; offset:0.0001 " position="0 199.9 0">
    <PortalTeleporter
      label="Sortie"
      life-like-automaton="resolution: 256;"
      position="0 1.5 0"
      rotation="0 45 0"
      :rot="0"
      :y="0"
    />
    <a-entity
      id="paintbrush"
      gltf-model="#paintbrush"
      rotation="0 45 -90"
      position="0 1.005 1.5"
      scale="0.02 0.02 0.02"
      emit-when-near__1="distance: 1; target: .hand; event: click"
      emit-when-near__2="distance: 0.4; event: click; target: #palette-red"
      @click="evt => grabTheThing(evt)"
    ></a-entity>
    <a-entity
      id="table"
      gltf-model="#calm-table"
      rotation="0 -225 0"
      position="0.3 0.2 1.7"
      emit-when-near="distance: 1; target: .hand; event: click"
    ></a-entity>
    <a-entity
      id="drop-zone-table"
      rotation="0 45 -90"
      position="0 1.005 1.5"
      listen-to="target: #table;"
      @click="evt => dropTheThing(evt)"
    ></a-entity>
    <ColorPicker/> 
    <a-entity gltf-model="#light-bulb" position="3 2 3">
      <a-entity
        light="type: point; color: red; intensity: 0.3"
        position="0 0 0"
      ></a-entity>
    </a-entity>
    <a-entity gltf-model="#light-bulb" position="1 2.5 2.5">
      <a-entity
        light="type: point; color: blue; intensity: 0.3"
        position="0 0 0"
      ></a-entity>
    </a-entity>
    <a-entity gltf-model="#light-bulb" position="2 2.3 2">
      <a-entity
        light="type: point; color: beige; intensity: 1;"
        position="0 0.2 0"
      ></a-entity>
    </a-entity>
    <a-entity
      gltf-model="#cloud"
      position="0 2 3"
      scale="0.002 0.002 0.002"
    ></a-entity>
    <a-entity
      gltf-model="#cloud"
      position="1 2.8 4"
      scale="0.002 0.002 0.002"
    ></a-entity>
    <a-entity
      gltf-model="#cloud"
      position="-1 2.2 2"
      scale="0.002 0.002 0.002"
    ></a-entity>
    <a-entity
      gltf-model="#cloud"
      position="4 2.5 1"
      scale="0.002 0.002 0.002"
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
      animation__up="property: position; to: 3 1.8 2; dur: 1100; easing: easeInOutSine; startEvents: animationcomplete__down"
      animation__down="property: position; to: 3 1.9 2; dur: 1100; easing: easeInOutSine; startEvents: animationcomplete__up"
      gltf-model="#butterfly"
      position="3 1.8 2"
      rotation="50 90 0"
      scale="0.01 0.01 0.01"
      emit-when-near="distance: 5; event: animationcomplete__down"
    ></a-entity>
    <a-ocean
      position="0 -0.5 0"
      width="100"
      depth="100"
      density="10"
      speed="1"
      amplitude="0.2"
      color="#a6bcff"
    ></a-ocean>
    <a-ocean
      position="0 -0.5 0"
      width="100"
      depth="100"
      density="7"
      speed="0.2"
      amplitude="0.2"
      color="#c2c2ff"
    ></a-ocean>
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
