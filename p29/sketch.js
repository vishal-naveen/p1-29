const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var engine, world;
var polygon,polygon_img;
function preload(){
    polygon_img = loadImage("polygon.png")
}


function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    ground = new Ground(500,390,1000,20);
    stand1 = new Ground(450,280,315,10)
    stand2 = new Ground(780,180,210,10)
    box1 = new pinkbox(700,155,40,40);
    box2 = new pinkbox(741,155,40,40);
    box3 = new pinkbox(782,155,40,40);
    box4 = new pinkbox(823,155,40,40);
    box17 = new pinkbox(864,155,40,40);
    box5 = new bluebox(741,112,40,45);
    box6 = new bluebox(782,112,40,45);
    box7 = new bluebox(823,112,40,45);
    box8 = new bluebox(170,100,50,50);
    box9 = new greenbox(782,65,40,50);
    box10 = new greenbox(190,100,50,50);
    box11 = new greenbox(200,100,50,50);
    box12 = new greenbox(210,100,50,50);
    box13 = new orangebox(585,250,45,50);
    box14 = new orangebox(540,250,45,50);
    box15 = new orangebox(495,250,45,50);
    box16 = new orangebox(450,250,45,50);
    box18 = new orangebox(405,250,45,50);
    box19 = new orangebox(360,250,45,50);
    box20 = new orangebox(315,250,45,50);
    // polygon = new Polygon(100,100);
    
    polygon = Bodies.circle(50,200,200)
    World.add(world,polygon)
    

    slingShot = new SlingShot(this.polygon,{x:100,y:200})
    imageMode(CENTER)
    image(polygon_img, this.polygon.position.x, this.polygon.position.y,40,40)
   
}

function draw(){
    background("black")
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
    ground.display();
    stand1.display();
    stand2.display();
    // polygon.display();  
    box17.display();
    box18.display();
    box19.display();
    box20.display();

}