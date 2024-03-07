AFRAME.registerComponent("point-in-box", {
  schema: {
    target: { type: "selector" },
  },

  init: function () {},

  tick: function () {
    let el = this.el; // Box
    let target = this.data.target; // Target point

    if (!target) {
      console.warn("point-in-box component requires a target");
      return;
    }

    let box = new THREE.Box3().setFromObject(el.object3D);

    let pointPosition = new THREE.Vector3();
    target.object3D.getWorldPosition(pointPosition);

    if (box.containsPoint(pointPosition)) {
      const selectedColor = this.el.getAttribute("data-palette-color");
      const colorEvent = new CustomEvent("color-picked", {
        detail: selectedColor,
      });
      document.dispatchEvent(colorEvent);
        const palette = document.querySelector("#palette");
        palette.components.sound.playSound();
    }
  },
});
