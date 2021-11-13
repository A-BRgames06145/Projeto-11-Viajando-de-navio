var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png");
  boyImg = loadAnimation ("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
}

function setup(){
  createCanvas(400,400);
 path = createSprite (200,200,200,200);
path.addImage (pathImg);
path.velocityY = 4;
path.scale=1.2;

boy = createSprite (200, 300, 100, 100);
boy.addAnimation ("João", boyImg);
boy.scale=0.8;

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);

  boy.x=World.mouseX;

  edges= createEdgeSprites();
  
  boy.collide(edges[3]);
  boy.collide (rightBoundary);
  boy.collide (leftBoundary);

  if(path.y > 350 ){
    path.y = height/2;
  }
  
  drawSprites();
}
