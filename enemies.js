// enemies.js

const enemies = [
  { x: 500 + offsetX, y: 360, width: 30, height: 40, dx: 1, range: [500 + offsetX, 610 + offsetX] },
  { x: 660 + offsetX, y: 260, width: 30, height: 40, dx: 1, range: [660 + offsetX, 750 + offsetX] },
  { x: 2250 + offsetX, y: 360, width: 30, height: 40, dx: 1, range: [2250 + offsetX, 2420 + offsetX] }
];

function updateEnemies() {
  enemies.forEach((e, index) => {
    e.x += e.dx;
    if (e.x < e.range[0] || e.x + e.width > e.range[1]) e.dx *= -1;

    enemies.forEach((other, i) => {
      if (i !== index &&
          e.x < other.x + other.width &&
          e.x + e.width > other.x &&
          e.y < other.y + other.height &&
          e.y + e.height > other.y) {
        e.dx *= -1;
        other.dx *= -1;
      }
    });

    if (
      player.y + player.height <= e.y + 10 &&
      player.y + player.height >= e.y - 5 &&
      player.x + player.width > e.x &&
      player.x < e.x + e.width &&
      player.dy > 0
    ) {
      spawnParticles(e.x + e.width / 2, e.y + e.height / 2, 'white');
      enemies.splice(index, 1);
      player.dy = player.jumpForce / 2;
    } else if (
      player.x < e.x + e.width &&
      player.x + player.width > e.x &&
      player.y < e.y + e.height &&
      player.y + player.height > e.y
    ) {
      if (shakeTimer <= 0) {
        shakeTimer = 10;
        player.lives--;
        if (player.lives <= 0) gameOver = true;
        else resetPlayerPosition();
      }
    }
  });
}

function drawEnemies() {
  ctx.fillStyle = 'red';
  enemies.forEach(e => ctx.fillRect(e.x, e.y, e.width, e.height));
}
