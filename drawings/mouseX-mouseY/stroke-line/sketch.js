function setup() {
  createCanvas(640, 360);
  background(50);
}

function draw() {
  stroke(255);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mousePressed() {
  background(50);
}
