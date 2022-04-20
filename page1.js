
let gameState = 0;
let eggs = [];
let normalFoods = [];
let veganFoods = [];
let imageWidth = 300;
let imageHeight = 200;

function preload(){
  //Load egg
  for(let i = 0; i < 3; i++){
    let index = i;
    let path = "assets/egg"+index+".png";
    eggs[i] = loadImage(path); 
  }
  //Load nomal food
  for(let i = 0; i < 24; i++){
    let index = i+1;
    let path = "assets/food"+index+".png"
    normalFoods[i] = new Food(path);
  }
  //Load vegan food
  for(let i = 7; i < 25; i++){
    let index = i;
    let path = "assets/food"+index+".png"
    veganFoods[i] = new Food(path);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  //Resize the image
  for(let i = 0; i < eggs.length; i++){
    eggs[i].resize(0.2*eggs[i].width,0.2*eggs[i].height);
  }
  for(let i = 0; i < normalFoods.length; i++){
    normalFoods[i].img.resize(0.2*normalFoods[i].img.width,0.2*normalFoods[i].img.height);
  }
}

function draw() {
  background(255,207,131);
  normalFoods[0].draw(mouseX,mouseY);
}

