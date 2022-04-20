let foods = [];


function preload(){
  //Load nomal food
  for(let i = 0; i < 24; i++){
    let index = i+1;
    let path = "assets/food"+index+".png"
    foods[i] = new Food(path);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  for(let i = 0; i < foods.length; i++){
    let ratio = random(0.1, 0.2);
    foods[i].img.resize(ratio*foods[i].img.width,ratio*foods[i].img.height);
  }
}

function draw() {
  background(255,207,131);
  for(let i = 0; i < foods.length; i++){
      foods[i].draw();
      foods[i].fall();
  }
}
