let elephant;
let top_hat;
let mustache;
function preload(){
  elephant = loadImage('/data/img/elephant-clip-art-57.png');
  top_hat = loadImage('/data/img/top_hat.png');
  mustache = loadImage('/data/img/mustache.png');
}

function setup() {
  createCanvas(elephant.width, elephant.height);
  background(0, 0, 0);
  image(elephant, 0, 0);
  let x = width/3*2-(top_hat.width/4)/2+50;
  let y = -(top_hat.height/4)/2;
  image(top_hat, x, y, top_hat.width/4, top_hat.height/4);
  x = width/10*8 - (mustache.width/2)/2;
  y = height/2 - (mustache.height/2)/2;
  image(mustache, x, y, mustache.width/2, mustache.height/2);
}
