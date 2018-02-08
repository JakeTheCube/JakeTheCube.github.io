var backGImg;
var spereImg; 
var heartImg;
var hpBarImg;
var scoreBImg;
var knight2Img;

var player = {
  px :280,
  py :250,
  pw :30,
  ph :30,
};
var wall1 ={
  px:1,
  py:1,
  pw:1,
  ph:500,
  
  
};
var wall2 ={
  px:500,
  py:1,
  pw:1,
  ph:500,
  
  
};
var wall3 ={
  px:1,
  py:15,
  pw:500,
  ph:1,
};
var wall4 ={
  px:1,
  py:500,
  pw:500,
  ph:1,
};
    var damge1 = 2
class deathCube  {
  constructor(px,py,pw,ph,hit,time){
  this.px = px;
  this.py = py;
  this.pw = 1;
  this.ph = 1;
  this.hit= false;
  this.time = 0;
  }
  //var piks = {
    //img:loadImage("block.png")
    
  //}
  
  
   
  hiting(){
   if(collision(this,wall2)){
     this.hit = true;
     
   }else{
     this.hit = false;
   }
 if(this.hit === true){
       //this.px = speed2;
       this.px = -20;
    
       this.py = Math.random()*500 ;
     }
     if(start2 === false && start3 === true){
       //start3 = false
      this.px = -30;
    }
    
   }
   hiting2(){
     if(collision(this,player)){
       //hp -= 2;
       hp -=damge1;
     }
     
   }
   drawSelf(){
     
     if(hp > 0){
     fill(1,1,1);
     image(spereImg,this.px,this.py,30,30);
     //rect(this.px,this.py,20,20);
     console.log(deathins.length);
    
    
    
     }
    
  }
  move(){
    this.px += speed3;
  }
  start2(){
    if(start2 === false){
      this.px = 1;
    }
    
  }
  
}

var speed3 = 5;
var right = false;
var left  = false;
var up    = false;
var down  = false;
var start3 = true;

var deathins = [];
var h = [];
 
/*class Haert  {
  constructor(y,x){
    this.x = 280;  //x;
    this.y = y;   //250;
    this.v = true;
    
  }
  drawSelf(){
    if(this.v === true){
      image(heartImg, this.x,this.y,20,20);
      if(this.y === player.py){
        //hp -= 2;
        hp += 20;
        this.v = false;
      }
    }
  }
}*/

var space = false;
var hp    = 50;

 function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    right = true;
  }
  else{
    right = false;
  }
   if(keyCode===LEFT_ARROW){
    left = true;
  }else{
    left = false;
  }
  if(keyCode===UP_ARROW){
    up = true;
    player.img = knight2Img
    start2 = true;
  }else{
    up = false;
    
    if(start2 === true){
    down = true;
    }
  }
  if(keyCode===DOWN_ARROW){
    down = true;
    player.img = knight1Img
     start2 = true;
  }else{
    down = false;
   
    if(start2 === true){
    up = true;
    }
  }
  if(keyCode===32){
    space = true;
  }else{
    space = false;
  }
};


 function collision(obj1,obj2){
  if (obj1.px + obj1.pw > obj2.px &&
    obj1.px < obj2.px + obj2.pw &&
    obj1.py + obj1.ph > obj2.py &&
    obj1.py < obj2.py + obj2.ph) {
      return true;
      }else{
      return false; 
      }

};




var start2 = false;

var skin1; 
var skin2;
var skin3;
var skin4;

var skinA

function setup(){
  createCanvas(500,520);
  player.img = loadImage("https://d14nx13ylsx7x8.cloudfront.net/repo_assets/assets/000/011/119/original/knigth2.png");

 //  = loadImage("skin1.png");
 // skin2 = loadImage("skin2.png");
  
  scoreBImg = loadImage("https://d14nx13ylsx7x8.cloudfront.net/repo_assets/assets/000/011/121/original/scoreB.png");
  hpBarImg = loadImage("https://i.imgur.com/DLDEtmA.png");
  backGImg = loadImage("https://d14nx13ylsx7x8.cloudfront.net/repo_assets/assets/000/011/130/original/backG2.png");
  heartImg = loadImage("https://d14nx13ylsx7x8.cloudfront.net/repo_assets/assets/000/011/126/original/heart.png");
  spereImg = loadImage("https://d14nx13ylsx7x8.cloudfront.net/repo_assets/assets/000/011/127/original/sper.png");
  knight2Img = loadImage("https://d14nx13ylsx7x8.cloudfront.net/repo_assets/assets/000/011/119/original/knigth2.png");
  knight1Img = loadImage("https://d14nx13ylsx7x8.cloudfront.net/repo_assets/assets/000/011/118/original/knigth1.png");
  console.log(up +"and"+start);
 
};

var start = true;
var map1 = {

px:-1,
py:-1,
pw:510,
ph:510,
//img:loadImage("map1.png")
};



var score =  0; 
var speed  =   3;
var speed2 = -10;
var scoreNum = 30;
var timer = 0





var scorex = 367;
var hScore = 0;


function draw(){
  image(hpBarImg,0,0,500,50)
  
 if(up === true && start === true){
    for (var sp1 = 0; sp1 < 9; sp1++){
      deathins.push(new deathCube(100,Math.random()*500));
     console.log("spere");
    start = false;
    }
  }
  

  /*if(h.length < 10 ){
    h.push(new Haert(Math.random()*500));
  }*/
  
  
if(score > hScore){
  hScore = round(score);
}
  
  if(start2 === false){
    speed3 = 0;
    damge1 = 0;
    score = 0;
  }else{
    damge1 = 2;
    speed3 = 5;
    start3 = false;
  }
  
  
  if(start === true && left === true){
    skinA += 1;
  }
  
 if(skinA === 1 ){
   player.img = skin1;
 }
  
  
  if(hp < 0 ){
    hp=0;
  }
     
     
     
     
 if(score > 100){
    scorex = 352;
  } else{
    if(score < 100){
      scorex = 367;
    }
  }
  
  right = false;
  fill(300,300,300);
  //rect(-1,-1,510,525);
  //image(map.img,map.px,map.py,map.pw,map.ph)
  image(backGImg,-1,-1,510,520);
  //keyPressed();
  if(hp>0 && start ===false){
 score += 0.05}
  if(up===true){
    player.py -= speed;
  }
  if(down===true){
    player.py += speed;
  }
  
  if(collision(player,wall1)){
    player.px += 6.00000001;
    //right = false
    hp -= 1;
  }
  if(collision(player,wall2)){
    player.px -= 6.000000000000001;
    //right = false
    hp -= 1;
  }
  if(collision(player,wall3)){
    player.py += 6.00000000001;
    //right = false
    hp -= 1;
  }
  if(collision(player,wall4)){
    player.py -= 6.0000000000001;
    hp -= 1;
    //right = false
  }
  
  
  if(hp === 0 ){
    
    start3 = true;
    start2 = false;
    //rect(-1,-1,510,510) 
    image(scoreBImg,-1000,170,4000,140);
    //image(spere,1,70,400,400)
    textSize(64);
    speed = 0;
    speed2= 0;
    fill(1,1,1);
    text("game over",100,220);
    textSize(32);
    text("press space to reloded",100,255);
    //fill(300,300,300);
    
    text("high score "+hScore,120,295);
    if(space === true){
      hp = 50;
      speed = 3;
      score = 0;
      player.py = 250;
    }
    //text("game over",250,250)
  }
  
  //image(this.pik,this.px,this.py,this,this.pw,this.ph)
  if (hp > 0){
 image(player.img,player.px,player.py,player.pw,player.ph);
 //image(heart,heart.px,heart.py,heart.pw,heart.ph);
  }
   for (var sp = 0; sp < deathins.length; sp++){
     deathins[sp].drawSelf(); 
     deathins[sp].move(); 
     deathins[sp].hiting(); 
     deathins[sp].hiting2(); 
     //deathins[sp].start2(); 
   }
 
  
  

  
 
 
 
  if(hp > 0){
    fill(100,100,100)
    rect(1,1,500,20);
    fill (300,1,1);
    rect(1,1,hp*10,20);
    image(hpBarImg,1,1,500,21);
   fill(1,1,1);
   textSize(32);
   image(scoreBImg,350,10,155,40);
   text("score "+round(score),scorex,40);
  }



 };