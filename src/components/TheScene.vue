<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheCalmRoom from "./TheCalmRoom.vue";
import TheRageRoom from "./TheRageRoom.vue";
import TheWelcomeSpace from "./TheWelcomeSpace.vue";
import "../aframe/brush.js";

import "../aframe/shader-custom.js";

defineProps({
  scale: Number,
  overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    background="color: #D2E8E3;"
    fog="type: linear; color: #D2E8E3; near: 3; far: 20; density: 0.5"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
    xr-mode-ui="XRMode: xr"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
  >
    <a-assets @loaded="allAssetsLoaded = true">
      <!--
        Title: VR Gallery
        Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
        Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="room" src="assets/vr_gallery.glb"></a-asset-item>
      <!--
        Title: 3D Gallery for VR projects
        Model source: https://sketchfab.com/3d-models/3d-gallery-for-vr-projects-68f77ed8558c4bd59e0a13e2cc9d1fd1
        Model author: https://sketchfab.com/tekuto1s (tekuto1s)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item
        id="wooden-floor"
        src="assets/weighted_wood_platform.glb"
      ></a-asset-item>
      <a-asset-item
        id="light-bulb"
        src="assets/low_poly_light_bulb.glb"
      ></a-asset-item>
      <a-asset-item id="cloud" src="assets/clouds.glb"></a-asset-item>
      <a-asset-item
        id="teddy-bear"
        src="assets/sugar_teddy_bear.glb"
      ></a-asset-item>
      <a-asset-item
        id="butterfly"
        src="assets/low-poly_butterfly.glb"
      ></a-asset-item>
      <a-asset-item
        id="calm-table"
        src="assets/side_table.glb"
      ></a-asset-item>
      <a-asset-item
        id="paintbrush"
        src="assets/small_paintbrush.glb"
      ></a-asset-item>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheWelcomeSpace />
      <TheRageRoom />
      <TheCalmRoom />
      <!-- <a-entity
        light="color: #FFFFFF; intensity: 0.5"
        position="-1 1 0"
        scale="0.0005 0.0005 0.0005"
      ></a-entity> -->
    </template>
    <TheCameraRig />
  </a-scene>
</template>
