var ship,ship_running,edges;
var groundImage;
function preload(){
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
groundImage = loadAnimation("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(50,160,20,50);
  ship.addAnimation("running", ship_running);
  edges = createEdgesSprites();


ship.scale = 0.5;
ship.x=50;


ground=createSprite(200,200,400,50);
ground.addImage("sea",groundImage);
ground.x=ground.width/2;




}
function draw() {
  background("white");
 
  console.log(ship.y)


  if(keyDown("space")){
ship.velocityY -10;

  }

   ground.velocityX=-2;
   console.log(ground.x);
   ship.velocityY = ship.velocityY + 0.5;
   if(ground.x<0) {
     ground.x=ground.width/2;
   }
   
ship.collide(ground);
drawSprites();








}