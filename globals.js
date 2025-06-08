// globals.js

console.log("✅ globals.js cargado correctamente");

window.canvas = document.getElementById('gameCanvas');
window.ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 450;

// Variables compartidas globales
window.gravity = 0.5;
window.levelWidth = 2500;
window.offsetX = 100;
window.cameraX = 0;
window.shakeTimer = 0;
window.gameOver = false;
window.keys = {};

document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

document.addEventListener('DOMContentLoaded', () => {
  loop(); // solo corre cuando el DOM está listo
});
