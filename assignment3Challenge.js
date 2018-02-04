background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(60), 255, 255);
  beginShape(TRIANGLES);
	vertex(random(width), random(height));
	vertex(random(width), 20);
	vertex(random(width), 75);
	vertex(random(width), 20);
	vertex(random(width), 75);
	vertex(random(width), 20);
	endShape();
}
// this triangular shape represents fire and this color too
