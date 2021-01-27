var hr 
var min 
var sec 
var secAngle, minAngle, hourAngle;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hourAngle = map(hr%12,0,12,0,360);

  angleMode(DEGREES)
  translate(400,200);
  rotate(-90)
  push();
  stroke(255,0,0);
  strokeWeight(9);
  rotate(secAngle)
  line(0,0,100,0);
  pop();
 
  push();
  strokeWeight(9)
  stroke("green")
  rotate(minAngle)
  line(0,0,80,0)
  pop();

  push();
  strokeWeight(15)
  stroke("blue")
  rotate(hourAngle)
  line(0,0,60,0)
  pop();


  noFill();
  stroke("red")
  strokeWeight(9)
  arc(0,0,270,270,0,secAngle)

  noFill();
  stroke("green")
  strokeWeight(9)
  arc(0,0,250,250,0,minAngle)

  noFill();
  stroke("blue")
  strokeWeight(5)
  arc(0,0,230,230,0,hourAngle)

  

  
}