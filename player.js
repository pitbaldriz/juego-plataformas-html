// player.js

const player = {
  x: 50,
  y: 300,
  width: 30,
  height: 40,
  color: 'blue',
  dx: 0,
  dy: 0,
  maxSpeed: 3,
  accel: 0.4,
  friction: 0.2,
  jumpForce: -11,
  grounded: false,
  lives: 3,
  score: 0,
  crouching: false,
  baseHeight: 40,
  respawnDelay: 0,
  jumpCooldown: 0
};

function resetPlayerPosition() {
  player.x = 50;
  player.y = 300;
  player.dx = 0;
  player.dy = 0;
  player.respawnDelay = 30;
  player.jumpCooldown = 10;
}

function updatePlayer() {
  if (player.respawnDelay > 0) {
    player.respawnDelay--;
    return;
  }
  if (player.jumpCooldown > 0) player.jumpCooldown--;

  const currentMaxSpeed = player.crouching ? player.maxSpeed / 2 : player.maxSpeed;
  if (keys['ArrowRight']) player.dx += player.accel;
  else if (keys['ArrowLeft']) player.dx -= player.accel;
  else {
    if (player.dx > 0) player.dx = Math.max(0, player.dx - player.friction);
    else if (player.dx < 0) player.dx = Math.min(0, player.dx + player.friction);
  }
  if (player.dx > currentMaxSpeed) player.dx = currentMaxSpeed;
  if (player.dx < -currentMaxSpeed) player.dx = -currentMaxSpeed;

  if (keys['ArrowDown'] && player.grounded && !player.crouching) {
    player.height = player.baseHeight / 2;
    player.y += player.baseHeight / 2;
    player.crouching = true;
  } else if (!keys['ArrowDown'] && player.crouching) {
    player.y -= player.baseHeight / 2;
    player.height = player.baseHeight;
    player.crouching = false;
  }

  if (keys['ArrowUp'] && player.grounded && player.jumpCooldown <= 0) {
    player.dy = player.jumpForce;
    player.grounded = false;
    player.jumpCooldown = 10;
  }

  player.dy += gravity;
  player.x += player.dx;

  // Colisión lateral con plataformas
  platforms.forEach(p => {
    if (player.x < p.x + p.width && player.x + player.width > p.x &&
        player.y < p.y + p.height && player.y + player.height > p.y) {
      if (player.dx > 0) player.x = p.x - player.width;
      else if (player.dx < 0) player.x = p.x + p.width;
    }
  });

  if (player.x + player.width > levelWidth) player.x = levelWidth - player.width;
  if (player.x < 0) player.x = 0;

  player.y += player.dy;
  player.grounded = false;

  // Colisión vertical con plataformas
  platforms.forEach(p => {
    if (player.x < p.x + p.width && player.x + player.width > p.x &&
        player.y < p.y + p.height && player.y + player.height > p.y) {
      if (player.dy > 0) {
        player.y = p.y - player.height;
        player.dy = 0;
        player.grounded = true;
      } else if (player.dy < 0) {
        player.y = p.y + p.height;
        player.dy = 0;
      }
    }
  });

  if (player.y > canvas.height + 100 && shakeTimer <= 0) {
    shakeTimer = 30;
    player.lives--;
    player.respawnDelay = 30;
    if (player.lives <= 0) gameOver = true;
    else resetPlayerPosition();
  }
}

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}
