function update() {
  if (gameOver) return;

  updatePlayer();
  updateEnemies();
  updateItems();

  const maxScroll = levelWidth - canvas.width;
  cameraX = Math.max(0, Math.min(player.x - canvas.width / 2, maxScroll));

  if (shakeTimer > 0) shakeTimer--;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const shake = shakeTimer > 0 ? Math.random() * 10 - 5 : 0;
  ctx.save();
  ctx.translate(-cameraX + shake, shake);

  drawPlatforms();
  drawEnemies();
  drawItems();
  drawPlayer();

  ctx.restore();
  drawUI();
  if (gameOver) drawGameOver();
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

window.addEventListener('keydown', (e) => {
  if (gameOver && e.key.toLowerCase() === 'r') {
    restartLevel();
  }
});
