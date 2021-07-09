var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  btn_green = createButton("RED");
  btn_green.position(100,50);
  btn_green.mousePressed(btn_red);

  btn_red = createButton("GREEN");
  btn_red.position(250,50);
  btn_red.mousePressed(btn_green);
}
function draw() {
  background(r,g,b);
}
function btn_red()
{ 
  r = 255
  g = 0
  b = 0
}
