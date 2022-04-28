let foods = [];
let inp;

function preload(){
  //Load nomal food
  for(let i = 0; i < 22; i++){
    let index = i+1;
    let path = "assets/food"+index+".png"
    foods[i] = new Food(path);
    foods[i].state = 1;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textFont("Coiny");

  for(let i = 0; i < foods.length; i++){
    let ratio = random(0.7, 0.9);
    foods[i].img.resize(ratio*foods[i].img.width,ratio*foods[i].img.height);
  }

  inp = createInput('');
  inp.position(width/2-100, height/2);
  inp.size(150,30);

  button = createButton('Select');
  button.position(inp.x + inp.width+5, inp.y );
  button.size(80,36)
  button.mousePressed(myInputEvent);
  
}

function draw() {
  background(255,207,131);
  for(let i = 0; i < foods.length; i++){
      foods[i].draw();
      foods[i].fall();
  }
  fill(100);
  textSize(15);
  text("(Please fill in 'normal' or 'vegetarian')", inp.x+inp.width*0.8, inp.y+1.5*inp.height);
}

function myInputEvent(){
  console.log(inp.value());
  document.getElementById('clickSound').play();
  if(inp.value() == "normal"){
    location.reload();
  location.href='page2.html';

  }else if(inp.value() == "vegetarian"){
    location.reload();
  location.href='page3.html';

  }
}

class Food{
  constructor(_imgName){
      this.x = random(windowWidth);
      this.y = random(-2000);
      this.alpha = 255;
      this.img = loadImage(_imgName);
      this.state = 0;
      this.fallSpeed = random(1,2);
      this.rotateSpeed = random(0.005,0.01);
      this.label = "";
      this.state = 0;
  }

  setPosition(_x,_y){
      this.x = _x;
      this.y = _y;
  }

  setLabel(_s){
      this.label = _s;
  }

  draw(){
      if(this.state == 1)
      {
          push();
          translate(this.x,this.y);
          rotate(sin(this.rotateSpeed*frameCount)/6);
          image(this.img, 0, 0);
          pop();
          fill(100);
          textAlign(CENTER);
          textSize(36);
          text(this.label,this.x,this.y+110);
      }
  }
  
  fall(){
      this.y += this.fallSpeed;
      if(this.y > windowHeight + 200){
          this.y = random(-2000);
      }
  }
}