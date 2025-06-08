// globals.js (fuera del DOMContentLoaded)

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 450;

// Variables globales visibles desde cualquier archivo
const gravity = 0.5;
const levelWidth = 2500;
const offsetX = 100;
let cameraX = 0;
let shakeTimer = 0;
let gameOver = false;
const keys = {};

document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

console.log("✅ globals.js cargado correctamente");

document.addEventListener('DOMContentLoaded', () => {
  loop(); // se llama solo cuando todo está listo
});
