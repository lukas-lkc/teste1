function setColors(palette){
  let colors = ['255, 255, 255'];
  for(let i=0; i<palette.children.length; i++){
    let color = palette.children[i];
    colors.push(color.dataset.value.split('-').join(', '));
  }
  return colors;
}

let palettes = document.querySelectorAll('.palette'),
    colors = setColors(palettes[0]),
    pixels = document.querySelectorAll('.pixel'),
    reset = document.getElementById('reset');

palettes.forEach(function(palette){
  palette.addEventListener('click', function(e){
    colors = setColors(e.target.closest('.palette'));
    pixels.forEach(function(pixel){
      let offset = pixel.dataset.offset ? pixel.dataset.offset : 0;
      pixel.style.backgroundColor = 'rgba(' + colors[offset] + ')';
    });
  },false);
});

pixels.forEach(function(pixel){
  pixel.style.backgroundColor = '#ffffff';
  pixel.addEventListener('click', function(e){
    let pixel = e.target.closest('.pixel'),
        color = pixel.style.backgroundColor;
    color = color.substring(4,color.length-1);
    color = colors.indexOf(color)==-1 || colors.indexOf(color)==colors.length-1 ? colors[0] : colors[colors.indexOf(color)+1];
    pixel.style.backgroundColor = 'rgba(' + color + ')';
    pixel.dataset.offset = colors.indexOf(color);
  },false);
});

reset.addEventListener('click', function(){
  pixels.forEach(function(pixel){
    pixel.style.backgroundColor = '#ffffff';
    pixel.dataset.offset = 0;
  });
});
