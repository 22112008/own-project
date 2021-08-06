var space,meteoroiods,stars,rocket;
var spaceImg,meteoroidImg,starImg,rocketImg;
var starsG,meteoroidG;
var treasureCollection=0;

//Game States
var PLAY=1;
var END=0;
var gameState=1;


function preload(){
    spaceImg = loadImage("space.jpg");
    meteoroiodsImg = loadImage("meteoroids.jpg");
    rocketImg = loadImage("rocket.png");
    starImg = loadImage("star.jpg");
  }
   

function setup(){
  createCanvas(400,600);
 
  //creating rocket flying
rocket = createSprite(70,580,20,20);
rocket.addImage("RocketFlying");
rocket.velocityY = 4;
rocket.scale = 0.5 ;

starG=new Group();
  meteoroidssG=new Group();

}

  function draw() {

    if(gameState===PLAY)
    background(0);
    rocket.x = World.mouseX;
    
    edges= createEdgeSprites();
    rocket.collide(edges);


    //code to reset the background
  if(space.y > 400 ){
    space.y = height/2;
  }
  createstar();
  createmeteoroid();
}

if (starG.isTouching(rocket)) {
  starG.destroyEach();
  treasureCollection=treasureCollection+50; 
}

  if (meteoroidG.isTouching(rocket)) {
     meteoroidG.destroyEach();
     
  }
{
  drawSprites();
  textSize(20);
  fill(255);
  text("Score: "+ treasureCollection,150,30);
  }

  function createstar() {
    if (World.frameCount % 200 == 0) {
    var star = createSprite(Math.round(random(50, 350),40, 10, 10));
    star.addImage(starImg);
    star.scale=0.12;
    star.velocityY = 3;
    star.lifetime = 150;
    starG.add(star);
    }
  }

  function createmeteoroid() {
    if (World.frameCount % 320 == 0) {
    var meteoroid = createSprite(Math.round(random(50, 350),40, 10, 10));
    meteoroiods.addImage(meteoroidImg);
    meteoroiod.scale=0.12;
    meteoroiod.velocityY = 3;
    meteoroiod.lifetime = 150;
    meteoroidG.add(meteoroiod);
    }
  }