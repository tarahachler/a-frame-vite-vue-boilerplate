let pressed = false;
AFRAME.registerComponent("brush", {
    
  schema: {
    activeColor: { type: "string", default: "#0000ff" },
    context: { type: 'string', oneOf: ["screen", "scene"], default: 'scene'}
  },

  init: function () {
    this.geometry = null;
    this.pos = new THREE.Vector3();
    this.el.object3D.getWorldPosition(this.pos);
    this.curveObject = null;
    this.lastCurveObject = null;
    this.tick = AFRAME.utils.throttleTick(this.tick, 250, this);
    this.points = [];

      if(this.data.context === "scene" ) {
        this.el.addEventListener("gripdown", () => {
          pressed = true;
        });
        this.el.addEventListener("gripup", () => {
            pressed = false;
            this.points = [];
          });
      } else {

       window.addEventListener("click", () => {
          // console.log("click scene");
          pressed = !pressed;
        });
      }

      document.addEventListener("color-picked", (e) => {
        this.data.activeColor = e.detail.color;
        console.log("color picked", this.data.activeColor);
      });
  },

  tick: function () {
    // If the button is not pressed, do nothing
    if (!pressed) return;

    //Create a closed wavey loop
    this.el.object3D.getWorldPosition(this.pos);
    this.points.push(this.pos.clone());
    if (this.points.length < 2) return;

    const curve = new THREE.CatmullRomCurve3(this.points, false, "chordal", 0);
    const points = curve.getPoints(200);
    this.geometry = null;
    this.geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(this.data.activeColor),
      linewidth: 10,
      linecap: "round",
      linejoin: "round",
    });
    this.curveObject = new THREE.Line(this.geometry, material);

    /* if (this.lastCurveObject) {
      this.el.sceneEl.object3D.remove(this.lastCurveObject);
    } */

    //this.curveObject.position.set(0, -0.5, 0);
    this.el.sceneEl.object3D.add(this.curveObject);

    this.lastCurveObject = this.curveObject;
  },
});