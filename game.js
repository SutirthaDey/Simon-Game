var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
$(document).keypress(function(){
  gamePattern=[];
  userClickedPattern=[];
  level=0;
  newSequence();
});
$(".btn").click(function(){
var userChosenColour=this.id;
console.log(gamePattern);
console.log(userClickedPattern);
userClickedPattern.push(userChosenColour);
playSound(this.id);
animatePress(this.id);
checkEquality();
});
function newSequence()
{
$("h1").text("Level "+level);
var randomNumber=Math.round((Math.random())*3);
var randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
animatePress(randomChosenColour);
playSound(randomChosenColour);
}
function checkEquality()
{
var flag=false;
for(var start=0;start<userClickedPattern.length;start++)
  {
    if(userClickedPattern[start]!=gamePattern[start])
    {
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    setTimeout(function(){playSound('wrong')},300);
    $("h1").text("Game Over,Press Any key to restart");
    $("body").addClass('game-over');
    setTimeout(function(){
      $("body").removeClass('game-over');
    },100);
    flag=true;
    break;
    }
  }
if(userClickedPattern.length==gamePattern.length && flag==false)
  {
   level++;
   userClickedPattern=[];
   setTimeout(newSequence,1000);
  }
}
function playSound(name)
{
var audio=new Audio(name+".mp3")
audio.play();
}
function animatePress(currentColour)
{
$('#'+currentColour).addClass('pressed');
setTimeout(function(){
  $('#'+currentColour).removeClass('pressed');
},100);
}
