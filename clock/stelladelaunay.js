function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(220);
  noStroke()

  // Seconds Map
  let ogs = second()
  let s = map(ogs, 0, 60, 0, width)
  // Minutes Map
  let ogm = minute()
  let m = map(ogm, 0, 60, 0, width)
  // Hours Map
  let ogh = hour()
  let h = map(ogh, 0, 24, 0, width)

  // Seconds Circle
  fill(225, 185, 90, 130)
  ellipse(width / 2, height / 2, s)

  // Minutes Circle
  fill(180, 220, 60, 130)
  ellipse(width / 2, height / 2, m)

  // Hours Circle
  fill(80, 60, 120, 130)
  ellipse(width / 2, height / 2, h)
}
