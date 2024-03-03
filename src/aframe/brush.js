let pressed = false;
let points = [];
AFRAME.registerComponent("brush", {
  schema: {
    activeColor: { type: "string", default: "" },
    context: { type: "string", oneOf: ["screen", "scene"], default: "scene" },
  },

  init: function () {
    this.geometry = null;
    this.pos = new THREE.Vector3();
    this.el.object3D.getWorldPosition(this.pos);
    this.curveObject = null;
    this.lastCurveObject = null;
    this.tick = AFRAME.utils.throttleTick(this.tick, 250, this);
    points = [];
    const brushPoint = document.querySelector("#paintbrush-color");

    if (this.data.context === "scene") {
      this.el.addEventListener("gripdown", () => {
        pressed = true;
        brushPoint.components.sound.playSound();
      });
      this.el.addEventListener("gripup", () => {
        pressed = false;
        points = [];
        brushPoint.components.sound.stopSound();
      });
    } else {
      window.addEventListener("keydown", function(event) {
        if(event.key == " ") {
          points = []; 
          pressed = !pressed;     
          if(pressed) {
            brushPoint.components.sound.playSound();
          } else {
            brushPoint.components.sound.stopSound();
          }
        }
      });
    }
    document.addEventListener("color-picked", (e) => {
      this.data.activeColor = e.detail;
      points = [];
    });
  },

  tick: function () {
    // If the button is not pressed, do nothing
    if (!pressed) return;
    // If the brush isn't grabbed, do nothing
    const grabbedEl = document.querySelector('[data-grabbed]');
    if (!grabbedEl){
      pressed = false;
      return;
    }
    if(this.el.sceneEl.is("vr-mode") && this.data.context === "screen") return;
    if(!this.el.sceneEl.is("vr-mode") && this.data.context === "scene") return;
    //Create a closed wavey loop
    this.el.object3D.getWorldPosition(this.pos);
    points.push(this.pos.clone());
    if (points.length < 2) return;

    const curve = new THREE.CatmullRomCurve3(points, false, "chordal", 0);
    const pointsCurve = curve.getPoints(200);
    this.geometry = null;
    this.geometry = new THREE.BufferGeometry().setFromPoints(pointsCurve);

    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(this.data.activeColor),
      linewidth: 10,
      linecap: "round",
      linejoin: "round",
    });
    this.curveObject = new THREE.Line(this.geometry, material);
    this.el.sceneEl.object3D.add(this.curveObject);
    this.lastCurveObject = this.curveObject;
  },
});
