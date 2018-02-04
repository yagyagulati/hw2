function setup() {
  createCanvas(340,340);
}

function draw() {
  line(random(width), random(height), random(width),0);
  stroke(random(color),random(color),random(color));
  
  var lefttop = color(255, 0, 0);
  var righttop = color(0, 255, 0);

  push();
  translate(random(width), random(height),0, 0-140);
 	stroke(lefttop);
  line(0, 0-170);
  pop();

  push();
  translate(0,170-340);
  stroke(righttop);
  line(0, 170-340);
  pop();
}