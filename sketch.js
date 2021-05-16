
var monkey , monkey_running
var banana,spawnBanana ,bananaImage,  obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  
  ground.velocityX=-4;
  console.log(ground.x);
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
background(250);

  stroke("black");
  textSize(20);
  fill("black");
  text("Score:"+score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
  
ground.x= ground.width/2;
if (keyDown("space")){
  monkey.velocityY=-12;
}
 monkey.velocityY=monkey.velocityY+0.8;
  
 monkey.collide(ground);
  
  spawnBanana();
  spawnObstacles();
  
  if(FoodGroup.isTouching(monkey)){

    FoodGroup.destroyEach(banana);
    score=score+1;
  }
  
  if(obstacleGroup.isTouching(monkey)){

    FoodGroup.destroyEach();
    obstacleGroup.setVelocityXEach(0);
    monkey.changeAnimation()
    
  }
  
drawSprites();
  
}

function spawnBanana(){
  if(frameCount%60===0){
  var banana=createSprite(400,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
   banana.velocityX = -3;
    
    banana.lifetime=200;
    FoodGroup.add(banana);
    
  }
}

function spawnObstacles(){
  if(frameCount%300===0){
    var obstacle=createSprite(500,315,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    
    obstacle.scale=0.19;
    obstacle.lifetime=200;
    
    obstacleGroup.add(obstacle);
  }
}






