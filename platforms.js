// platforms.js

const platforms = [
  { x: 0, y: 400, width: offsetX, height: 20 },
  { x: 0 + offsetX, y: 400, width: 280, height: 20 },
  { x: 340 + offsetX, y: 400, width: 80, height: 20 },
  { x: 460 + offsetX, y: 400, width: 460, height: 20 },
  { x: 980 + offsetX, y: 400, width: 1420, height: 20 },
  { x: 180 + offsetX, y: 300, width: 100, height: 20 },
  { x: 650 + offsetX, y: 300, width: 100, height: 20 },
  { x: 840 + offsetX, y: 250, width: 100, height: 20 },
  { x: 1110 + offsetX, y: 300, width: 100, height: 20 },
  { x: 1740 + offsetX, y: 280, width: 60, height: 20 }
];

function drawPlatforms() {
  ctx.fillStyle = 'limegreen';
  platforms.forEach(p => ctx.fillRect(p.x, p.y, p.width, p.height));
}
