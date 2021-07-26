var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function ()
  {

     var buttonText= this.innerHTML;
     SoundMaker(buttonText);
     ButtonAnimation(buttonText);

  });
}

// This function will check for key press
document.addEventListener("keypress", function(event){

// event.key select key property from event
  SoundMaker(event.key);
     ButtonAnimation(event.key);

});

function SoundMaker(key)
{
     switch (key) {
       case "w":var audio=new Audio("sounds/crash.mp3");
                audio.play();
         break;

         case "a":var audioa=new Audio("sounds/kick-bass.mp3");
         audioa.play();
         break;

         case "s":var audios=new Audio("sounds/snare.mp3");
         audios.play();
         break;

        case "d":var audiod=new Audio("sounds/tom-1.mp3");
        audiod.play();
        break;

        case "j":var audioj=new Audio("sounds/tom-2.mp3");
        audioj.play();
        break;

        case "k":var audiok=new Audio("sounds/tom-3.mp3");
        audiok.play();
        break;

        case "l":var audiol=new Audio("sounds/tom-4.mp3");
        audiol.play();
        break;

       default:alert("invalid");
}
}

function ButtonAnimation(Selectedkey)
{
  var key=document.querySelector("."+Selectedkey);
  key.classList.add("pressed");

  setTimeout(function(){
    key.classList.remove("pressed");},100);
}
