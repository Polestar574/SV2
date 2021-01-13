var shooterstanding,shooterstandingImg,shooter_running,shooter,shooter_firring;
var jungle,jungleImg;
var button,buttonImg;
var jungle1,jungle1Img;
var bullet,bulletImg;
var gameState="START";
var firring;
var enemy,enemyfirringImg;
function preload(){
 
buttonImg=loadImage("button.png");
bulletImg=loadImage("bullet.png");
enemyfirringImg=loadImage("enemy firring.png");
shooter_running = loadAnimation("shooter1.png","shooter2.png","shooter3.png","shooter4.png","shooter5.png","shooter6.png");
shooterstandingImg=loadImage("shooterstanding.png");
jungleImg=loadImage("jungle.jpg");
shooter_firring.loadAnimation("firring1.png","firring2.png");

}
function setup() {
  createCanvas(900,400);
 
 button=createSprite(450,200,10,10);
 button.addImage(buttonImg);
 shooter=createSprite(100,250);
 shooter.addAnimation("shooter",shooter_running);
 shooter.scale=0.5;
 shooter.visible=false;
 enemy=createSprite(800,250,10,10);
 enemy.addImage(enemyfirringImg);
 enemy.scale=0.6;

}

function draw() {
  background(jungleImg);
  jungleImg.velocityX=-2;
  bullet=createSprite(195,215,5,5);
  bullet.addImage(bulletImg);
  bullet.scale=0.02;
 bullet.visible=false; 
  
  

  if(mousePressedOver(button)) { 
    button.visible = false;
  
  }
  if (gameState ==="START") {
    enemy.visible=false;
  
   if (button.visible === false) {
    textSize(25);
    fill("yellow");
    text("INTRODUCTION",340,40); 
    fill('yellow')
    text("YOU ARE A SPECIAL COMMANDO",200,80);
    fill("yellow");
    text("1-Army force have sent you on the base of terrorist",10,140);
    fill("yellow");
    text("2-They have gave you a mission",10,190);
    fill("yellow");
    text("3-Your mission is to kill all enemies and destroy their base",10,240);
    fill("yellow");
    text("4-And come back to your Army camp",10,290);
    fill("yellow");
    text("OK, Good Luck Commando",10,340);
    fill("white");
    text("Press- S -TO START THE GAME",200,390);
    fill("yellow");
    text("CONTROLS",708,110);
    fill("white");
    text("S-for shooting",700,140);
    
  }
}

if(keyDown("right_arrow")){
  bullet.visible=true;
bullet.velocityX=250;

}

if(keyDown("S")){
  gameState = "PLAY";
  enemy.visible=true;
 shooter.visible=true;
}
if (gameState ==="PLAY") {
  
  if(enemy.isTouching(bullet)){
      enemy.visible=false;
      
  }

}

  drawSprites();
} 

