function setup() {
  createCanvas(1024, 1024);
  let bottom_length = 500;
  let top_length = bottom_length/2;
  let left_side = 1.5*top_length;
  let right_side;
  let left_top_x = 0;
  let left_top_y = 0;
  fill(255);
  stroke(0);
  rect(1, 1, width-1, height-1)
  x = (width/2)/2
  y = (height/2)/2
  x1 = (width/2)/2
  y1 = 0;
  stroke(0);
  line(x, y, x1, y1);
  x = (width/2)/2
  y = (height/2)/2
  x1 = 3*width/4;
  y1 = (height/2)/2
  line(x, y, x1, y1);
  let point1_x = (width/2)/2
  let point1_y = (height/2)/2
  x = (width/2)/2
  y = ((height/2)/2)/2
  x1= 3*width/4;
  y1= 3*height/4;
  line(x, y, x1, y1);
  x = 3*width/4
  y = height/4
  x1 = width/2
  y1 = height/2
  line(x, y, x1, y1)
  //slope intercept 
  //http://paulbourke.net/geometry/pointlineplane/
}
