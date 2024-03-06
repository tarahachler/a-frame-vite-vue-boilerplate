AFRAME.registerComponent("hand-is-vr", {
  init: function () {
    const vrHandRight = document.getElementById("hand-right");
   /*  if (
      !this.el.sceneEl.is("vr-mode") &&
      this.el.getAttribute("id") === "desktop-hand-right"
    ) {
        //désactiver la main vr droite
        vrHandRight.removeAttribute("class", "hand");
    } */
    document.addEventListener("enter-vr", () => {
        //réactiver la main droite si on revient en vr
        vrHandRight.setAttribute("class", "hand");
    });
    document.addEventListener("exit-vr", () => {
      //réactiver la main droite si on revient en vr
      vrHandRight.removeAttribute("class", "hand");
  });
  },
});
