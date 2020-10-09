
var fixedRect,movingRect
var box1, box2,box3
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100, 200, 100, 50);
  fixedRect.debug = true 
  movingRect.debug= true
  movingRect.shapeColor = "blue"
  box1 = createSprite(100, 200, 50, 50);
  box2 = createSprite(100, 300, 100, 50);
  box3 = createSprite(100, 100, 10,110)

}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX

  console.log( movingRect.x - fixedRect.x)
  console.log( movingRect.width/2 + fixedRect.width/2)
  movingRect.y = mouseY

if(isTouching(box1,movingRect)){
  box1.shapeColor= "yellow"
}
else {
  box1.shapeColor= "pink"
}
 

if(isTouching(box3,movingRect)){
  box3.shapeColor= "yellow"
}
else {
  box3.shapeColor= "pink"
}



isTouching(box3, box2 )
  drawSprites();
} 




