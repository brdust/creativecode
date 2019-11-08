function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(0);
  noStroke()

  
// ---Hours---
  let ogh = hour();
  let h = map(ogh, 0, 24, width, 0);
  fill(50, 30, 200,180);
  triangle(h, 0, width, 0, width, height);
  
  
// ---Seconds---
  let ogs = second();
  print(ogs);
  let s = map(ogs, 0, 60, 0, width);
  print(s);
  ellipseMode(CENTER);
  fill(220, 20, 10, 180);
  ellipse(width/2, height/2, s);
  
  // ---Minutes---
  let ogm = minute();
  let m = map(ogm, 0, 60, 0, width);
  fill(30, 200, 50,180);
  triangle(0, height, 0, 0, m, height);
  
}
