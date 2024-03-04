AFRAME.registerGeometry("hand-is-vr", {
  init: function () {
    if (
      this.el.sceneEl.is("vr-mode") &&
      this.el.getAttribute("id") === "hand-right"
    ) {
        //désactiver la main desktop droite
        const desktopHandRight = document.getElementById("desktop-hand-right");
        desktopHandRight.removeAttribute("class", "hand");
      {
      }
    }
    if (
      !this.el.sceneEl.is("vr-mode") &&
      this.el.getAttribute("id") === "desktop-hand-right"
    ) {
        console.log("desktop, main vr droite désactivée");
        const vrHandRight = document.getElementById("hand-right");
        //désactiver la main vr droite
        vrHandRight.removeAttribute("class", "hand");
    }
  },
});
