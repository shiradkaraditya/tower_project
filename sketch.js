const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() 
{
  createCanvas(1536,600);

  engine = Engine.create(); 
  world = engine.world;
  
  ground1 = new Ground(650,550,400,20);
  ground2 = new Ground(1300,300,200,20);
  ground3 = new Ground(1300,570,200,20);

  push();
  fill("blue");
  box1 = new Box(650,450,50,80,);
  box2 = new Box(600,450,50,80);
  box3 = new Box(550,450,50,80);
  box4 = new Box(500,450,50,80);
  box5 = new Box(700,450,50,80);
  box6 = new Box(750,450,50,80);
  box7 = new Box(800,450,50,80);
  box35 = new Box(1300,490,50,80);
  box36 = new Box(1350,490,50,80);
  box37 = new Box(1250,490,50,80);
  pop();

  push();
  fill("red");
  box8 = new Box(725,390,50,80);
  box9 = new Box(775,390,50,80);
  box10 = new Box(675,390,50,80);
  box11 = new Box(625,390,50,80);
  box12 = new Box(575,390,50,80);
  box13 = new Box(525,390,50,80);
  box38 = new Box(1325,430,50,80);
  box39 = new Box (1275,430,50,80);
  pop();

  push();
  fill("orange");
  box14 = new Box(650,330,50,80);
  box15 = new Box(700,330,50,80);
  box16 = new Box(750,330,50,80);
  box17 = new Box(600,330,50,80);
  box18 = new Box(550,330,50,80);
  box40 = new Box(1300,370,50,80);
  pop();

  push();
  fill("yellow");
  box19 = new Box(575,270,50,80);
  box20 = new Box(625,270,50,80);
  box21 = new Box(675,270,50,80);
  box22 = new Box(725,270,50,80);
  pop();

  push();
  fill("#add8e6");
  box23 = new Box(700,210,50,80);
  box24 = new Box(650,210,50,80);
  box25 = new Box(600,210,50,80);
  box29 = new Box(1250,250,50,80);
  box30 = new Box(1300,250,50,80);
  box31 = new Box(1350,250,50,80);
  pop();

  push();
  fill("pink");
  box26 = new Box(625,150,50,80);
  box27 = new Box(675,150,50,80);
  box32 = new Box(1325,190,50,80);
  box33 = new Box(1275,190,50,80);
  pop();

  push();
  fill("white");
  box28 = new Box(650,90,50,80);
  box34 = new Box(1300,130,50,80);
  pop();

  polygon = new Polygon(150,160,50,50);

  slingshot = new Slingshot(polygon.body,{x:150,y:160});
  slingshot2 = new Slingshot(polygon.body,{x:150,y:180});

}

 text("SCORE :" +score, 750,40);


function draw() 
{
  background("black"); 
  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();

  polygon.display();

  slingshot.display();
  slingshot2.display();

  push();
  textSize(30);
  fill("white");
  text("Press Space for second chances!!",768,50);
  pop();

  drawSprites();
}

         
function mouseDragged()
{
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
  slingshot.fly();
  slingshot2.fly();
}

function keyPressed()
{
  if(keyCode ===32){
      slingshot.attatched(polygon.body);
      slingshot2.attatched(polygon.body);
  }
}

async function getBackgroundImg() {
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=06 && hour<=19){
      bg="sprites/bg.png";

  }
  else{
      bg="sprites/bg2.jpg";

  }
  backgroundImg = loadImage(bg);
}