var x = 0
var speed = 9.67
var drop = 7.38
var y = 0
//var drop = random(0,3)
//var speed = random(0,5)

function setup() {
  createCanvas(1920, 1080);
  background(0)
  //wallMap boundary design from Whalen's code
  //TODO: push mapping and get to get circle bouncing within
  // the above and below abandoned due to lack of time to explore complexity and implement it in a way that actually worked. adjusted size of circle so that it wouldn't take as long to fill the background, since only part of the screen will be visible on the wall
  wallMap = [
    '111111100111111',
    '111111100111111',
    '111111000111111',
    '111110000011111',
    '111110000001111',
    '111110000001111',
    '111110000001111',
    '111110000001111',
    '111111000001111',
    '111111110011111'
  ];
}

function draw() {
  // background of (0) set to alpha value of 7 for a long trail that fades almost perfectly into the background - abandonned idea, preferred it being persistent 
  //background(0, 0, 0,7)
  //blendMode(LIGHTEST) - abandonned idea;
  //var's required to be in the draw function to change up the color along all three scales
  var R = random(0, 255);
  var B = random(0, 255);
  var G = random(0, 255);

  //var d = random(20,30)
  //var y= random(0,400);
  //var d= random(4,80);
  noStroke();
  fill(R, G, B)
  circle(x, y, 102);
  //making the circle bounce along the edges of the canvas
  if (x > width || x < 0) {
    speed = -speed;
    //fill(R,G,B);
  }
  if (y > height || y < 0) {
    drop = -drop;
    //fill(R,G,B);
  }
  x = x + speed
  y = y + drop
}
