document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
   coords.textContent = `X:${x}| Y: ${y}`;
});