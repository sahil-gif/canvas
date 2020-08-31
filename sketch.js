var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var highlighter;

var form, player, game;

var cars, car1, car2, car3, car4;
var hurdle1, hurdle2, hurdle3, hurdle4,hurdle5,hurdle6,hurdle7, hurdle8, hurdle9, hurdle10,hurdle11,hurdle12,hurdle13, hurdle14, hurdle15, hurdle16,hurdle17,hurdle18;

var car1img, car2img, gndimg, trackimg, hurdleimg;

var floor1, floor2, floor3, floor4, floors=[];

var hurdles1=[], hurdles2=[], hurdles3=[];


function preload(){
  car1img=loadAnimation("blue1.png","blue2.png","blue3.png");
  car2img=loadAnimation("red1.png","red2.png","red3.png");
  car3img=loadAnimation("sit1.png","jump1.png");
  car4img=loadImage("robot111.png");
  gndimg=loadImage("ground.png");
  hurdleimg=loadImage("hurdle.png");
  trackimg=loadImage("Running track.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
