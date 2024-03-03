AFRAME.registerComponent("color-switch", {
    init: function () {
    document.addEventListener("color-picked", (e) => {
        this.el.setAttribute("color", e.detail); 
        this.el.setAttribute('visible', true);
      });
    }
    
});