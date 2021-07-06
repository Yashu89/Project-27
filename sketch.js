
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5
var roof
var chain1, chain2, chain3, chain4, chain5

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   roof = new Roof(400, 100, 400, 30)

   bob1 = new Ball(280, 300)
   bob2 = new Ball(340, 300)
   bob3 = new Ball(400, 300)
   bob4 = new Ball(460, 300)
   bob5 = new Ball(520, 300)

   chain1 = new Chain(bob1.body , roof.body,-120,0)
   chain2 = new Chain(bob2.body , roof.body, -60, 0 )
   chain3 = new Chain(bob3.body , roof.body, 0, 0)
   chain4 = new Chain(bob4.body , roof.body, +60, 0)
   chain5 = new Chain(bob5.body , roof.body, +120, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  roof.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()

  drawSprites();
 
}

function keyPressed(){
     if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-550,y:0})
	 }

}

