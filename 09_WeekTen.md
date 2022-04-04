# Week 10 – Advanced Coding in P5JS
* An Introduction to Classes
* Loading JSON
* Visualizing Data
* Think about Your Final Projects


# Classes


A class is declared by using the ```class``` keyword.

```
class AnimationImage {
  constructor(width, height, imgs){
    this.width = width;
    this.height = height;
    this.imgs = imgs;
    
  }
  draw(x, y, frame){
    let index = frame % imgs.length;
    image(imgs[index], x, y); 
  }
}
```

```
// Bubble class
class Bubble {
  constructor(x, y, diameter, name) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.radius = diameter / 2;
    this.name = name;

    this.over = false;
  }

  // Check if mouse is over the bubble
  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);
    this.over = d < this.radius;
  }

  // Display the Bubble
  display() {
    stroke(0);
    strokeWeight(0.8);
    noFill();
    ellipse(this.x, this.y, this.diameter, this.diameter);
    if (this.over) {
      fill(0);
      textAlign(CENTER);
      text(this.name, this.x, this.y + this.radius + 20);
    }
  }
}

let data = {}; // Global object to hold results from the loadJSON call
let bubbles = []; // Global array to hold all bubble objects

// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {
  data = loadJSON('assets/bubbles.json');
}

// Convert saved Bubble data into Bubble Objects
function loadData() {
  let bubbleData = data['bubbles'];
  for (let i = 0; i < bubbleData.length; i++) {
    // Get each object in the array
    let bubble = bubbleData[i];
    // Get a position object
    let position = bubble['position'];
    // Get x,y from position
    let x = position['x'];
    let y = position['y'];

    // Get diameter and label
    let diameter = bubble['diameter'];
    let label = bubble['label'];

    // Put object in array
    bubbles.push(new Bubble(x, y, diameter, label));
  }
}

// Create a new Bubble each time the mouse is clicked.
function mousePressed() {
  // Add diameter and label to bubble
  let diameter = random(40, 80);
  let label = 'New Label';

  // Append the new JSON bubble object to the array
  bubbles.push(new Bubble(mouseX, mouseY, diameter, label));

  // Prune Bubble Count if there are too many
  if (bubbles.length > 10) {
    bubbles.shift(); // remove first item from array
  }
}

function setup() {
  createCanvas(640, 360);
  loadData();
}

function draw() {
  background(255);

  // Display all bubbles
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].rollover(mouseX, mouseY);
  }

  // Label directions at bottom
  textAlign(LEFT);
  fill(0);
  text('Click to add bubbles.', 10, height - 10);
}
```



### Home Work
* Coding Assignment #6: Data Viz Using data from https://opendata.cityofnewyork.us/
