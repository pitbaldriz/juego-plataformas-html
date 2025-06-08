// globals.js

// Definir variables globales inmediatamente
window.canvas = document.getElementById('gameCanvas');
window.ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 450;

window.gravity = 0.5;
window.levelWidth = 2500;
window.offsetX = 100;
window.cameraX = 0;
window.shakeTimer = 0;
window.gameOver = false;
window.keys = {};

document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

console.log("✅ globals.js cargado correctamente");

// Ejecutar loop solo después de que todo esté listo
document.addEventListener('DOMContentLoaded', () => {
  loop();
});
