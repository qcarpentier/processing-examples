function setup() { 
  createCanvas(600, 600);
} 

function draw() { 
  // background(220);

  if (mouseIsPressed) {
      fill(0);    
  }
  else {
      fill(255);
  }

  ellipse(mouseX, mouseY, 40, 40);
}