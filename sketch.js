var database;
var position;
var gameState = 0;
var playerCount = 0;
var game, player, form, allPlayers;
var car1, car2, car3, car4, cars;


function setup(){
  database = firebase.database();
  createCanvas(windowWidth-20,windowHeight-30);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
    
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
}


