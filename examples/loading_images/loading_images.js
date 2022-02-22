let img;
let doInvert = false;

// Load the image
function preload() {
  img = loadImage("assets/PRI_220306753.webp");
}

function setup() {
  createCanvas(img.width, img.height);
  
  // Resize the image to fit the canvas
  //img.resize(width, height);

  // Disable the stroke
  noStroke();

}

function draw() {
 
  // If we need to invert...
  if(doInvert){
    
    // Load the pixels
    img.loadPixels();
    let skip = 5;
    // Loop through the pixels X and Y
    for (let y = 0; y < img.height; y+=skip) {
      for (let x = 0; x < img.width; x+=skip) {

        // Calculate the pixel index
        const index = (y * img.width + x) * 4;

        // Get the red, green, and blue values
        const r = img.pixels[index + 0];
        const g = img.pixels[index + 1];
        const b = img.pixels[index + 2];
        
        // Invert the colors
        img.pixels[index + 0] = 255 - r;
        img.pixels[index + 1] = 255 - g;
        img.pixels[index + 2] = 255 - b;

      }
    }

    // We're finished working with pixels so update them
    img.updatePixels();
    
    // Don't do invert again until we set it to true on click
    doInvert = false;
  }
  
  // Draw the image 
  image(img, 0, 0);
  
}

function mousePressed(){
  
  // Invert the colors on click
  doInvert = true;
}
