var fr,mr;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor = "blue";

  mr = createSprite(400, 200, 50, 50);
  mr.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  mr.x = World.mouseX;
  mr.y = World.mouseY;

  if(mr.x - fr.x < fr.width/2 + mr.width/2 && 
    fr.x - mr.x < fr.width/2 + mr.width/2 &&
    mr.y - fr.y < fr.width/2 + mr.width/2 && 
    fr.y - mr.y < fr.width/2 + mr.width/2 
    ) {
    fr.shapeColor = "pink";
    mr.shapeColor = "pink";
  }
  else{
    fr.shapeColor = "blue";
    mr.shapeColor = "blue";
  }


  drawSprites();
}