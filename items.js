// items.js

const coins = [
  { x: 100 + offsetX, y: 370 }, { x: 130 + offsetX, y: 370 },
  { x: 160 + offsetX, y: 370 }, { x: 190 + offsetX, y: 370 },
  { x: 500 + offsetX, y: 370 }, { x: 530 + offsetX, y: 370 },
  { x: 200 + offsetX, y: 270 }, { x: 230 + offsetX, y: 270 }, { x: 260 + offsetX, y: 270 },
  { x: 850 + offsetX, y: 220 }, { x: 880 + offsetX, y: 220 }, { x: 910 + offsetX, y: 220 },
  { x: 1020 + offsetX, y: 370 }, { x: 1050 + offsetX, y: 370 }, { x: 1080 + offsetX, y: 370 },
  { x: 1230 + offsetX, y: 180 }, { x: 1260 + offsetX, y: 180 },
  { x: 1400 + offsetX, y: 180 }, { x: 1430 + offsetX, y: 180 }, { x: 1460 + offsetX, y: 180 },
  { x: 1490 + offsetX, y: 180 }, { x: 1520 + offsetX, y: 180 }, { x: 1550 + offsetX, y: 180 }, { x: 1580 + offsetX, y: 180 },
  { x: 1670 + offsetX, y: 370 }, { x: 1700 + offsetX, y: 370 }, { x: 1730 + offsetX, y: 370 }
];

let collectedCoins = [];
let particles = [];

function spawnParticles(x, y, color = 'gold') {
  for (let i = 0; i < 6; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 1 + 0.5;
    particles.push({
      x, y,
      radius: 3,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      life: 30,
      maxLife: 30,
      color
    });
  }
}

function updateItems() {
  coins.forEach((coin, index) => {
    if (
      player.x < coin.x + 8 &&
      player.x + player.width > coin.x - 8 &&
      player.y < coin.y + 8 &&
      player.y + player.height > coin.y - 8
    ) {
      collectedCoins.push({ x: coin.x, y: coin.y, vy: -1, life: 15 });
      spawnParticles(coin.x, coin.y);
      coins.splice(index, 1);
      player.score++;
    }
  });

  collectedCoins = collectedCoins.filter(c => (--c.life, c.y += c.vy, c.life > 0));
  particles = particles.filter(p => (--p.life, p.x += p.dx, p.y += p.dy, p.life > 0));
}

function drawItems() {
  ctx.fillStyle = 'gold';
  coins.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, 8, 0, Math.PI * 2);
    ctx.fill();
  });

  collectedCoins.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, 8, 0, Math.PI * 2);
    ctx.fill();
  });

  particles.forEach(p => {
    const alpha = p.life / p.maxLife;
    ctx.fillStyle = `rgba(${p.color === 'white' ? '255,255,255' : '255,215,0'},${alpha.toFixed(2)})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}
