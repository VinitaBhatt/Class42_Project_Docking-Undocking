var issImg, spaceCraftImg,spaceCraftImg1,spaceCraftImg2,spaceCraftImg3, spacebg;
var hasDocked = false;
var iss,spaceCraft;

function preload(){
  issImg = loadImage("images/iss.png");
  spaceCraftImg = loadImage("images/spacecraft1.png");
  spaceCraftImg1 = loadImage("images/spacecraft3.png");
  spaceCraftImg2 = loadImage("images/spacecraft4.png");
  spaceCraftImg3 = loadImage("images/spacecraft2.png");
  spacebg = loadImage("images/spacebg.jpg");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.35;

  spaceCraft = createSprite(285,240);
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale=0.15;

}

function draw() {
  background(spacebg);  
  drawSprites();
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + Math.round(random(-1,1));

    if(keyDown("up")){
      spaceCraft.addImage(spaceCraftImg3);
      spaceCraft.y = spaceCraft.y-2;
    }

    if(keyDown("down")){
      spaceCraft.y = spaceCraft.y+2;
    }

    if(keyDown("right")){
      spaceCraft.addImage(spaceCraftImg2);
      spaceCraft.x = spaceCraft.x+2;
    }

    if(keyDown("left")){
      spaceCraft.addImage(spaceCraftImg1);
      spaceCraft.x = spaceCraft.x-2;
    }

    
  }

  if(spaceCraft.y <= (iss.y+50) && spaceCraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  
}