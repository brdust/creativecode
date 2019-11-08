function setup() {
  createCanvas(700, 550);
}

function draw() {
  background(300);
  strokeWeight(7);


  let ogm = minute()
  // 600 -> 400
  let m = map(ogm, 0, 60, 600, 400)
  let mw = map(ogm, 0, 60, 0, 200)
  let ogh = hour()
  // 550 -> 200
  let h = map(ogh, 0, 24, 550, 200);

  let s = second()
  // seconds do not require mapping

  push();
  //decorative rectangles
  noStroke();
  fill(250, 0, 0);
  rect(0, 0, 200, 20);

  fill(250, 0, 0);
  rect(312.5,400,35,40);
  
  fill(250,250,0);
  rect(600,0,100,20);
  
  fill(250,250,0);
  rect(500,400,200,150);

  //minuts color rectangle
  fill(0, 0, 225);
  rect(m, 20, mw, 130);

  //hours color rectangle
  fill(0, 0, 200);
  rect(0, h, 200, 550);

  if (4 <= s) {
    fill(0, 0, 250);
    rect(650, 337.5, 50, 62.5);
  }

  if (9 <= s) {
    fill(250);
    rect(650, 337.5, 50, 62.5);
  }


  if (14 <= s) {
    fill(0, 0, 250);
    rect(650, 337.5, 50, 62.5);
  }


  if (19 <= s) {
    fill(250);
    rect(650, 337.5, 50, 62.5);
  }


  if (24 <= s) {
    fill(0, 0, 250);
    rect(650, 337.5, 50, 62.5);
  }


  if (29 <= s) {
    fill(250);
    rect(650, 337.5, 50, 62.5);
  }


  if (34 <= s) {
    fill(0, 0, 250);
    rect(650, 337.5, 50, 62.5);
  }


  if (39 <= s) {
    fill(250);
    rect(650, 337.5, 50, 62.5);
  }


  if (44 <= s) {
    fill(0, 0, 250);
    rect(650, 337.5, 50, 62.5);
  }


  if (49 <= s) {
    fill(250);
    rect(650, 337.5, 50, 62.5);
  }


  if (54 <= s) {
    fill(0, 0, 250);
    rect(650, 337.5, 50, 62.5);
  }


  if (59 <= s) {
    fill(250);
    rect(650, 337.5, 50, 62.5);
  }

  pop();

  line(0, 20, 700, 20);
  line(200, 0, 200, 550);
  line(200, 400, 700, 400);
  line(0, 200, 200, 200);
  line(200, 150, 700, 150);
  line(600, 0, 600, 150);
  // X = minutes?
  line(m, 20, m, 150);
  line(400, 20, 400, 150);
  line(400, 85, m, 85);
  line(500, 150, 500, 550);
  line(500, 275, 700, 275);
  line(600, 275, 600, 400);
  line(600, 337.5, 700, 337.5);
  line(650, 337.5, 650, 400);
  // Y = hours
  line(0, h, 200, h);
  line(350, 400, 350, 550);
  line(200, 475, 500, 475);
  line(275, 400, 275, 550);
  line(275, 440, 350, 440);
  line(312.5,400,312.5,440);




  // have that small rectangle over to the right turn on and off as blue every 5 seconds

  // print(mouseX)
  // print(mouseY)
}
