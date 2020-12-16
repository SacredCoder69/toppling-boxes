const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box (200,300,50,50);
    box2 = new Box (240,100,50,100);
    box3 = new Box (210,250,50,70);
    box4 = new Box (200,150,50,90);
    ground = new Ground (200,height,400,20);
    ground2 = new Ground(250,height,300,50)
}

function draw(){
    background("blue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    ground2.display();
}