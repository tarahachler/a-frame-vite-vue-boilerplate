AFRAME.registerComponent('pavage', {
    schema: {
      tileSize: { default: 1 },  
      cols: { default: 5 },       
      rows: { default: 5 },       
      offset: { default: 0 } 
    },
  
    init: function () {
      const data = this.data;
      const el = this.el;
  
      for (let i = 0; i < data.rows; i++) {
        for (let j = 0; j < data.cols; j++) {

          const x = j * (data.tileSize + data.offset);
          const z = i * (data.tileSize + data.offset);
  
          const tile = document.createElement('a-box');
          tile.setAttribute('position', `${x} 0.2 ${z}`); 
          tile.setAttribute('width', data.tileSize);     
          tile.setAttribute('height', 0.1);    
          tile.setAttribute('depth', data.tileSize);                          
            
          if ((i + j) % 2 === 0) {
            tile.setAttribute('color', '#FFCC66'); // Couleur noire pour les cases paires
          } else {
            tile.setAttribute('color', '#B9B3FC'); // Couleur blanche pour les cases impaires
          }
          el.appendChild(tile);
        }
      }
    }
  });
  
