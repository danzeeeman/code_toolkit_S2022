let img;
function preload() {
  img = loadImage('/assets/PRI_220306753.webp');
}
function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0, img.width, img.height);
  //image(img, 30, 30);
}
