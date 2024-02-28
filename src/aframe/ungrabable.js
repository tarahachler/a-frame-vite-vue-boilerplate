AFRAME.registerComponent("ungrabable", {
  init: function () {
    this.el.addEventListener("click", () => {
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
      const elInDropZone = document.querySelector(
        `[data-dropped="${dropZoneId}"]`
      );
      if (elInDropZone) {
        grabTheThing({ target: elInDropZone });
      }

      grabbedEl.dataset.dropped = dropZoneId;
      /* const grabbedEl = document.querySelector("[data-grabbed]");
      // if nothing grabbed, return
      if (!grabbedEl) return;

      //drop it
      grabbedEl.removeAttribute("bind-position");
      grabbedEl.removeAttribute("bind-rotation");
      copyPosition(evt.target, grabbedEl);
      copyRotation(evt.target, grabbedEl);
      delete grabbedEl.dataset.grabbed;

      const dropZoneId = evt.target.id;

      grabbedEl.dataset.dropped = dropZoneId;

      console.log("ungrabable"); */
      /*       if (
        this.el.getAttribute("bind-position") &&
        this.el.getAttribute("bind-rotation")
      ) {
        console.log("ungrabable remove");
        this.el.removeAttribute("bind-position");
        this.el.removeAttribute("bind-rotation");
        this.el.object3D.position.set(0, 1.005, 1.5);
        this.el.object3D.rotation.set(
          0,
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(-90)
        );
        this.el.setAttribute(
          "emit-when-near",
          "distance: 0.5; target: #hand-right; event: click"
        );
      }
    }); */
    });
  },
});
