var back 


function preload(){
this.image=loadImage("MACOSX/h.png");

}

function setup() {
  createCanvas(800,400);
  back=createSprite(400, 200, 50, 50);
  //back.addImage("_MACOSX/Hot Air Ballon-01.png")
}

function draw() {
  background("MACOSX/h.png");  
  drawSprites();
}
