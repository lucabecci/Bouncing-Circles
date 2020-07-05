let bubble1,bubble2,bubble3;
function setup() {
  createCanvas(400, 400);
  bubble1 = new Bubble(random(50,400),random(100,350),random(2,5));
  bubble2 = new Bubble(random(50,400),random(100,350),random(2,5));
  bubble3= new Bubble(random(50,400),random(100,350),random(2,5));
}

function draw() {
  background(0);

  bubble1.move();
  bubble1.bounce();
  bubble1.show();
  bubble2.move();
  bubble2.bounce();
  bubble2.show();
  bubble3.move();
  bubble3.bounce();
  bubble3.show();
}

class Bubble {
  constructor(tempX,tempY,tempS){
    this.x = tempX;
    this.y = tempY;
    this.value = tempS;
    this.xspeed = 5;
    this.yspeed = 4;
    this.r = 0;
    this.g = 100;
    this.b = 200;
  }

  move(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  show(){
  stroke(this.r,this.g,this.b);
    strokeWeight(this.value);
    noFill();
    ellipse(this.x,this.y,30,30)
  }
  bounce(){
    if(this.x <= 0 || this.x >= width){
      this.xspeed = this.xspeed * -1
      this.r = random(0,255)
      this.g = random(0,255)
      this.b = random(0,255)
    }
    if(this.y <= 0 || this.y >= height){
     this.yspeed = this.yspeed * -1;
      this.r = random(0,255)
      this.g = random(0,255)
      this.b = random(0,255)
    }
  }
}
