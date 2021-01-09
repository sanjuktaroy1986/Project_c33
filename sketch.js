var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var score=0;

var particle;
var turn=0;
var gameState="play";
var count=0;

var divisionHeight=300;
var score =0;
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
  text("Score-"+score,20,130)
 text("500",20,530);
 text("500",100,530);
 text("500",180,530);
 text("500",260,530);
 text("100",340,530);
 text("100",420,530);
 text("100",500,530);
 text("200",580,530);
 text("200",660,530);
 text("200",740,530);


   Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){

    particle.display();

    if(particle.body.position.y>750){

      if(particle.body.position.x<320 && particle.body.position.x>0){
        score=score+500;
       }
       if(particle.body.position.x>320 && particle.body.position.x<560 ){
           score=score+100;
       }
       if(particle.body.position.x>560 && particle.body.position.x<800 ){
        score=score+200;
    }
      particle=null;
      if(turn>=5){
        gameState="end"
       }
    }
   }

   if(gameState==="end"){
     textSize(30);
     text("GAME OVER", 350,400)
   }
}

function mousePressed(){
  {
    if(gameState==="play"){
     turn++;
     
     particle=new Particle(mouseX,10,10,10);
     
    
    }


  }
}