let gameState = 0;
let eggs = [];
let foods = [];
let selectFoods = [];

let posx1, posx2, posx3;
let posy;

let state = 0;

let shotButton, restartButton, regenerateButton;

let ratio = 0.8;

function preload(){
  //Load egg
  for(let i = 0; i < 3; i++){
    let index = i;
    let path = "assets/egg"+index+".png";
    eggs.push(new Egg(path));
  }
  //Load vegan food
  for(let i = 1; i < 23; i++){
    let index = i;
    let path = "assets/food"+index+".png"
    foods.push(new Food(path));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  textFont("Coiny");

  //Resize the image
  for(let i = 0; i < eggs.length; i++){
    eggs[i].img.resize(0.2*eggs[i].img.width,0.2*eggs[i].img.height);
  }
  for(let i = 0; i < foods.length; i++){
    foods[i].img.resize(ratio*foods[i].img.width,ratio*foods[i].img.height);
  }
  setFoodLabel();
  for(let i = 0; i < 3; i++){
    let index = int(random(foods.length));
    selectFoods.push(foods[index]);
    foods.splice(index, 1);
  }

  posx1 = windowWidth/6;
  posx2 = windowWidth/2;
  posx3 = 5*windowWidth/6;
  posy = height/2;

  eggs[0].setPosition(posx1, posy);
  eggs[1].setPosition(posx2, posy);
  eggs[2].setPosition(posx3, posy);

  eggs[0].setLabel("breakfast");
  eggs[1].setLabel("lunch");
  eggs[2].setLabel("dinner");

  selectFoods[0].setPosition(posx1, posy);
  selectFoods[1].setPosition(posx2, posy);
  selectFoods[2].setPosition(posx3, posy);


  shotButton = createButton('Screenshot');
  shotButton.id("startIcon")
  shotButton.position(0.5*windowWidth/6, windowHeight*0.8);
  shotButton.mousePressed(screenshot);

  regenerateButton = createButton('Regenerate');
  regenerateButton.id("startIcon")
  regenerateButton.position(5*windowWidth/6, windowHeight*0.8);
  regenerateButton.mousePressed(regenerate);

  restartButton = createButton('Home');
  restartButton.id("startIcon")
  restartButton.position(2.6*windowWidth/6, windowHeight*0.8);
  restartButton.mousePressed(restart);
  shotButton.hide();
  regenerateButton.hide();
  restartButton.hide();
}

function draw() {
  background(255,207,131);
  for(let i = 0; i < eggs.length; i++){
      eggs[i].draw();
      eggs[i].update();
  }

  for(let i = 0; i < selectFoods.length; i++){
    selectFoods[i].draw();
    
   }

   state = 1;
   for(let i = 0; i < 3; i++){
       if(selectFoods[i].state == 0){
        state = 0;
       }
   }

   if(state == 1){
    shotButton.show();
    regenerateButton.show();
    restartButton.show();
   }
   
}

function mouseReleased(){
    for(let i = 0; i < eggs.length; i++)
    {
        if(dist(eggs[i].x,eggs[i].y,mouseX,mouseY) < 100)
        {
          document.getElementById('eggSound').play();
            eggs[i].state = 2;
            selectFoods[i].state = 1;
        }
    }
}

function setFoodLabel(){
    foods[0].setLabel("sandwich");
    foods[1].setLabel("ramen");
    foods[2].setLabel("sushi");
    foods[3].setLabel("pizza");
    foods[4].setLabel("BBQ");
    foods[5].setLabel("meat steak");
    foods[6].setLabel("waffles");
    foods[7].setLabel("cherry");
    foods[8].setLabel("fruit");
    foods[9].setLabel("salad");
    foods[10].setLabel("cabbage");
    foods[11].setLabel("pitaya");
    foods[12].setLabel("milk cereal");
    foods[13].setLabel("avocado");
    foods[14].setLabel("corn");
    foods[15].setLabel("congee");
    foods[16].setLabel("cheese");
    foods[17].setLabel("zucchini");
    foods[18].setLabel("broccoli");
    foods[19].setLabel("tofu");
    foods[20].setLabel("flatbread");
    foods[21].setLabel("eggs");
}

function screenshot(){
  document.getElementById('clickSound').play();
  save('myDiet.jpg');
}

function regenerate(){
  document.getElementById('clickSound').play();
  location.reload();
  location.href='page2.html';
}

function restart(){
  document.getElementById('clickSound').play();
  location.reload();
  location.href='index.html';
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

class Egg{
  constructor(_imgName){
      this.x = 0;
      this.y = 0;
      this.alpha = 255;
      this.img = loadImage(_imgName);
      this.state = 0;
      this.rotateSpeed = 0.01;
      this.label = "";
  }

  setPosition(_x,_y){
      this.x = _x;
      this.y = _y;
  }

  setLabel(_s){
      this.label = _s;
  }

  draw(){
      if(state != 2)
      {
          push();
          translate(this.x,this.y);
          rotate(sin(this.rotateSpeed*frameCount)/6);
          if(this.state == 0)
              image(this.img, 0, 0,this.img.width,this.img.height);
          else if(this.state == 1){
              image(this.img, 0, 0,this.img.width*1.2,this.img.height*1.2);
          }
          pop();
      }
      fill(100);
      textAlign(CENTER);
      textSize(46);
      text(this.label,this.x,this.y+160);
  }

  update(){
      if(this.state != 2)
      {
          if(dist(this.x, this.y, mouseX, mouseY) < 100)
          {
              this.state = 1;
          }
          else
          {
              this.state = 0;
          }
      }
     
  }
}