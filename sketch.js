const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine, world, object;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var object_options = {
    isStatic: true
  }
  object=Bodies.rectangle(600,300,20,20);
  World.add(world, object);
  console.log(object.position.x);
  console.log(object.position.y);
  console.log(object.type);
  console.log("HI");

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(400,200,20,20);
  rect(object.position.x, object.position.y,50,50);
  
}