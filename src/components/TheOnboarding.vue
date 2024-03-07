<script setup>
import { ref } from "vue";

defineProps({
  loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
  showOnboarding.value = false;
  if (
    AFRAME.utils.device.checkHeadsetConnected() &&
    !AFRAME.utils.device.isMobile()
  ) {
    document.querySelector("a-scene").enterVR();
  }
}
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>L'atelier d'expression virtuel</h1>
      <p v-if="!loaded">chargement...</p>
      <button v-if="loaded" @click="enterScene()">Entrer</button>
      <div class="licences">
        <section>
          <h4>Modes de déplacement</h4>
          <ul>
            <li>
              Bureau - Utilisation du clavier pour se déplacer (touches WASD ou
              flèches) + Utilisation de la souris pour orienter la vue
              (glisser-déposer) + Touche espace pour peindre
            </li>
            <li>
              Casque VR - Marche en RA/VR + Téléportation (laser pour cliquer) +
              Bouton arrière pour cliquer + Bouton de coté pour peindre (main
              droite)
            </li>
          </ul>
        </section>
        <section>
          <h4>Peinture</h4>
          <ul>
            <li>
              Bureau - Se rapprocher de la table pour récupérer le pinceau dans
              la main + Mettre le pinceau dans une couleur + Touche espace pour
              peindre/arrêter de peindre
            </li>
            <li>
              Casque VR - Rapprocher la main droite du pinceau pour le récupérer
              + Mettre le pinceau dans une couleur + Bouton latéral pour peindre
            </li>
          </ul>
        </section>
        <section>
          <h4>Photo</h4>
          <ul>
            Se mettre face au point de vue souhaité + Click sur l'appareil photo
            à côté de la sortie
          </ul>
        </section>
        <dl>
          <dl>
            <dt>
              <i>Inclu</i>
            </dt>
            <dt>
              <a href="https://github.com/c-frame/aframe-extras" target="_blank"
                >aframe-extras controls, ocean and animation-mixer</a
              >
            </dt>
            <dd>
              <a
                href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE"
                target="_blank"
                >Licence MIT</a
              >
            </dd>

            <dt>
              <a href="https://github.com/c-frame/physx" target="_blank"
                >aframe physx</a
              >
            </dt>
            <dd>
              <a
                href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE"
                target="_blank"
                >Licence MIT</a
              >
            </dd>

            <dt>
              <a
                href="https://github.com/jure/aframe-blink-controls/"
                target="_blank"
                >aframe-blink-controls</a
              >
            </dt>
            <dd>
              <a
                href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE"
                target="_blank"
                >Licence MIT</a
              >
            </dd>

            <dt>
              <a
                href="https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
                target="_blank"
                >simple-navmesh-constraint</a
              >
            </dt>
            <dd>par Ada Rose Cannon sous Licence MIT</dd>

            <dt>
              <a
                href="https://sketchfab.com/3d-models/low-poly-polaroid-2edd95718d694d1493c2538bc9de3b03"
                target="_blank"
                >Low Poly Polaroid</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/brucemevans" target="_blank"
                >Bruce Mevans</a
              >
            </dd>

            <dt>
              <a
                href="https://sketchfab.com/3d-models/tokarz-wk7-rectangle-box-c6e1f8f8c1944e8eb0710fcf3de28dc0"
                target="_blank"
                >Tokarz WK7 Rectangle Box</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/ktokarz" target="_blank"
                >Ktokarz</a
              >
            </dd>

            <dt>
              <a
                href="https://sketchfab.com/3d-models/potted-plant-mediterranean-med-leaf-low-poly-bc7f26baef2a45d18dbd9a5d6d2ec565"
                target="_blank"
                >Potted Plant Mediterranean Med Leaf Low Poly</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/dudecon" target="_blank"
                >Dudecon</a
              >
            </dd>

            <dt>
              <a
                href="https://sketchfab.com/3d-models/cans-of-paint-varnish-lowpoly-30d6217c24064fbc9f07782a739c083d"
                target="_blank"
                >Cans of Paint Varnish Lowpoly</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/hoxsvl" target="_blank">Hoxsvl</a>
            </dd>

            <dt>
              <a
                href="https://sketchfab.com/3d-models/portal-entrence-456ac6eed303436e88064535ed60ce10"
                target="_blank"
                >Portal Entrance</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/alok.aks50" target="_blank"
                >Alok Aks50</a
              >
            </dd>
            <dt>
              <a href="https://skfb.ly/6Vzo6" target="_blank">Wooden Sign</a>
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/Carlos" target="_blank">Carlos</a>
            </dd>

            <dt>
              <a href="https://skfb.ly/6VnSG" target="_blank"
                >Low Poly Light Bulb</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/AleixoAlonso" target="_blank"
                >AleixoAlonso</a
              >
            </dd>
            <dt>
              <a
                href="https://sketchfab.com/3d-models/right-hand-9cffc8c92b854260a6c72d884709e56e"
                target="_blank"
                >Right Hand</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/jaymewithers" target="_blank"
                >Jaymewithers</a
              >
            </dd>

            <dt>
              <a
                href="https://sketchfab.com/3d-models/small-paintbrush-917c46ab2a6e475d94bce25af58d7f39"
                target="_blank"
                >Small Paintbrush</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/metalman9944" target="_blank"
                >SpaceScapes</a
              >
            </dd>

            <dt>
              <a
                href="https://sketchfab.com/3d-models/side-table-a8a07aa0da264ecd8c445ab3b85d7a2e"
                target="_blank"
                >Side Table</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/thethieme" target="_blank"
                >Thethieme</a
              >
            </dd>

            <dt>
              <a
                href="https://sketchfab.com/3d-models/low-poly-butterfly-c4e8e2501da143c09d378a7a25996801"
                target="_blank"
                >Low Poly Butterfly</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/AlicePandaArt" target="_blank"
                >AlicePandaArt</a
              >
            </dd>

            <dt>
              <a
                href="https://sketchfab.com/3d-models/sugar-teddy-bear-8fbc11e8876d4ac7b22190c07e96726b"
                target="_blank"
                >Sugar Teddy Bear</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/Suvalien" target="_blank"
                >Suvalien</a
              >
            </dd>

            <dt>
              <a
                href="https://sketchfab.com/3d-models/clouds-116f49c23c4347eba340d0f59b0601f7"
                target="_blank"
                >Clouds</a
              >
            </dt>
            <dd>
              par
              <a href="https://sketchfab.com/farhad.Guli" target="_blank"
                >Farhad Guli</a
              >
            </dd>
            <dt>
              <a
                href="https://www.iconfinder.com/icons/7968870/paintbrush_adobe_illustrator_tool_painting_icon"
                target="_blank"
                >Favicon: Paintbrush Adobe Illustrator Tool Painting Icon</a
              >
            </dt>
            <dd>
              par
              <a href="https://www.iconfinder.com/rickvanhouten" target="_blank"
                >Rickvanhouten</a
              >
            </dd>

            <dt>Ciel</dt>
            <dd>
              <a
                href="https://stock.adobe.com/fr/Library/urn:aaid:sc:EU:13c5f03d-dc2f-45dc-8770-cd14fd2d6933?asset_id=286726140"
                target="_blank"
                >Adobe Stock (licence éducation)</a
              >
            </dd>

            <dt>
              bind-position, bind-rotation, clickable, disable-in-vr,
              emit-when-near, hide-in-vr, listen-to, sakura-circle, teleport,
              CameraRig, et Onboarding
            </dt>
            <dd>
              par
              <a
                href="https://github.com/Chabloz/a-frame-vite-vue-boilerplate/tree/main"
                target="_blank"
                >Chabloz</a
              >
            </dd>

            <dt>Audio</dt>
            <dd>
              <strong>Introduction:</strong> Utilisation de
              <a href="https://murf.ai/studio" target="_blank"
                >murf.ai studio</a
              >
              pour générer la voix, avec des effets supplémentaires sur
              CapCut<br />
              <strong>Musique:</strong> "Drifting at 432 Hz" par
              <a
                href="https://www.youtube.com/channel/UCbdU8d-QYGeEseYLlrSy8KQ"
                target="_blank"
                >Unicorn Heads</a
              >
              (bibliothèque audio libre de droit)<br />
              <strong>Appareil photo: </strong>
              <a
                href="https://pixabay.com/sound-effects/camera-shutter-36931/"
                target="_blank"
                >Camera Shutter</a
              >
              par Pixabay
              <a
                href="https://pixabay.com/service/license-summary/"
                target="_blank"
                >(Licence)</a
              ><br />
              <strong>Peinture sur palette: </strong>
              <a
                href="https://pixabay.com/sound-effects/pick-92276/"
                target="_blank"
                >Pick (modifié sur CapCut)</a
              >
              par Pixabay
              <a
                href="https://pixabay.com/service/license-summary/"
                target="_blank"
                >(Licence)</a
              ><br />
              <strong>Prendre le pinceau: </strong>
              <a
                href="https://pixabay.com/sound-effects/whoosh-blow-flutter-shortwav-14678/"
                target="_blank"
                >Whoosh Blow Flutter Shortwav</a
              >
              par Pixabay
              <a
                href="https://pixabay.com/service/license-summary/"
                target="_blank"
                >(Licence)</a
              ><br />
              <strong>Poser le pinceau: </strong>
              <a
                href="https://pixabay.com/sound-effects/wood-door-knock-106669/"
                target="_blank"
                >Wood Door Knock (modifié sur CapCut)</a
              >
              par Pixabay
              <a
                href="https://pixabay.com/service/license-summary/"
                target="_blank"
                >(Licence)</a
              ><br />
              <strong>Peindre: </strong>
              <a
                href="https://pixabay.com/sound-effects/paint-brush-08-97963/"
                target="_blank"
                >Paint Brush</a
              >
              par Pixabay
              <a
                href="https://pixabay.com/service/license-summary/"
                target="_blank"
                >(Licence)</a
              ><br />
              <strong>Téléportation: </strong>
              <a
                href="https://pixabay.com/sound-effects/cinematic-whoosh-reverse-161307/"
                target="_blank"
                >Cinematic Whoosh Reverse (modifié sur CapCut)</a
              >
              par LordSonny sur Pixabay
              <a
                href="https://pixabay.com/users/lordsonny-38439655/"
                target="_blank"
                >(Licence)</a
              ><br />
              <strong>Océan: </strong>
              <a
                href="https://pixabay.com/sound-effects/ocean-sea-soft-waves-121349/"
                target="_blank"
                >Ocean Sea Soft Waves</a
              >
              par SoundsForYou sur Pixabay
              <a
                href="https://pixabay.com/users/soundsforyou-4861230/"
                target="_blank"
                >(Licence)</a
              ><br />
            </dd>
          </dl>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
}
a {
  color: #eee;
  text-decoration: none;
}
.licences {
  margin: 2rem 0;
  font-size: 1rem;
  text-align: left;
}
.licences dt {
  padding-top: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;
}
.licences dd {
  margin-left: 0;
  font-size: 0.8rem;
}

#onboarding {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333;
  color: #ccc;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  font-family: monospace;
  z-index: 10000;
  overflow: auto;
}
#onboarding > * {
  margin: 0 auto;
  max-width: 50rem;
  width: calc(100vw - 10rem);
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: 1.3rem;
}
#onboarding button {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
}
</style>
#onboarding li { #onboarding li { font-size: 1rem; text-align: left; }
