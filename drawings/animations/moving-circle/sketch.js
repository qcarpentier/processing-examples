var circleX = 50;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  // Drawing stuff
  background(50);
  fill(255);
  ellipse(circleX, 180, 25, 25);

  // Logic
  circleX = circleX + 1;
}
