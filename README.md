<p align="center">
    <img src="./logo.svg" alt="VAV Logo" align="center"/>
</p>
<h1 align="center">L'atelier d'expression virtuel</h1>

> Virtual painting in A-Frame 1.5, Vue 3.4 and Vite 5.0

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![A-Frame](https://img.shields.io/badge/A%E2%80%93Frame-1.5-brightgreen?style=for-the-badge&labelColor=%23ef2d5e&color=%23ef2d5e)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### [>> DEMO <<](https://vr49.onivers.com/tara/)

## Included in the painting experience

### Libs and components

- [aframe-extras controls, ocean, and animation-mixer](https://github.com/c-frame/aframe-extras) (MIT License)
- [aframe physx](https://github.com/c-frame/physx) (MIT License)
- [aframe-blink-controls](https://github.com/jure/aframe-blink-controls) (MIT License)
- [simple-navmesh-constraint](https://github.com/AdaRoseCannon/aframe-xr-boilerplate) by Ada Rose Cannon (MIT License)
- [bind-position, bind-rotation, clickable, disable-in-vr, emit-when-near, hide-in-vr, listen-to, sakura-circle, teleport, CameraRig, and Onboarding](https://github.com/Chabloz/a-frame-vite-vue-boilerplate/tree/main)


### Movement modes support

- **Desktop** – Use keyboard to move (WASD or arrow keys) + Use mouse to look around (drag and drop) + Space key to paint
- **VR Headset** – AR/VR walk + Teleportation (click with laser) + Back button to click + Side button to paint (right hand)

### Painting

- **Desktop** – Approach the table to pick up the brush + Select a color with the brush + Space key to paint/stop painting
- **VR Headset** – Bring right hand close to the brush to pick it up + Select a color with the brush + Side button to paint

### Picture

Face the desired viewpoint + Click on the camera next to the exit


### 3D models

- **Low Poly Polaroid** by [Bruce Mevans](https://sketchfab.com/brucemevans) (CC BY 4.0)
- **Tokarz WK7 Rectangle Box** by [Ktokarz](https://sketchfab.com/ktokarz) (CC BY 4.0)
- **Potted Plant Mediterranean Med Leaf Low Poly** by [Dudecon](https://sketchfab.com/dudecon) (CC BY 4.0)
- **Cans of Paint Varnish Lowpoly** by [Hoxsvl](https://sketchfab.com/hoxsvl) (CC BY 4.0)
- **Portal Entrance** by [Alok Aks50](https://sketchfab.com/alok.aks50) (CC BY 4.0)
- **Right Hand** by [Jaymewithers](https://sketchfab.com/jaymewithers) (CC BY 4.0)
- **Small Paintbrush** by [SpaceScapes](https://sketchfab.com/metalman9944) (CC BY 4.0)
- **Side Table** by [Thethieme](https://sketchfab.com/thethieme) (CC BY 4.0)
- **Low Poly Butterfly** by [AlicePandaArt](https://sketchfab.com/AlicePandaArt) (CC BY 4.0)
- **Sugar Teddy Bear** by [Suvalien](https://sketchfab.com/Suvalien) (CC BY 4.0)
- **Clouds** by [Farhad Guli](https://sketchfab.com/farhad.Guli) (CC BY 4.0)
- **Wooden Sign** by [Carlos](https://skfb.ly/6Vzo6) (CC BY 4.0)
- **Low Poly Light Bulb** by [AleixoAlonso](https://skfb.ly/6VnSG) (CC BY 4.0)
- **Favicon: Paintbrush Adobe Illustrator Tool Painting Icon** by [Rickvanhouten](https://www.iconfinder.com/rickvanhouten) (CC BY 4.0)
- **Sky** from [Adobe Stock](https://stock.adobe.com/fr/Library/urn:aaid:sc:EU:13c5f03d-dc2f-45dc-8770-cd14fd2d6933?asset_id=286726140) (education license)

### Audio

- **Introduction**: Created using [murf.ai studio](https://murf.ai/studio) with additional effects on CapCut
- **Music**: "Drifting at 432 Hz" by [Unicorn Heads](https://www.youtube.com/channel/UCbdU8d-QYGeEseYLlrSy8KQ) (royalty-free audio library)
- **Camera Shutter**: by Pixabay (License)
- **Painting on Palette**: by Pixabay (License)
- **Pick**: by Pixabay (License)
- **Wood Door Knock**: by Pixabay (License)
- **Paint Brush**: by Pixabay (License)
- **Teleportation**: by LordSonny on Pixabay (License)
- **Ocean Sea Soft Waves**: by SoundsForYou on Pixabay (License)
---

## Quickstart

### Create a folder for your project and move to it

### Clone (or fork, or download)

```sh
git clone https://github.com/Chabloz/a-frame-vite-vue-boilerplate.git .
```

### Install dependencies

```sh
npm ci
```

### Dev

```sh
npm run dev
```

### Build

```sh
npm run build
```

## Notes for local dev on VR headset

1. Check that your development device and your VR headset are connected on **the same network**.

2. Expose you local development:

```sh
npm run dev-expose
```

3. In your VR headset, browse to the local development adress `[ip]:[port]`.

> [!NOTE]  
> The certificate is self-signed, so you will probably have to confirm access to the resource in your browser.

---

## License

![MIT License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge&color=%23262626)
