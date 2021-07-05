var bg, bgImg
var distance=0;
var king
var queen
var s2, s3, s4
var gamestate="play";

function preload(){
  bgImg=loadImage("Castle background.png")
  bgImg2=loadImage("Castle background2.png")
  bgImg3=loadImage("Castle background3.png")
  bgImg4=loadImage("Castle background4.png")
  kingImg=loadAnimation("download (1).png","download (2).png","download (3).png")
  queenImg=loadImage("download (4).png")
  s1Img=loadImage("s1.png")
  s2Img=loadImage("s2.png")
  s3Img=loadImage("s3.png")
  s4Img=loadImage("s4.png")
  gameover=loadImage("download.png")
  youwon=loadImage("youwon1.png")
}
function setup() {
  createCanvas(600, 400);
  
  bg=createSprite(300,100,1500,20)
  bg.addImage(bgImg)
  bg.scale=1.4
  
  king=createSprite(50,270)
  king.addAnimation("running",kingImg)

  s1=createSprite(300,270)
  s1.addImage(s1Img)
  s1.scale=0.4
  s1.velocityX=3

  s2=createSprite(300,270)
  s2.addImage(s2Img)
  s2.scale=0.4
  s2.velocityX=3
  s2.visible=false

  s3=createSprite(300,260)
  s3.addImage(s3Img)
  s3.scale=0.4
  s3.velocityX=3
  s3.visible=false

  s4=createSprite(300,250)
  s4.addImage(s4Img)
  s4.scale=0.4
  s4.velocityX=3
  s4.visible=false

  

  ground=createSprite(300,315,600,2)
  ground.visible=false;
}

function draw() {
  if(distance===110){
    bg.addImage(bgImg2)
    king.x=25
    bg.y=155
    s1.visible=false
    s2.visible=true
  }
  if(distance===230){
    bg.addImage(bgImg3)
    king.x=25
    bg.scale=2.2
    bg.y=130
    s2.visible=false
    s3.visible=true
    king.y=240
    s3.y=240
  }
  if(distance===350){
    bg.addImage(bgImg4)
    king.x=25
    bg.scale=2.7
    bg.y=163
    king.y=250
    queen=createSprite(500,270)
    queen.addImage(queenImg)
    queen.scale=0.5
    s3.visible=false
    s4.visible=true
  }
  if(distance===430){
    bg.addImage(youwon)
    bg.scale=2
    king.visible=false
    s1.visible=false
    s2.visible=false
    s3.visible=false
    s4.visible=false
    queen.visible=false
  }
  if(keyDown(RIGHT_ARROW)){
    king.x+=5
    distance=distance+1;
  }
  if(keyDown(LEFT_ARROW)){
    king.x-=5
    distance=distance-1;
  }
  if(keyDown(UP_ARROW)){
    king.y=king.y-80
  }
  // if(king.isTouching(s1)||king.isTouching(s2)||king.isTouching(s3)||king.isTouching(s4)){
  //   gamestate="end"
  // }
  if(gamestate==="end"){
    bg.addImage(gameover)
    bg.scale=2.5
    bg.y=180
    king.visible=false
    s1.visible=false
    s2.visible=false
    s3.visible=false
    s4.visible=false
  }
 
  king.y=king.y+5
  console.log(distance)
  drawSprites()
  edges=createEdgeSprites();
  s1.bounceOff(edges)
  s2.bounceOff(edges)
  s3.bounceOff(edges)
  s4.bounceOff(edges)
  king.collide(ground)
  king.bounceOff(edges)
}