let img;
// Load the image
function preload() {
  img = loadImage("data/PRI_220306753.webp");
}

function setup() {
  createCanvas(img.width, img.height);
  
  // Resize the image to fit the canvas
  //img.resize(width, height);

  // Disable the stroke
  noStroke();

}

function draw() {
  background(255);
  img.loadPixels();
  let skip = 15;
  // Loop through the pixels X and Y
  for (let y = 0; y < img.height; y+=skip) {
    for (let x = 0; x < img.width; x+=skip) {

      // Calculate the pixel index
      const index = (y * img.width + x) * 4;

      // Get the red, green, and blue values
      const r = img.pixels[index + 0];
      const g = img.pixels[index + 1];
      const b = img.pixels[index + 2];
      
      fill(r, g, b);
      circle(x+skip/2, y+skip/2, skip);

    }
  }
}
