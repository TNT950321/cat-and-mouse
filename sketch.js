var tomWalkingImg, tomHappyImg, tomImg, tom;
var jerryTuntImg, jerryHappyImg, jerryImg, jerry;
var backgroundImg, background;

function preload() {
    tomWalkingImg = loadAnimation("cat3.png", "cat2.png");
    tomImg = loadImage("cat1.png");
    tomHappyImg = loadImage("cat4.png");
    jerryTuntImg = loadAnimation("mouse2.png", "mouse3.png");
    jerryImg = loadImage("mouse1.png");
    jerryHappyImg = loadImage("mouse4.png");
    backgroundImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    tom = createSprite(850,700,10,10);
    tom.scale = 0.2;

    jerry = createSprite(150,750,10,10)
    
    jerry.scale = 0.1;
    tom.debug=true
    jerry.debug=true
    
    
}

function draw() {
    tom.setCollider("rectangle",0,0,tom.width,tom.height);
    jerry.setCollider("rectangle",0,0,jerry.width,jerry.height);
    background(backgroundImg);
    tom.addImage(tomImg);
    jerry.addImage(jerryImg);
    //Write condition here to evalute if tom and jerry collide
    if (keyDown("left")) {
      keyPressed();
    }
    if (tom.x-jerry.x<jerry.width/2+tom.width/2){
        tom.addImage("happy", tomHappyImg);
        tom.changeAnimation("happy", tomHappyImg)
        jerry.addImage("happy", jerryHappyImg);
        jerry.changeAnimation("happy", jerryHappyImg);
        tom.velocityX=0;
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  tom.addAnimation("walking", tomWalkingImg)  
  tom.changeAnimation("walking", tomWalkingImg)
    tom.scale = 0.2;
    tom.velocityX=-10;
    jerry.addAnimation("tunting",jerryTuntImg);
    jerry.changeAnimation("tunting",jerryTuntImg)
    jerry.scale = 0.1;
}
