const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];
var particle;

var divisionHeight = 300;
var score =0;
var count = 0;
var gameState ="start";


function setup() {

    // canvas
    createCanvas(windowWidth-10,windowHeight-10);

    // creating engine
    engine = Engine.create();

    // adding to world
    world = engine.world;


    // creating grounds
    lowerborder = new Ground(240, 848.5, windowWidth*windowWidth, 15);
    leftborder = new Ground(windowWidth-windowWidth+4, 375, 15, 960);
    rightborder = new Ground(windowWidth-20, 375, 15, 960);



    // creating bars 
    for (var i = 0+21; i <= windowWidth; i = i + 80) {
        divisions.push(new Bar(i, 814 - 300 / 2, 20, 350));
    }


    // plinkos
    for (var k = 40; k <= windowWidth-10; k = k + 50) {
        plinkos.push(new Plinko(k, 75));
    }


    for (var k = 80; k <= windowWidth-20; k = k + 50) {
        plinkos.push(new Plinko(k, 175));
    }


    for (var k = 40; k <= windowWidth; k = k + 50) {
        plinkos.push(new Plinko(k, 275));
    }


    for (var k = 80; k <= windowWidth-80; k = k + 50) {
        plinkos.push(new Plinko(k, 375));
    }


}

function draw() {

    // background
    background("white");

    // update
    Engine.update(engine);

    // score
    textSize(40);
    fill("cyan");
    stroke("cyan");
  strokeWeight(3);
  text("Score : "+score,20,40);



  // text of scores
  fill(255, 106, 0);
  stroke(255, 106, 0);
  strokeWeight(2.5);
  textSize(26);

  text(" 1000 ", 26, 558);
  text(" 1000 ", 106, 558);
  text(" 1000 ", 186, 550);
  text(" 1000 ", 266, 550);
  text(" 1000 ", 346, 550);

  text(" 500 ", 426, 550);
  text(" 500 ", 506, 550);
  text(" 500 ", 586, 550);
  text(" 500 ",666, 550);
  text(" 500 ",746, 550);

  text(" 200 ", 826, 550);
  text(" 200 ", 906, 550);
  text(" 200 ", 986, 550);
  text(" 200 ", 1066, 550);
  text(" 200 ", 1146, 550);

  text(" 100 ", 1226, 550);
  text(" 100 ", 1306, 550);
  text(" 100 ", 1386, 550);
  text(" 100 ", 1466, 550);

  text(" 50 ", 1546, 550);
  text(" 50 ", 1640, 550);
  


  // displaying
    lowerborder.display();
    leftborder.display();
    rightborder.display(); 

    // when game ends
    if (gameState === "end"){
    
        textSize(200);
        fill("red")
        text("Game Over",400,400)
        // return
    }


    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }


    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();  
     }
    
       if(particle!=null)
       {
          particle.display();
           
           if (particle.body.position.y>760)

           {


                 if (particle.body.position.x < 400) 
                 {
                     score=score+1000;      
                     particle=null;
                     if ( count>= 10) 

                     gameState ="end";                          
                 }
   

   
                 else if (particle.body.position.x < 780 && particle.body.position.x > 401 ) 
                 {
                       score = score + 500;
                       particle=null;
                       if ( count>= 10) gameState ="end";
   
                 }



                 else if (particle.body.position.x < 1180 && particle.body.position.x > 781 )
                 {
                       score = score + 200;
                       particle=null;
                       if ( count>= 10)  gameState ="end";
   
                 }  
                 


                 else if (particle.body.position.x < 1590 && particle.body.position.x > 1181 )
                 {
                       score = score + 100;
                       particle=null;
                       if ( count>= 10)  gameState ="end";
   
                 }  



                 else if (particle.body.position.x < 1790 && particle.body.position.x > 1591 )
                 {
                       score = score + 50;
                       particle=null;
                       if ( count>= 10)  gameState ="end";
   
                 }  
                 
           }
     
         }
   


      for (var k = 0; k < divisions.length; k++) 
      {
        divisions[k].display();
      }
    
   }
   
   


   // function mouse pressed 
   function mousePressed()

   {

     if(gameState!=="end")

     {

         count++;
        particle=new Particle(mouseX, 10, 10, 10); 
        
     }   
   }

