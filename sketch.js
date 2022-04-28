let foods = "sandwich,ramen,sushi,pizza,BBQ,meat,steak,waffles,cherry,fruit,salad,cabbage,pitaya,milk,cereal,avocado,corn,congee,cheese,zucchini,broccoli,tofu,flatbread,eggs."

function setup(){

}

function draw(){
  if(frameCount % 30 == 0)
    generateWords();
}

function generateWords(){
  let rm = RiTa.markov(2);
  rm.addText(foods);
  let sentences = rm.generate(2);
  document.querySelector("#foodIntroduction").innerHTML = sentences;
}