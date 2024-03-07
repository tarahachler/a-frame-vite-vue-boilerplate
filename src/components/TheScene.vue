<script setup>
import { ref } from "vue";
import TheCameraRig from "./TheCameraRig.vue";
import TheCalmRoom from "./TheCalmRoom.vue";
import TheWelcomeSpace from "./TheWelcomeSpace.vue";

defineProps({
  scale: Number,
  overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    fog="type: linear; color: #2f273c; near: 2; far: 700; density: 0.02"
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
        Title: Low Poly Light Bulb
        Model source: https://skfb.ly/6VnSG
        Model author: AleixoAlonso
        Model license: [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item
        id="light-bulb"
        src="assets/low_poly_light_bulb.glb"
      ></a-asset-item>
      <!--
        Title: Clouds
        Model source: https://sketchfab.com/3d-models/clouds-116f49c23c4347eba340d0f59b0601f7
        Model author: https://sketchfab.com/farhad.Guli (Farhad Guli)
        Model license: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item id="cloud" src="assets/clouds.glb"></a-asset-item>
      <!--
        Title: Sugar Teddy Bear
        Model source: https://sketchfab.com/3d-models/sugar-teddy-bear-8fbc11e8876d4ac7b22190c07e96726b
        Model author: https://sketchfab.com/Suvalien (Suvalien)
        Model license: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item
        id="teddy-bear"
        src="assets/sugar_teddy_bear.glb"
      ></a-asset-item>
      <!--
        Title: Low Poly Butterfly
        Model source: https://sketchfab.com/3d-models/low-poly-butterfly-c4e8e2501da143c09d378a7a25996801
        Model author: https://sketchfab.com/AlicePandaArt (AlicePandaArt)
        Model license: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item
        id="butterfly"
        src="assets/low-poly_butterfly.glb"
      ></a-asset-item>
      <!--
        Title: Side Table
        Model source: https://sketchfab.com/3d-models/side-table-a8a07aa0da264ecd8c445ab3b85d7a2e
        Model author: https://sketchfab.com/thethieme (Thethieme)
        Model license: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item id="calm-table" src="assets/side_table.glb"></a-asset-item>
      <!--
        Title: Small Paintbrush
        Model source: https://sketchfab.com/3d-models/small-paintbrush-917c46ab2a6e475d94bce25af58d7f39
        Model author: https://sketchfab.com/metalman9944 (SpaceScapes)
        Model license: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item
        id="paintbrush"
        src="assets/small_paintbrush.glb"
      ></a-asset-item>
      <!--
        Title: Right Hand
        Model source: https://sketchfab.com/3d-models/right-hand-9cffc8c92b854260a6c72d884709e56e
        Model author: https://sketchfab.com/jaymewithers (Jaymewithers)
        Model license: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item
        id="fake-right-hand"
        src="assets/right_hand.glb"
      ></a-asset-item>
      <!--
        Title: Portal Entrance
        Model source: https://sketchfab.com/3d-models/portal-entrence-456ac6eed303436e88064535ed60ce10
        Model author: https://sketchfab.com/alok.aks50 (Alok Aks50)
        Model license: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item
        id="portal-entrence"
        src="assets/portal_entrence.glb"
      ></a-asset-item>
      <!--
        Title: Low Poly Polaroid
        Model source: https://sketchfab.com/3d-models/low-poly-polaroid-2edd95718d694d1493c2538bc9de3b03
        Model author: https://sketchfab.com/brucemevans (Bruce Mevans)
        Model license: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item
        id="polaroid"
        src="assets/low_poly_polaroid.glb"
      ></a-asset-item>
      <!--
        Title: Ciel
        Model source: https://stock.adobe.com/fr/Library/urn:aaid:sc:EU:13c5f03d-dc2f-45dc-8770-cd14fd2d6933?asset_id=286726140
        Model author: Adobe Stock (licence éducation)
      -->
      <img id="sky" src="/assets/sky-5.jpeg" />
      <!--
        Title: Cans of Paint Varnish Lowpoly
        Model source: https://sketchfab.com/3d-models/cans-of-paint-varnish-lowpoly-30d6217c24064fbc9f07782a739c083d
        Model author: https://sketchfab.com/hoxsvl (Hoxsvl)
        Model license: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item
        id="cans"
        src="assets/cans_of_paint__varnish_lowpoly.glb"
      ></a-asset-item>
      <!--
        Title: Wooden Sign
        Model source: https://skfb.ly/6Vzo6
        Model author: Carlos
        Model license: [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item
        id="wooden-sign"
        src="assets/wooden_sign.glb"
      ></a-asset-item>
      <!--
        Title: Potted Plant Mediterranean Med Leaf Low Poly
        Model source: https://sketchfab.com/3d-models/potted-plant-mediterranean-med-leaf-low-poly-bc7f26baef2a45d18dbd9a5d6d2ec565
        Model author: https://sketchfab.com/dudecon (Dudecon)
        Model license: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item
        id="plant-1"
        src="assets/potted_plant_mediterranean_med_leaf_low_poly.glb"
      ></a-asset-item>
      <!--
        Title: Tokarz WK7 Rectangle Box
        Model source: https://sketchfab.com/3d-models/tokarz-wk7-rectangle-box-c6e1f8f8c1944e8eb0710fcf3de28dc0
        Model author: https://sketchfab.com/ktokarz (Ktokarz)
        Model license: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
      -->
      <a-asset-item id="button" src="assets/button.glb"></a-asset-item>
      <!--
        Title: Ocean Sea Soft Waves
        Source: https://pixabay.com/sound-effects/ocean-sea-soft-waves-121349/
        By SoundsForYou on Pixabay [License Summary](https://pixabay.com/users/soundsforyou-4861230/)
      -->
      <audio id="lake" src="assets/lake-sound.MP3" preload="auto"></audio>
      <!--       Utilisation de [murf.ai studio](https://murf.ai/studio) pour générer la voix, avec des effets supplémentaires sur CapCut
      -->
      <audio id="intro" src="assets/aev-intro.MP3" preload="auto"></audio>
      <!--
        Title: Drifting at 432 Hz
        Source: [Unicorn Heads](https://www.youtube.com/channel/UCbdU8d-QYGeEseYLlrSy8KQ) (bibliothèque audio libre de droit)
      -->
      <audio id="music" src="assets/music.MP3" preload="auto"></audio>
      <!--
        Title: Wood Door Knock
        Source: https://pixabay.com/sound-effects/wood-door-knock-106669/
        By Pixabay [License Summary](https://pixabay.com/service/license-summary/)
      -->
      <audio
        id="brush-down-table"
        src="assets/brush-down.MP3"
        preload="auto"
      ></audio>
      <!--
        Title: Whoosh Blow Flutter Shortwav
        Source: https://pixabay.com/sound-effects/whoosh-blow-flutter-shortwav-14678/
        By Pixabay [License Summary](https://pixabay.com/service/license-summary/)
      -->
      <audio
        id="brush-up-hand"
        src="assets/brush-up.MP3"
        preload="auto"
      ></audio>
      <!--
        Title: Pick
        Source: https://pixabay.com/sound-effects/pick-92276/
        By Pixabay [License Summary](https://pixabay.com/service/license-summary/)
      -->
      <audio id="color-pick" src="assets/color-pick.MP3" preload="auto"></audio>
      <!--
        Title: Cinematic Whoosh Reverse
        Source: https://pixabay.com/sound-effects/cinematic-whoosh-reverse-161307/
        By LordSonny on Pixabay [License Summary](https://pixabay.com/users/lordsonny-38439655/)
      -->
      <audio id="teleport" src="assets/teleport.MP3" preload="auto"></audio>
      <!--
        Title: Camera Shutter
        Source: https://pixabay.com/sound-effects/camera-shutter-36931/
        By Pixabay [License Summary](https://pixabay.com/service/license-summary/)
      -->
      <audio
        id="picture-sound"
        src="assets/picture-sound.mp3"
        preload="auto"
      ></audio>
      <!--
        Title: Paint Brush
        Source: https://pixabay.com/sound-effects/paint-brush-08-97963/
        By Pixabay [License Summary](https://pixabay.com/service/license-summary/)
      -->
      <audio
        id="brush-sound"
        src="assets/paint-brush.mp3"
        preload="auto"
      ></audio>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheWelcomeSpace />
      <TheCalmRoom />
      <a-sky src="#sky"></a-sky>
    </template>
    <TheCameraRig />
  </a-scene>
</template>
