let bird;
let pipes = [];
function setup() {
  createCanvas (400, 600);
  bird = new Bird();
  pipes.push (new pipe());
}

function keyPressed(){
  if (key == ' '){
    bird.up();
  }
}

function draw() {
  background (0);
  bird.show();
  bird.physics();
  
  for (var i = 0; i <pipes.length; i++) {
   pipes[i].show();
   pipes[i].update();
  }
} 
class Bird{
    constructor(){
    this.y = width/2;
    this.x = 64;
    this.velocity = 0;
    this.gravity = 0.5;
    }
    show () {
      fill(255);
      circle(this.x, this.y, 32, 32);
    }
    up(){
      this.velocity = -10;
    }
    physics(){
      this.y += this.velocity;
      this.velocity += this.gravity;
  
      if (this.y > height){
        this.y = height;
        this.velocity = 0;
      }
      
       if (this.y < 0){
        this.y = 0;
        this.velocity = 0;
      }
    }
  }
  function pipe (){
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 5;
    
    this.show = function() {
      fill (255);
      rect (this.x, 0, this.w, this.top);
      rect (this.x, height-this.bottom, this.w, this.bottom);
    }
    
    this.update = function() {
      this.x -= this.speed;
    }
    
  }
  function keyPressed(){
    if (key == ' '){
      bird.up();
    }
  }
  
  function draw() {
    background (0);
    bird.show();
    bird.physics();
    
    for (var i = 0; i <pipes.length; i++) {
     pipes[i].show();
     pipes[i].update();
    }
  } 

