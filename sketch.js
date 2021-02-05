const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand;
var b1, b2, b3, b4, b5, b6;
var hexagon, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Ground(390,225,300,20);
    b1 = new block(360,195,30,40);
    b2 = new block(390,195,30,40);
    b3 = new block(420,195,30,40);
    b4 = new block(375,155,30,40);
    b5 = new block(405,155,30,40);
    b6 = new block(390,115,30,40);
    hexagon= new hexa(100,200,50,50);
    slingShot = new Slingshot(hexagon.body,{x:100, y:180});
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    stand.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    hexagon.display(); 
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(hexagon.body);
    }
}