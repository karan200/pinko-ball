var ball,ballIm;
var block1,block2,block3;
var GameState;
var play,end,outOfScreen;
var pauseButton,pauseButtonIm;

function preload() {

ballIm = loadImage("ball.png");
pauseButtonIm = loadImage("pause.png")

}

function setup() {
  createCanvas(displayWidth,400);

  ball = createSprite(100, 200, 50, 50);
  ball.addImage(ballIm);
  ball.scale = 0.5;

  block1 = createSprite(200, 200, 50, 50);

  pauseButton = createSprite(25, 50, 50, 50);
  pauseButton.addImage(pauseButtonIm);
  pauseButton.scale=0.5

  block2 = createSprite(300, 200, 50, 50);

  block3 = createSprite(400, 200, 50, 50);

}

function draw() {
  background("green");

  if(GameState === play) {

    if(mouseDown()) {
    ball.velocityY=-7;
    //ball.velocityY=5;
    }else{
      ball.velocityY=8;
    }

  }

  if(mouseDown()) {
    GameState=play;
  }
    
  if(GameState === end) {

   

  }
  drawSprites();
}
