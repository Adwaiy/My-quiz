var canvas,backgroundImage;
var gameState=0;
var contestantCount;
var allContestants;
var answer;
var database;


function setup(){
  canvas = createCanvas(850,400);
  database=firebase.datbase();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();


}


function draw(){
  background("pink");
if(contestantCount===4){
  quiz.update(1);
}
if(gameState===1){
  clear();
  quiz.play();
}
  
}
