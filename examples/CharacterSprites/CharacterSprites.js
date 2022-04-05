// Daniel Shiffman
// http://youtube.com/thecodingtrain
// https://thecodingtrain.com/CodingChallenges/111-animated-sprite.html

// Horse Spritesheet from
// https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring

// Animated Sprite
// https://youtu.be/3noMeuufLZY

let spritesheet;
let spritedata;

let animation = [];

let horses = [];

function preload() {
  spritedata = loadJSON('p1.json');
  spritesheet = loadImage('p1_spritesheet.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (let i = 0; i < 5; i++) {
    horses[i] = new Sprite(animation, 0, i * 75, random(0.1, 0.4), width, height);
  }
}

function draw() {
  background(0);

  for (let horse of horses) {
    if(keyIsPressed === true){
      if(key === 'w'){
        horse.animate(0, -10);
      }
      if(key === 's'){
        horse.animate(0, 10);
      }
      if(key === 'a'){
        horse.animate(-10, 0);
      }
      if(key === 'd'){
        horse.animate(10, 0);
      }
    }
    horse.show();
  }

  // image(animation[frameCount % animation.length], 0, 0);
}
