<script>
  function sendColor(evt){
    const el = evt.target;
    console-log('sendColor');  
    el.getAttribute('color');
    const colorEvent = new CustomEvent('color-picked', { detail: colorString });
    document.dispatchEvent(colorEvent);
  }

</script>
<template>
  <a-box
    position="0.5 1.4 1.8"
    rotation="0 -45 0"
    width="0.3"
    height="0.5"
    depth="0.01"
    color="beige"
    roughness="0.75"
    material="opacity: 0.1"
  >
    <a-cylinder
      clickable
      @click="evt => sendColor(evt)"
      id="palette-red"
      position="0.1 0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="red"
    ></a-cylinder>
    <a-cylinder
      position="0 0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="blue"
    ></a-cylinder>
    <a-cylinder
      position="-0.1 0.1 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="green"
    ></a-cylinder>
    <a-cylinder
      position="0.1 0 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="black"
    ></a-cylinder>
    <a-cylinder
      position="0 0 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="purple"
    ></a-cylinder>
    <a-cylinder
      position="-0.1 0 -0.001"
      rotation="90 0 0"
      radius="0.03"
      height="0.002"
      color="orange"
    ></a-cylinder>
  </a-box>
</template>
