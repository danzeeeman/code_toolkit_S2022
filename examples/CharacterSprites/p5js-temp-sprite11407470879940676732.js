// Daniel Shiffman
// http://youtube.com/thecodingtrain
// https://thecodingtrain.com/CodingChallenges/111-animated-sprite.html

// Horse Spritesheet from
// https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring

// Animated Sprite
// https://youtu.be/3noMeuufLZY

class Sprite {
  constructor(animation, x, y, speed, screen_width, screen_height) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.h = this.animation[0].height;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
    this.screen_width = screen_width;
    this.screen_height = screen_height;
  }

  over(x, y){
    if(x > this.x && x < this.x+this.w){
      if(y > this.y && y < this.y+this.h){
        return true;
      }
    }
    return false;
  }

  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y);
  }

  animate(x, y) {
    this.index += this.speed;
    this.x += this.speed * x;
    this.y += this.speed * y;

    if (this.x > this.screen_width+this.w) {
      this.x = -this.w;
    }
    if(this.x < -this.w){
      this.x = this.screen_width+this.w
    }
    if (this.y > this.screen_height){
      this.y = -this.h
    }
    if(this.y < -this.h){
      this.y = this.screen_height+this.h
    }
  }
}
