var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;
 
var divisions = [];
var particles;
var plinkos = [];

var divisionHeight=300;
var score = 0;
var turn = 0;
var gamestate = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
   
   


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  if(particles != null){
    particles.display();
    if(particles.body.position.y > 700){
      if(particles.body.position.x > 240 && particles.body.position.x < 400){
        score = score + 500;
        particles = null;
        if(turn >= 5){
          gamestate = "end";
        }
      }
    }
  } 
  if(particles != null){
    particles.display();
    if(particles.body.position.y > 700){
      if(particles.body.position.x < 240){
        score = score + 300;
        particles = null;
        if(turn >= 5){
          gamestate = "end";
        }
      }
    }
  } 
  if(particles != null){
    particles.display();
    if(particles.body.position.y > 700){
      if(particles.body.position.x > 400 && particles.body.position.x < 640){
        score = score + 200;
        particles = null;
        if(turn >= 5){
          gamestate = "end";
        }
      }
    }
  } 
  if(particles != null){
    particles.display();
    if(particles.body.position.y > 700){
      if(particles.body.position.x > 640){
        score = score + 400;
        particles = null;
        if(turn >= 5){
          gamestate = "end";
        }
      }
    }
  } 
  if(gamestate === "end"){
    push();
    fill("white");
    strokeWeight(3);
    stroke("white");
    textSize(50);
    text("Game Over", 250, 450);
    pop();
  }
  console.log(turn);
}

function mousePressed(){
  if (gamestate != "end"){
    particles = new Particle(mouseX, 10, 10);
    turn = turn + 1;
  }
}