let gameState = 0;
let eggs = [];
let foods = [];
let selectFoods = [];

let posx1, posx2, posx3;
let posy;

let state = 0;

let shotButton, restartButton, regenerateButton;

function preload(){
  //Load egg
  for(let i = 0; i < 3; i++){
    let index = i;
    let path = "assets/egg"+index+".png";
    eggs.push(new Egg(path));
  }
  //Load vegan food
  for(let i = 7; i < 25; i++){
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
    foods[i].img.resize(0.2*foods[i].img.width,0.2*foods[i].img.height);
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
  regenerateButton.position(2.6*windowWidth/6, windowHeight*0.8);
  regenerateButton.mousePressed(regenerate);

  restartButton = createButton('Restart');
  restartButton.id("startIcon")
  restartButton.position(5*windowWidth/6, windowHeight*0.8);
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
            eggs[i].state = 2;
            selectFoods[i].state = 1;
        }
    }
}

function setFoodLabel(){
    foods[0].setLabel("waffles");
    foods[1].setLabel("waffles");
    foods[2].setLabel("cherry");
    foods[3].setLabel("cherry");
    foods[4].setLabel("fruit");
    foods[5].setLabel("salad");
    foods[6].setLabel("cabbage");
    foods[7].setLabel("dragon");
    foods[8].setLabel("milk");
    foods[9].setLabel("avocado");
    foods[10].setLabel("corn");
    foods[11].setLabel("congee");
    foods[12].setLabel("cheese");
    foods[13].setLabel("zucchini");
    foods[14].setLabel("broccoli");
    foods[15].setLabel("tofu");
    foods[16].setLabel("cake");
    foods[17].setLabel("egg");
}

function screenshot(){
    save('myDiet.jpg');
}

function regenerate(){
    location.reload();
    location.href='page2.html';
}

function restart(){
    location.reload();
    location.href='index.html';
}