var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);
  
  thickness=random(22,83);
  speed=random(86,172);
  weight=random(30,52);

  bullet = createSprite(40,200,30,10);
  bullet.velocityX=speed;
  bullet.shapeColor=color("black");


  wall = createSprite(600,200,thickness,height/2);
  wall.shapeColor=color("pink");
  
}

function draw() {
  background("lightblue");  

 

  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocity=0;
    var damage=0.5*bullet.weight*bullet.speed*bullet.speed/wall.thickness*wall.thickness*wall.thickness
  }
  if(damage>10){
    wall.shapeColor=color("red");
  }
  if(damage<10){
    wall.shapeColor=color("green");
  }
  
  

  drawSprites();
}