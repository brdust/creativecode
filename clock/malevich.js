function setup() {
  createCanvas(700, 550, WEBGL);
}

function draw() {
  background(225, 215, 215);
  noStroke();


  // ------------
  //   Seconds
  // ------------

  push();
  // rotateZ(270)
  
  let ogs = second()
  rotateZ(350);
  //print (ogs);

//   let sx1 = map(ogs, 0, 60, -80, -250);
//   let sx2 = map(ogs, 0, 60, -180, 340);
//   let sx3 = map(ogs, 0, 60, 200, 300);
//   let sy1 = map(ogs, 0, 60, 80, 250);
//   let sy2 = map(ogs, 0, 60, -100, -250);
//   let sy3 = map(ogs, 0, 60, 100, 270);
  
  let ogm = minute();

  
if (evenOdd(ogm) == 1) {
  var sx1 = map(ogs, 0, 60, -80, -250);
  var sx2 = map(ogs, 0, 60, -180, 340);
  var sx3 = map(ogs, 0, 60, 200, 300);
  var sy1 = map(ogs, 0, 60, 80, 250);
  var sy2 = map(ogs, 0, 60, -100, -250);
  var sy3 = map(ogs, 0, 60, 100, 270);
}
  
if (evenOdd(ogm) == 0) {
  var sx1 = map(ogs, 0, 60, -250, -80);
  var sx2 = map(ogs, 0, 60, 340, -180);
  var sx3 = map(ogs, 0, 60, 300, 200);
  var sy1 = map(ogs, 0, 60, 250, 80);
  var sy2 = map(ogs, 0, 60, -250, -100);
  var sy3 = map(ogs, 0, 60, 270, 100);
}
  
  fill(210, 210, 190);
  triangle(sx1, sy1, sx2, sy2, sx3, sy3);
  pop()

function evenOdd(ogm) {
  if (ogm % 2 == 0)
    return 1
  else
    return 0
}
  
  
  // ------------
  //   Minutes
  // ------------

  push();
  let m = map(ogm, 0, 60, 0, 12);
  rotateZ(140);
  fill(180, 60, 30);

  //if (m >= 0) { 
  if (m >= 0) {
    rect(-20, 100, 140, 80);
  }

  //if (m >= 0) {  
  if (m >= 1) {
    rect(-80, 20, 80, 30);
  }

  //if (m >= 0) { 
  if (m >= 2) {
    rect(-140, 200, 70, 23);
  }

  //if (m >= 0) { 
  if (m >= 3) {
    rect(40, 220, 175, 65);
  }

  //if (m >= 0) { 
  if (m >= 4) {
    rect(-32, 280, 30, 20);
  }

  //if (m >= 0) { 
  if (m >= 5) {
    rect(-100, 155, 60, 18);
  }

  //if (m >= 0) { 
  if (m >= 6) {
    rect(190, -60, 115, 26);
  }

  //if (m >= 0) { 
  if (m >= 7) {
    rect(-260, 65, 120, 35);
  }

  //if (m >= 0) { 
  if (m >= 8) {
    rect(180, 40, 70, 15);
  }

  //if (m >= 0) { 
  if (m >= 9) {
    rect(250, 80, 70, 50);
  }

  //if (m >= 0) { 
  if (m >= 10) {
    rect(135, 160, 150, 50);
  }

  //if (m >= 0) { 
  if (m >= 11) {
    rect(-50, 210, 70, 45);
  }
  pop();



  // -------------
  //     Hours 
  // -------------
  push();
  let ogh = hour();
  let h = map(ogh, 0, 24, 0, 360);
  angleMode(DEGREES);
  rotateZ(h);
  //  rectMode(CENTER);
  fill(10, 0, 60);
  rect(50, 100, 415, 13);
  pop();



}
