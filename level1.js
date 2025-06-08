// level1.js

// Este archivo puede encargarse de inicializar variables específicas del nivel 1.
// Actualmente los objetos ya están definidos directamente en los módulos correspondientes (plataformas, enemigos, monedas).
// Si en el futuro querés niveles múltiples, acá se puede centralizar la carga.

function restartLevel() {
  player.lives = 3;
  player.score = 0;
  coins.splice(0, 0, ...collectedCoins.map(c => ({ x: c.x, y: c.y })));
  collectedCoins = [];
  particles = [];
  enemies.length = 0;
  enemies.push(
    { x: 500 + offsetX, y: 360, width: 30, height: 40, dx: 1, range: [500 + offsetX, 610 + offsetX] },
    { x: 660 + offsetX, y: 260, width: 30, height: 40, dx: 1, range: [660 + offsetX, 750 + offsetX] },
    { x: 2250 + offsetX, y: 360, width: 30, height: 40, dx: 1, range: [2250 + offsetX, 2420 + offsetX] }
  );
  gameOver = false;
  resetPlayerPosition();
}
