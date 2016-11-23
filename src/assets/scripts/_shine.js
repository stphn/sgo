const shine = new Shine(document.getElementById('my-shine-object'))

window.addEventListener('mousemove', function(event) {
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  shine.config.opacity = 0.1;
shine.config.blur = 0.2;
shine.draw(); // make sure to re-draw
}, false)
