var sea, ship, seaImg, shipImg

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png", "ship-2.png","ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite (200, 200, 200, 200);
  sea.addImage (seaImg);
  sea.scale = 0.5;
  sea.velocityX = -5;
  ship = createSprite (150, 200, 150, 150);
  ship.addAnimation ("navio", shipImg);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
    if(sea.x < -600){
      sea.x = sea.width/4;
    }
  drawSprites();

 
}
