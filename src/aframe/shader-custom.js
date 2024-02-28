AFRAME.registerShader("shader-custom", {
    schema: {
      color: { type: "color", is: "emissive", default: "red" },
      opacity: { type: "number", is: "uniform", default: 0.5 },
    },
  });
  
  