var bg, bgImg;
var b1, b2, b3, b4, b5, b6, b7, b8;
var ground, groundImg;
var moon, moonImg;
var mission, missionImg;
var target, targetImg;
var ufo, ufoImg;
var fire, fireImg;
var invisible, invisible2;
var comet, comet2, comet3, cometImg;
var gameState = "Start";
var score;
var sound1, sound2, sound3, sound4,sound5;
var wall, wall1;
var again, againImg;
var space, spaceImg;
var space2, spaceImg;
var click, clickImg;
var quote, quoteImg;
var lev2, lev2Img;
var party, partyImg;
var party2, party2Img;
var bg2, bg2Img;
var earth, earthImg;
var mars, marsImg;
var chand, chandImg;
var chand2, chand2Img;
var chand3, chand3Img;
var chand4, chand4Img;
var ast1, ast2, ast3, ast4, ast5, astImg;
var fire2, fire2Img;
var sound1, sound2, sound3, sound4,sound5, sound6, sound7, sound8, sound9, sound10, sound11;
var flag, flagImg;
var fail, failImg;
var line, lineImg;
var logo, logoImg;
var pic, picImg;
var step, stepImg;


function preload(){
  bgImg = loadImage("bg8.jpg");
  moonImg = loadImage("moon.png");
  b1Img = loadImage("Build 1.png");
  b2Img = loadImage("Build 5.png");
  b3Img = loadImage("Build 4.png");
  b4Img = loadImage("Build 1.png");
  b5Img = loadImage("Build 4.png");
  b6Img = loadImage("Build 5.png");
  b7Img = loadImage("Build 4.png");
  b8Img = loadImage("Build 5.png");
  missionImg = loadImage("tank2.png");
  targetImg = loadImage("t1.png");
  ufoImg = loadImage("mission.png");
  fireImg = loadImage("Fire 2.png");
  cometImg = loadImage("comet 3.png");  
  wall = loadImage("w2.jpg");
  againImg = loadImage("again.png");
  spaceImg = loadImage("space.png");
  clickImg = loadImage("click.png");
  quoteImg = loadImage("quote.webp");
  lev2Img = loadImage("level2.png");
  partyImg = loadImage("party.png");
  party2Img = loadImage("party2.png");
  bg2Img = loadImage("bg1.jpg");
  earthImg = loadImage("earth.png");
  marsImg = loadImage("mars.png");
  chandImg = loadImage("chand.png");
  chand2Img = loadImage("chand 2.png");
  chand3Img = loadImage("chand 3.png");
  chand4Img = loadImage("chand 4.png");
  astImg = loadImage("as.png");
  fire2Img = loadImage("f1.png");
  flagImg = loadImage("india.png");
  failImg = loadImage("fail.png");
  lineImg = loadImage("quote4.jpg");
  logoImg = loadImage("i2.png");
  picImg = loadImage("steps2.jpg");
  stepImg = loadImage("steps.jpg");

  sound1 = loadSound ("6.mp3");
  sound3 = loadSound ("5.mp3");
  sound5 = loadSound("5.mp3");
  sound6 = loadSound("india.mp3");
  sound7 = loadSound ("6.mp3");
  sound9 = loadSound ("5.mp3");
  sound11 = loadSound("1.mp3");
  
}

function setup() {

 var canvas = createCanvas (windowWidth, windowHeight);

    wall1 = createSprite(width-800,height-200,10,10);
    wall1.addImage(wall);
    wall1.scale = 3.0;

    bg = createSprite(width-800,height-200,10,10);
    bg.addImage(bgImg);
    bg.scale = 3.5;   
    bg.visible = false;
    
    moon = createSprite(1300,150);
    moon.addImage(moonImg);
    moon.scale = 0.06;
    moon.visible = false;
    
    b1 = createSprite(100,height-50,10,10);
    b1.addImage(b1Img);
    b1.scale = 0.3;
    b1.visible = false;

    b2 = createSprite(280,height-50,10,10);
    b2.addImage(b2Img);
    b2.scale = 0.2;
    b2.visible = false;

    b3 = createSprite(420,height-50,10,10);
    b3.addImage(b3Img);
    b3.scale = 0.5;
    b3.visible = false;

    b4 = createSprite(1100,height-50,10,10);
    b4.addImage(b4Img);
    b4.scale = 0.3;
    b4.visible = false;

    b5 = createSprite(950,height-50,10,10);
    b5.addImage(b5Img);
    b5.scale = 0.5;
    b5.visible = false;

    b6 = createSprite(820,height-50,10,10);
    b6.addImage(b6Img);
    b6.scale = 0.2;
    b6.visible = false;

    b7 = createSprite(1250,height-50,10,10);
    b7.addImage(b7Img);
    b7.scale = 0.5;
    b7.visible = false;

    b8 = createSprite(1390,height-50,10,10);
    b8.addImage(b8Img);
    b8.scale = 0.2;
    b8.visible = false;

    mission = createSprite(600,height-30,10,10);
    mission.addImage(missionImg);
    mission.scale = 0.08;
    mission.visible = false;

    ufo = createSprite(300,100,10,10);
    ufo.addImage(ufoImg);
    ufo.scale = 0.15;
    ufo.visible = false;

    ufo1 = createSprite(700,100,10,10);
    ufo1.addImage(ufoImg);
    ufo1.scale = 0.2;
    ufo1.visible = false;

    ufo2 = createSprite(1100,100,10,10);
    ufo2.addImage(ufoImg);
    ufo2.scale = 0.15;
    ufo2.visible = false;

    invisible = createSprite(2,700,2,100);
    invisible.visible = false;
    invisible.shapeColor = "red";

    invisible2= createSprite(1480,700,5,100);
    invisible2.visible = false;
    
    comet = createSprite(200, 0);
    comet.addImage(cometImg);
    comet.scale = 0.4;
    comet.velocityY = 7.0;
    comet.visible = false;

    again = createSprite(700,300,10,10);
    again.addImage(againImg);
    again.scale = 0.7;
    again.visible = false;

    step = createSprite(740,330,10,10);
    step.addImage(stepImg);
    step.scale = 0.46;
    step.visible = false;

    space = createSprite(1200,100,10,10);
    space.addImage(spaceImg);
    space.scale = 0.4;

    space2 = createSprite(280,100,10,10);
    space2.addImage(spaceImg);
    space2.scale = 0.4;

    click = createSprite(1400,700,10,10);
    click.addImage(clickImg);
    click.scale = 0.5;

    quote = createSprite(700,200,10,10);
    quote.addImage(quoteImg);
    quote.scale = 0.5;
    quote.visible = false;

    lev2 = createSprite(1100,200,10,10);
    lev2.addImage(lev2Img);
    lev2.scale = 0.4;
    lev2.visible = false;

    party = createSprite(300,200,10,10);
    party.addImage(partyImg);
    party.visible = false;
    party.scale = 0.5;

    party2 = createSprite(1200,400,10,10);
    party2.addImage(party2Img);
    party2.visible = false;
    party2.scale = 0.5;
  
    targetGroup = createGroup();

    score = 0;

    wallGroup =  new Group();
  
     bg2 = createSprite(width-800,height-400,10,10);
     bg2.addImage(bg2Img);
     bg2.scale = 1.5;
     bg2.visible = false;

     earth = createSprite(750,520,10,10);
     earth.addImage(earthImg);
     earth.scale = 0.06;
     earth.visible = false;

     mars = createSprite(120,120,10,10);
     mars.addImage(marsImg);
     mars.scale = 0.07;
     mars.visible = false;

     chand = createSprite(800,460,10,10);
     chand.addImage(chandImg);
     chand.scale = 0.035; 
     chand.visible = false;

     ast1 = createSprite(560,200,10,10);
     ast1.addImage(astImg);
     ast1.scale = 0.02;
     ast1.visible = false;

     ast2 = createSprite(550,530,10,10);
     ast2.addImage(astImg);
     ast2.scale = 0.02;
     ast2.visible = false;

     ast3 = createSprite(100,430,10,10);
     ast3.addImage(astImg);
     ast3.scale = 0.02;
     ast3.visible = false;

     ast4 = createSprite(300,100,10,10);
     ast4.addImage(astImg);
     ast4.scale = 0.02;
     ast4.visible = false;

     ast5 = createSprite(340,300,10,10);
     ast5.addImage(astImg);
     ast5.scale = 0.02;
     ast5.visible = false;

    rect1 = createSprite(220,580,400,20); 
    wallGroup.add(rect1);
    rect1.shapeColor = "white";
    rect1.visible = false;
    
    rect2 = createSprite(560,580,200,20);
    wallGroup.add(rect2);
    rect2.shapeColor = "white";
    rect2.visible = false;

    rect3 = createSprite(650,320,20,200);
    wallGroup.add(rect3);
    rect3.visible = false;
    rect3.shapeColor = "white";

    rect4 = createSprite(650,540,20,70);
    wallGroup.add(rect4);
    rect4.visible = false;
    rect4.shapeColor = "white";

    rect5 = createSprite(30,470,20,200);
    wallGroup.add(rect5);
    rect5.visible = false;
    rect5.shapeColor = "white";

    rect6 = createSprite(30,170,20,270);
    wallGroup.add(rect6);
    rect6.visible = false;
    rect6.shapeColor = "white";

    rect7 = createSprite(650,100,20,150);
    wallGroup.add(rect7);
    rect7.visible = false;
    rect7.shapeColor = "white";

    rect8 = createSprite(180,45,300,20);
    wallGroup.add(rect8);
    rect8.shapeColor = "white";
    rect8.visible = false;

    rect9 = createSprite(520,35,250,20);
    wallGroup.add(rect9);
    rect9.shapeColor = "white";
    rect9.visible = false;

    rect10 = createSprite(450,500,100,20);
    wallGroup.add(rect10);
    rect10.shapeColor = "white";
    rect10.visible = false;

    rect11 = createSprite(410,400,20,200);
    wallGroup.add(rect11);
    rect11.shapeColor = "white";
    rect11.visible = false;

    rect12 = createSprite(450,500,100,20);
  wallGroup.add(rect12);
  rect12.shapeColor = "white";
  rect12.visible = false;

    rect13 = createSprite(440,310,50,20);
  wallGroup.add(rect13);
  rect13.shapeColor = "white";
  rect13.visible = false;

    rect14 = createSprite(455,280,20,50);
  wallGroup.add(rect14);
  rect14.visible = false;
  rect14.shapeColor = "white";

    rect15 = createSprite(370,265,150,20);
  wallGroup.add(rect15);
  rect15.visible = false;
  rect15.shapeColor = "white";

    rect16 = createSprite(450,500,100,20);
  wallGroup.add(rect16);
  rect16.visible = false;
  rect16.shapeColor = "white";

    rect17 = createSprite(600,270,20,250);
  wallGroup.add(rect17);
  rect17.visible = false;
  rect17.shapeColor = "white";

    rect18 = createSprite(540,155,100,20);
  wallGroup.add(rect18);
  rect18.shapeColor = "white";
  rect18.visible = false;

    rect20 = createSprite(305,375,20,200);
  wallGroup.add(rect20);
  rect20.visible = false;
  rect20.shapeColor = "white";

    rect21 = createSprite(250,465,100,20);
  wallGroup.add(rect21);
  rect21.shapeColor = "white";
  rect21.visible = false;

    rect22 = createSprite(290,180,170,20);
  wallGroup.add(rect22);
  rect22.shapeColor = "white";
  rect22.visible = false;

    rect23 = createSprite(200,260,20,180);
  wallGroup.add(rect23);
  rect23.shapeColor = "white";
  rect23.visible = false;

    rect24 = createSprite(100,465,90,20);
  wallGroup.add(rect24);
  rect24.visible = false;
  rect24.shapeColor = "white";

    rect25= createSprite(65,370,20,200);
  wallGroup.add(rect25);
  rect25.shapeColor = "white";
  rect25.visible = false;

    rect26 = createSprite(65,200,20,50);
  wallGroup.add(rect26);
  rect26.shapeColor = "white";
  rect26.visible = false;

    rect27 = createSprite(180,340,40,20);
  wallGroup.add(rect27);
  rect27.shapeColor = "white";
  rect27.visible = false;

    rect28 = createSprite(170,255,20,150);
  wallGroup.add(rect28);
  rect28.shapeColor = "white";
  rect28.visible = false;
  
    rect31 = createSprite(490,90,150,20);
    wallGroup.add(rect31);
    rect31.shapeColor = "white";
    rect31.visible = false;
    
  flag = createSprite(450,330,10,10);
  flag.addImage(flagImg);
  flag.scale = 1.3;
  flag.visible = false;

  logo = createSprite(1000,400,10,10);
  logo.addImage(logoImg);
  logo.scale = 1.2;
  logo.visible = false;

  fail = createSprite(700,100,10,10);
  fail.addImage(failImg);
  fail.visible = false;

  line = createSprite(300,400,10,10);
  line.addImage(lineImg);
  line.visible = false;
  line.scale = 1.0;

  pic = createSprite(700,580,10,10);
  pic.addImage(picImg);
  pic.visible = false;
  pic.scale = 0.45;
  
} 


function draw() {
  background("blue");
 
 if ( mousePressedOver(click)){
   step.visible = true;
   
 }

 if (mousePressedOver(step)){
   gameState = "play";
   step.visible = false;
 }


  if (gameState === "play"){
    
   
    bg.visible = true;
    moon.visible = true;
    b1.visible = true;
    b2.visible = true;
    b3.visible = true;
    b4.visible = true;
    b5.visible = true;
    b6.visible = true;
    b7.visible = true;
    b8.visible = true;
    mission.visible = true;
    ufo.visible = true;
    ufo2.visible = true;
    ufo1.visible = true;
    invisible.visible = false;
    invisible2.visible = false;
    comet.visible = true;
    again.visible = false;
   space.visible = false;
   space2.visible = false;
  click.visible = false;
  quote.visible = false;
  lev2.visible = false;
  party.visible = false;
  party2.visible = false;
  mars.visible = false;
  earth.visible = false;
  chand.visible = false;
  bg2.visible = false;
  ast1.visible = false;
  ast2.visible = false;
  ast3.visible = false;
  ast4.visible = false;
  ast5.visible = false;
  rect1.visible = false;
rect2.visible = false;
rect3.visible = false;
rect4.visible = false;
rect5.visible = false;
rect6.visible = false;
rect7.visible = false;
rect8.visible = false;
rect9.visible = false;
rect10.visible = false;
rect11.visible = false;
rect12.visible = false;
rect13.visible = false;
rect14.visible = false;
rect15.visible = false;
rect16.visible = false;
rect17.visible = false;
rect18.visible = false;
rect20.visible = false;
rect21.visible = false;
rect22.visible = false;
rect23.visible = false;
rect24.visible = false;
rect25.visible = false;
rect26.visible = false;
rect27.visible = false;
rect28.visible = false;
rect31.visible = false;
flag.visible = false;
logo.visible = false;
pic.visible = false;


 if(keyWentDown("RIGHT_ARROW")){
   mission.velocityX =20;
   mission.velocityY =0;
  }
 if (keyWentDown("LEFT_ARROW")){
  mission.velocityX =-20;
   mission.velocityY =0;
 }
 if(keyWentUp("RIGHT_ARROW")){
  mission.velocityX =0;
  mission.velocityY =0;
 }
if (keyWentUp("LEFT_ARROW")){
 mission.velocityX =0;
  mission.velocityY =0;
}

if (keyWentDown("space")) {
  createSatellite(mission);
  sound3.play();
}


if (mission.isTouching(invisible)){
  mission.x = 300;
}

if (mission.isTouching(invisible2)){
  mission.x = 1300;
}

if (targetGroup.isTouching(comet)) {
  if (frameCount % 10 === 0) {
     comet.destroy();
      comet = createSprite(Math.round(random(50, 1350), Math.round(random(-400, 0))));
      comet.addImage(cometImg);
      comet.scale = 0.4;
      comet.velocityY = 7.0;
      score = score + 200;
      sound5.play();
  }
}

 
if (comet.y > height-30) {
  comet.x = Math.round(random(50, 1350));
  comet.y = 0;
}
if (comet.isTouching(b1)){
  b1.addImage(fireImg);
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b2)){
  b2.addImage(fireImg);
  sound1.play(); 
  gameState = "over"; 
}
if (comet.isTouching(b3)){
  b3.addImage(fireImg);
  sound1.play(); 
  gameState = "over"; 
}
if (comet.isTouching(b4)){
  b4.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b5)){
  b5.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b6)){
  b6.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b7)){
  b7.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b8)){
  b8.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
}


  if (gameState === "over"){
    comet.destroy();
    targetGroup.setVelocityXEach(0);
    invisible.visible = false;
    invisible2.visible = false;
  mission.visible = false;
 ufo.visible = false;
 ufo1.visible = false;
 ufo2.visible = false;
  again.visible = true;
  quote.visible = false;
  lev2.visible = false;
  mars.visible = false;
  earth.visible = false;
  chand.visible = false;
  bg2.visible = false;
  ast1.visible = false;
  ast2.visible = false;
  ast3.visible = false;
  ast4.visible = false;
  ast5.visible = false;
  rect1.visible = false;
  rect2.visible = false;
  rect3.visible = false;
  rect4.visible = false;
  rect5.visible = false;
  rect6.visible = false;
  rect7.visible = false;
rect8.visible = false;
rect9.visible = false;
rect10.visible = false;
rect11.visible = false;
rect12.visible = false;
rect13.visible = false;
rect14.visible = false;
rect15.visible = false;
rect16.visible = false;
rect17.visible = false;
rect18.visible = false;
rect20.visible = false;
rect21.visible = false;
rect22.visible = false;
rect23.visible = false;
rect24.visible = false;
rect25.visible = false;
rect26.visible = false;
rect27.visible = false;
rect28.visible = false;
rect31.visible = false;
fail.visible = false;
line.visible = false;
flag.visible = false;
logo.visible = false;
pic.visible = false;

  }


 if(score === 10000){
    mission.visible = false;
  moon.visible = false; 
  ufo.visible = false;
  ufo1.visible = false;
   ufo2.visible = false;
   targetGroup.destroyEach();
   comet.destroy();
   b1.visible = false;
   b2.visible = false;
   b3.visible = false;
   b4.visible = false;
   b5.visible = false;
   b6.visible = false;
   b7.visible = false;
   b8.visible = false;
   quote.visible = true;
   lev2.visible = true;
   party.visible = true;
   party2.visible = true;
   bg2.visible = false;
   chand.visible = false;
   mars.visible = false;
   earth.visible = false;
   ast1.visible = false;
   ast2.visible = false;
   ast3.visible = false;
   ast4.visible = false;
   ast5.visible = false;
   rect1.visible = false;
   rect2.visible = false;
   rect3.visible = false;
   rect4.visible = false;
   rect5.visible = false;
   rect6.visible = false;
   rect7.visible = false;
rect8.visible = false;
rect9.visible = false;
rect10.visible = false;
rect11.visible = false;
rect12.visible = false;
rect13.visible = false;
rect14.visible = false;
rect15.visible = false;
rect16.visible = false;
rect17.visible = false;
rect18.visible = false;
rect20.visible = false;
rect21.visible = false;
rect22.visible = false;
rect23.visible = false;
rect24.visible = false;
rect25.visible = false;
rect26.visible = false;
rect27.visible = false;
rect28.visible = false;
rect31.visible = false;
fail.visible = false;
line.visible = false;
flag.visible = false;
logo.visible = false;
pic.visible = true;

  }


if (touches.length>0 || mousePressedOver(lev2)){
  gameState = "level2";
  touches = []
}


if(gameState === "level2"){
  background ("white");
  bg.visible = false;
  wall1.visible = false;
  bg2.visible = true;
earth.visible = true;
mars.visible = true;
chand.visible = true;
quote.visible = false;
lev2.visible = false;
party.visible = false;
party2.visible = false;
ast1.visible = true;
ast2.visible = true;
ast3.visible = true;
ast4.visible = true;
ast5.visible = true;
rect1.visible = true;
rect2.visible = true;
rect3.visible = true;
rect4.visible = true;
rect5.visible = true;
rect6.visible = true;
rect7.visible = true;
rect8.visible = true;
rect9.visible = true;
rect10.visible = true;
rect11.visible = true;
rect12.visible = true;
rect13.visible = true;
rect14.visible = true;
rect15.visible = true;
rect16.visible = true;
rect17.visible = true;
rect18.visible = true;
rect20.visible = true;
rect21.visible = true;
rect22.visible = true;
rect23.visible = true;
rect24.visible = true;
rect25.visible = true;
rect26.visible = true;
rect27.visible = true;
rect28.visible = true;
rect31.visible = true;
flag.visible = false;
logo.visible = false;
pic.visible = false;


  if(touches.length>0 || keyWentDown("UP_ARROW")) {
    chand.velocityX = 0;
    chand.velocityY = -4;
    chand.addImage(chand2Img);
    touches = []
  }
  if(touches.length>0 || keyWentUp("UP_ARROW")) {
    chand.velocityX = 0;
    chand.velocityY = 0;
    //chand.addImage(chand2Img);
    touches = []
  }
  if(touches.length>0 || keyWentDown ("DOWN_ARROW")){
  chand.velocityX =0;
  chand.velocityY =4;
  chand.addImage(chand3Img);
  touches = []
  
  }
  if(touches.length>0 || keyWentUp ("DOWN_ARROW")){
    chand.velocityX =0;
    chand.velocityY =0;
    //chand.addImage(chand3Img);
    touches = []
    
    }
  if(touches.length>0 || keyWentDown("RIGHT_ARROW")){
    chand.velocityX =4;
    chand.velocityY =0;
    chand.addImage(chand4Img);
    touches = []
  }
  if(touches.length>0 || keyWentUp("RIGHT_ARROW")){
    chand.velocityX =0;
    chand.velocityY =0;
   // chand.addImage(chand4Img);
   touches = []
  }
  if (touches.length>0 || keyWentDown("LEFT_ARROW")){
    chand.velocityX =-4;
    chand.velocityY =0;
    chand.addImage(chandImg);
    touches = []
  }
  if (touches.length>0 || keyWentUp("LEFT_ARROW")){
    chand.velocityX =0;
    chand.velocityY =0;
   // chand.addImage(chandImg);
   touches = []
  }
  if(chand.isTouching(rect1)){
    chand.destroy();
    chand = createSprite(800,460,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
sound9.play();
  }
  if(chand.isTouching(rect2)){
    chand.destroy();
    chand = createSprite(800,460,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect3)){
    chand.destroy();
    chand = createSprite(800,460,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect4)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect5)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect6)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect7)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect8)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect9)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect10)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect11)){
    
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect12)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect13)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect14)){
    
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect15)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect16)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect17)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect18)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  
  if(chand.isTouching(rect20)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect21)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect22)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect23)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect24)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect25)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect26)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect27)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
  if(chand.isTouching(rect28)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
    sound9.play();
  }
 
 
  if(chand.isTouching(rect31)){
    chand.destroy();
    chand = createSprite(800,450,10,10);
    chand.addImage(chandImg);
    chand.scale = 0.035; 
sound9.play();
  }
 if (chand.isTouching(ast1)){
   ast1.addImage(fire2Img);
   sound7.play();
  wallGroup.destroyEach();
   fail.visible = true;
   chand.visible = false;
   line.visible = true;
 }
  if (chand.isTouching(ast2)){
    ast2.addImage(fire2Img);
    sound7.play();
    wallGroup.destroyEach();
    fail.visible = true;
    chand.visible = false;
    line.visible = true;
  }
  if (chand.isTouching(ast3)){
    ast3.addImage(fire2Img);
    sound7.play();
    wallGroup.destroyEach();
    fail.visible = true;
    chand.visible = false;
    line.visible = true;
  }
  if (chand.isTouching(ast4)){
    ast4.addImage(fire2Img);
    sound7.play();
    wallGroup.destroyEach();
    fail.visible = true;
    chand.visible = false;
    line.visible = true;
  }
  if (chand.isTouching(ast5)){
    ast5.addImage(fire2Img);
    sound7.play();
    wallGroup.destroyEach();
    fail.visible = true;
    chand.visible = false;
    line.visible = true;
  }


  if(chand.isTouching(mars)){
 
    flag.visible = true;
    logo.visible = true;
    wallGroup.destroyEach();
  ast1.destroy();
    ast2.destroy();
    ast3.destroy();
    ast4.destroy();
    ast5.destroy();
  earth.destroy();
  text("Final Score:" + score, 200, 30); 
    
    sound6.play();
    
  }
 
}

drawSprites();
fill(rgb(81,5,147));
textSize(23);
text("HIGH SCORE: 10000",1100,40);

fill(rgb(79,26,130));
textSize(23);
text("Score: " + score, 130, 30);
  
}



function createSatellite() {
  var satellite = createSprite(100, 100, 5, 10);
  satellite.addImage(targetImg);
  satellite.y = 600;
  satellite.scale = 0.08;
  satellite.x = mission.x;
  satellite.velocityY = -5;
  satellite.lifetime = 1000;
  targetGroup.add(satellite);
}

