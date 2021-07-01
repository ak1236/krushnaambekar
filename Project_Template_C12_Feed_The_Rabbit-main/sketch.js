var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

 if (frameCount % 80 == 0){
   if(select_sprites ==1){
     CreateApples();
   }
   else{
     CreateLeaf();
   }
 }

rabbit.x = World.mouseX;
  drawSprites();
  
}
function CreateApples(){
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale = 0.1;
apple.velocityY = 3;
apple.lifetime = 80;
}

function CreateLeaf (){
Leaf = createSprite(random(60,340),40,10,10)
Leaf.addImage(leafImg);
Leaf.scale = 0.1;
Leaf.velocityY = 3;
Leaf.lifetime = 100;
}




