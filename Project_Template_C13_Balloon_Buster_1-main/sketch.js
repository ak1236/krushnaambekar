var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImg = loadImage("arrow0.png");
  bowImg = loadImage("bow0.png");
  red_balloonImg = loadImage("red_balloon0.png");
  blue_balloonImg = loadImage("blue_balloon0.png");
green_balloonIag = loadImage("green_balloon0.png");
pink_balloonImg = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImg); 
  bow.scale = 1;
  score = 0;
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }

   

  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
     redBalloon();
    } else if (select_balloon == 2){
      greenBalloon();
    } else if(select_balloon == 2);{
      blueBalloon();
    } else{
      pinkBalloon();
    }


  }
  
  drawSprites();

 
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImg);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImg);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 380)), 10, 10);
  blue.addImage(blue_balloonImg);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20, 350)), 10, 10);
  green.addImage(green_balloonImg);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(30, 300)), 10, 10);
  pink.addImage(pink_balloonImg);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.1;
}
