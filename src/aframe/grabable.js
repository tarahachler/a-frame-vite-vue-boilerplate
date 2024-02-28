AFRAME.registerComponent("grabable", {
  init: function () {
    this.el.addEventListener("click", () => {
      /* if (
        !this.el.getAttribute("bind-position") &&
        !this.el.getAttribute("bind-rotation")
      ) {
        const el = evt.target;

        if (this.el.sceneEl.is("vr-mode")) {
          this.el.setAttribute("bind-position", "target: #hand-right;");
          this.el.setAttribute("bind-rotation", "target: #hand-right;");
        } else {
          this.el.setAttribute("bind-position", "target: #desktop-hand-right;");
          this.el.setAttribute("bind-rotation", "target: #desktop-hand-right;");
        }
        el.dataset.grabbed = true;
        delete el.dataset.dropped;
                  this.el.setAttribute("emit-when-near", "distance: 1; target: #table; event: click");
        
      } */

      // if something already grabbed, switch it
      const el = evt.target;
      const grabbedEl = document.querySelector("[data-grabbed]");
      if (grabbedEl) {
        grabbedEl.removeAttribute("bind-position");
        grabbedEl.removeAttribute("bind-rotation");
        copyPosition(el, grabbedEl);
        copyRotation(el, grabbedEl);
        delete grabbedEl.dataset.grabbed;
        delete grabbedEl.dataset.dropped;
        if (el.dataset.dropped) {
          grabbedEl.dataset.dropped = el.dataset.dropped;
        }
      }

      if (el.sceneEl.is("vr-mode")) {
        el.setAttribute("bind-position", "target: #hand-right");
        el.setAttribute("bind-rotation", "target: #hand-right");
      } else {
        el.setAttribute("bind-position", "target: #desktop-hand-right");
        el.setAttribute(
          "bind-rotation",
          "target: #desktop-hand-right; convertToLocal: true"
        );
      }
      el.dataset.grabbed = true;
      delete el.dataset.dropped;
    });
  },
});
