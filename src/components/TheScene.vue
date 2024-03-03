<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheCalmRoom from "./TheCalmRoom.vue";
//import TheRageRoom from "./TheRageRoom.vue";
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
    zstats
    fog="type: linear; color: #2f273c; near: 2; far: 700; density: 0.02"
    zrfog="type: linear; color: #D2E8E3: density: 0.00025;"
    zfog="type: exponential; color: #D2E8E3; near: 3; far: 50; density: 0.00035;"
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
    "  >
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
      <a-asset-item id="calm-table" src="assets/side_table.glb"></a-asset-item>
      <a-asset-item
        id="paintbrush"
        src="assets/small_paintbrush.glb"
      ></a-asset-item>
      <a-asset-item
        id="fake-right-hand"
        src="assets/right_hand.glb"
      ></a-asset-item>
      <a-asset-item
        id="portal-entrence"
        src="assets/portal_entrence.glb"
      ></a-asset-item>
      <a-asset-item
        id="polaroid"
        src="assets/low_poly_polaroid.glb"
      ></a-asset-item>
      <img
      id="sky" src="/assets/sky-5.jpeg"/>
      <a-asset-item
        id="cans"
        src="assets/cans_of_paint__varnish_lowpoly.glb"
      ></a-asset-item>
      <audio id="lake" src="assets/lake-sound.MP3" preload="auto"></audio>
      <audio id="intro" src="assets/aev-intro.MP3" preload="auto"></audio>
      <audio id="music" src="assets/music.mp3" preload="auto"></audio>
      <audio id="brush-down-table" src="assets/brush-down.MP3" preload="auto"></audio>
      <audio id="brush-up-hand" src="assets/brush-up.MP3" preload="auto"></audio>
      <audio id="color-pick" src="assets/color-pick.MP3" preload="auto"></audio>
      <audio id="teleport" src="assets/teleport.MP3" preload="auto"></audio>
      <audio id="picture-sound" src="assets/picture-sound.mp3" preload="auto"></audio>
      <audio id="brush-sound" src="assets/paint-brush.mp3" preload="auto"></audio>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheWelcomeSpace />
      <TheCalmRoom />
      <a-sky src="#sky"></a-sky>
    </template>
    <TheCameraRig />
  </a-scene>
</template>
