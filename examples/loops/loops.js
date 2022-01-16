//global vars
// the period length for our cycle
let cycle_period = 500;
// our counter
let i = 0;
// number of frames to loop time
let num_boxes = 40;
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
  stroke(0, 255, 255);
  // lets uncomment to turn off strokes;
  // noStroke();
}

function draw() {
  // background(0, 0, 0)
  // we loop from i to the num_boxes
  for(let i = 0; i < num_boxes; i++){
  // We use our custom getValue() function 
  // to calculate a value that drives the animation
    value = getValue();
    // we normalize our index between 0..1 by dividing i/num_boxes
    let c = i/num_boxes;
    // we create a sin wave using the value and our normalized index
    let j = sin(value+c);
    // we scale the wave by 10
    j *= 5;
    // we take the abs() value of the wave 0-1
    alpha = abs(j)
    // we call setColor passing in our index
    setColor(i, c);
    // we push/pop transform so that the transforms don't add/stack up
    // more on this later on when we talk about transforms in depth
    push();
    // we call draw rect with our index
    drawRect(i, c);
    // we pop our transform to close out our draw operation
    pop();
  }
}

//global function that sets the color
function setColor(i, c){
  // our red value
  let red = 150+sin(value+c)*100;
  // our green value
  let green = 0;
  // our blue value
  let blue = 200+cos(value+c)*50;
  fill(red, green, blue, alpha);
  stroke(0, red, blue, 100+alpha);
}

//global function that converts an increasing number to  a radian
function getValue(){
  return (frameCount%cycle_period)/cycle_period*(2*PI);
}

//global function that converts a frame number to  a radian
function drawRect(i, c){
  let x = -box_width * sin(value+c)/2;
  let y = -box_height * sin(value+c)/2
  let draw_box_width = box_width*sin(value+c);
  let draw_box_height = box_height*sin(value+c);
  translate(width/2, height/2);
  let r = map(i, 0, num_boxes, -1, 1)*2*PI;
  rotate(r);
  rect(x,y,draw_box_width,draw_box_height);
}
