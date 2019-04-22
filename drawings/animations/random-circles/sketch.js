var circleX;
var circleY;

function setup() {
  createCanvas(640, 360);
  background(50);
}

function draw() {
  circleX = random(width);
  circleY = random(height);

  fill(255);
  ellipse(circleX, circleY, 25, 25);
}
