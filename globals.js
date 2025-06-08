document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 800;
  canvas.height = 450;

  // Variables globales
  window.canvas = canvas;
  window.ctx = ctx;
  window.gravity = 0.5;
  window.levelWidth = 2500;
  window.offsetX = 100;
  window.cameraX = 0;
  window.shakeTimer = 0;
  window.gameOver = false;
  window.keys = {};

  document.addEventListener('keydown', e => keys[e.key] = true);
  document.addEventListener('keyup', e => keys[e.key] = false);

  // Iniciar juego
  loop();
});
