//global vars
// the period length for our cycle
let cycle_period = 500;
// our counter
let i = 0;
// number of frames to loop time
let num_frames = 500;
// box height
let box_height = 350;
// box width
let box_width = 350;
// alpha value
let alpha = 0;
// current animation value in radians 
let value = 0;

function setup() {
  //create the canvas the width and height of the window
  createCanvas(windowWidth, windowHeight);
  // set the stroke to white
  stroke(255, 255, 255);
  // lets uncomment to turn off strokes;
  // noStroke();
}

function draw() {
  // we take the frame count and mod it by the number of frames
  // this returns a ramp wave from 0 to the number of frames
  i = (frameCount)%num_frames
  // We use our custom getValue() function to calculate a value that drives the animation
  value = getValue();
  // we use that value to drive a sin wave
  // we scale the wave by 10
  // we take the abs() value of the wave 0-1
  alpha = abs(10*sin(value))
  setColor();
  drawRect();
}
//global function that sets the color
function setColor(){
  let red = 150+sin(value+i/num_frames)*100;
  let green = 0;
  let blue = 200+cos(value+i/num_frames)*50;
  fill(red, green, blue, alpha);
}
//global function that converts an increasing number to  a radian
function getValue(){
  return (frameCount%cycle_period)/cycle_period*(2*PI);
}
//global function that converts a frame number to  a radian
function drawRect(){
  translate(width/2, height/2);
  rotate(map(i, 0, num_frames, -1, 1)*2*PI);
  let x = -box_width * sin(value+i/num_frames)/2;
  let y = -box_height * sin(value+i/num_frames)/2
  let draw_box_width = box_width*sin(value+i/num_frames);
  let draw_box_height = box_height*sin(value+i/num_frames);
  rect(x,y,draw_box_width,draw_box_height);
}
