function Running() {
  document.getElementById("move").style.webkitAnimationPlayState = 'running';
  document.getElementById("one").style.webkitAnimationPlayState = 'running';
  document.getElementById("move").style.visibility = "visible";
  }

function Paused() {
  document.getElementById("move").style.webkitAnimationPlayState="paused";
  document.getElementById("one").style.webkitAnimationPlayState="paused";
  document.getElementById("move").style.visibility = "hidden";
  } 

function Running2() {
  document.getElementById("move2").style.webkitAnimationPlayState = 'running';
  document.getElementById("move2").style.visibility = "visible";
  }

function Paused2() {
  document.getElementById("move2").style.webkitAnimationPlayState="paused";
  document.getElementById("move2").style.visibility = "hidden";
  } 

function Running3() {
  document.getElementById("move3").style.webkitAnimationPlayState = 'running';
  document.getElementById("move3").style.visibility = "visible";
  }

function Paused3() {
  document.getElementById("move3").style.webkitAnimationPlayState="paused";
  document.getElementById("move3").style.visibility = "hidden";
  } 

function Running4() {
  document.getElementById("move4").style.webkitAnimationPlayState = 'running';
  document.getElementById("four").style.webkitAnimationPlayState = 'running';
  document.getElementById("move4").style.visibility = "visible";
  }

function Paused4() {
  document.getElementById("move4").style.webkitAnimationPlayState="paused";
  document.getElementById("four").style.webkitAnimationPlayState="paused";
  document.getElementById("move4").style.visibility = "hidden";
  } 


  function play1() {  
var audio1 = document.getElementById("Loop1");
  if (audio1.paused){
    audio1.play();
    audio1.volume = 0.60;
    document.getElementById('playimage1').src="_images/pause.png";
    Running();
  }
  else {
    audio1.pause();
    document.getElementById('playimage1').src="_images/play.png";
    Paused();
  }
  audio1.addEventListener('ended', repeat);
  function repeat(){
    document.getElementById('playimage1').src="_images/repeat.png";
    document.getElementById("move").style.webkitAnimationPlayState="paused";
    document.getElementById("one").style.webkitAnimationPlayState="paused";
    document.getElementById("move").style.visibility = "hidden";

  }
  }
  var audioslider1 = document.getElementById("audioslider1");
  audioslider1.addEventListener("mousemove", slow1);

function slow1() {  
var audio1 = document.getElementById("Loop1");
  audio1.playbackRate = audioslider1.value / 1;
  var one = document.getElementById("one");
 if (audioslider1.value == 1) {
  one.style.webkitAnimationDuration = "12s";}
    else if (audioslider1.value == 1.25) {
        one.style.webkitAnimationDuration = "8s";} 
          else if (audioslider1.value == 1.5) {
            one.style.webkitAnimationDuration = "6s";}
              else if (audioslider1.value == .75) {
                one.style.webkitAnimationDuration = "20s";}
                  else if (audioslider1.value == .50) {
                    one.style.webkitAnimationDuration = "24s";} 
  var move = document.getElementById("move");
 if (audioslider1.value == 1) {
  move.style.webkitAnimationDuration = "2s";}
    else if (audioslider1.value == 1.25) {
        move.style.webkitAnimationDuration = "1s";} 
          else if (audioslider1.value == 1.5) {
            move.style.webkitAnimationDuration = "0.5s";}
              else if (audioslider1.value == .75) {
                move.style.webkitAnimationDuration = "4s";}
                  else if (audioslider1.value == .50) {
                    move.style.webkitAnimationDuration = "6s";} 
    }


var volumeslider1 = document.getElementById("volumeslider1");
  volumeslider1.addEventListener("mousemove", setvolume1);

function setvolume1(){
  var audio1 = document.getElementById("Loop1");
  audio1.volume = volumeslider1.value / 1;
   if (volumeslider1.value == 0.60) {
  move.style.width = "30px";}
    else if (volumeslider1.value == 0.80) {
        move.style.width = "50px";} 
          else if (volumeslider1.value == 1) {
            move.style.width = "70px";}
              else if (volumeslider1.value == .40) {
                move.style.width = "20px";}
                  else if (volumeslider1.value == .20) {
                    move.style.width = "10px";} 
}

function play2() {  
var audio2 = document.getElementById("Loop2");
  if (audio2.paused){
    audio2.play();
    audio2.volume = 0.60;
    document.getElementById('playimage2').src="_images/pause.png";
    Running2();
  }
  else {
    audio2.pause();
    document.getElementById('playimage2').src="_images/play.png";
    Paused2();
  }
    audio2.addEventListener('ended', repeat);
  function repeat(){
  document.getElementById('playimage2').src="_images/repeat.png";
  document.getElementById("move2").style.webkitAnimationPlayState="paused";
  document.getElementById("move2").style.visibility = "hidden";
  }
};

var audioslider2 = document.getElementById("audioslider2");
  audioslider2.addEventListener("mousemove", slow2);

function slow2() {  
var audio2 = document.getElementById("Loop2");
  audio2.playbackRate = audioslider2.value / 1;
  var move2 = document.getElementById("move2");
 if (audioslider2.value == 1) {
  move2.style.webkitAnimationDuration = "10s";}
    else if (audioslider2.value == 1.25) {
        move2.style.webkitAnimationDuration = "8s";} 
          else if (audioslider2.value == 1.5) {
            move2.style.webkitAnimationDuration = "5s";}
              else if (audioslider2.value == .75) {
                move2.style.webkitAnimationDuration = "12s";}
                  else if (audioslider2.value == .50) {
                    move2.style.webkitAnimationDuration = "14s";} 
};


var volumeslider2 = document.getElementById("volumeslider2");
  volumeslider2.addEventListener("mousemove", setvolume2);

function setvolume2(){
  var audio2 = document.getElementById("Loop2");
  audio2.volume = volumeslider2.value / 1;
   if (volumeslider2.value == 0.60) {
  move2.style.width = "30px";
  move2.style.height = "30px";}
    else if (volumeslider2.value == 0.80) {
        move2.style.width = "50px";
        move2.style.height = "50px";} 
          else if (volumeslider2.value == 1) {
            move2.style.width = "70px";
            move2.style.height = "70px";}
              else if (volumeslider2.value == .40) {
                move2.style.width = "20px";
                move2.style.height = "20px";}
                  else if (volumeslider2.value == .20) {
                    move2.style.width = "10px";
                    move2.style.height = "10px";} 
    };

function play3() {  
var audio3 = document.getElementById("Loop3");
  if (audio3.paused){
    audio3.play();
    audio3.volume = 0.60;
    document.getElementById('playimage3').src="_images/pause.png";
    Running3();
  }
  else {
    audio3.pause();
    document.getElementById('playimage3').src="_images/play.png";
    Paused3();
  }
    audio3.addEventListener('ended', repeat);
  function repeat(){
  document.getElementById('playimage3').src="_images/repeat.png";
  document.getElementById("move3").style.webkitAnimationPlayState="paused";
  document.getElementById("move3").style.visibility = "hidden";
  }
};

var audioslider3 = document.getElementById("audioslider3");
  audioslider3.addEventListener("mousemove", slow3);

function slow3() {  
var audio3= document.getElementById("Loop3");
  audio3.playbackRate = audioslider3.value / 1;
      var three = document.getElementById("three");
 if (audioslider3.value == 1) {
  three.style.webkitAnimationDuration = "12s";}
    else if (audioslider3.value == 1.25) {
        three.style.webkitAnimationDuration = "8s";} 
          else if (audioslider3.value == 1.5) {
            three.style.webkitAnimationDuration = "6s";}
              else if (audioslider3.value == .75) {
                three.style.webkitAnimationDuration = "20s";}
                  else if (audioslider3.value == .50) {
                    three.style.webkitAnimationDuration = "24s";} 
  var move3 = document.getElementById("move3");
 if (audioslider3.value == 1) {
  move3.style.webkitAnimationDuration = "5s";}
    else if (audioslider3.value == 1.25) {
        move3.style.webkitAnimationDuration = "3s";} 
          else if (audioslider3.value == 1.5) {
            move3.style.webkitAnimationDuration = "1s";}
              else if (audioslider3.value == .75) {
                move3.style.webkitAnimationDuration = "8s";}
                  else if (audioslider3.value == .50) {
                    move3.style.webkitAnimationDuration = "10s";} 
};


var volumeslider3 = document.getElementById("volumeslider3");
  volumeslider3.addEventListener("mousemove", setvolume3);

function setvolume3(){
  var audio3 = document.getElementById("Loop3");
  audio3.volume = volumeslider3.value / 1;
     if (volumeslider3.value == 0.60) {
  move3.style.height = "30px";}
    else if (volumeslider3.value == 0.80) {
        move3.style.height = "50px";} 
          else if (volumeslider3.value == 1) {
            move3.style.height = "70px";}
              else if (volumeslider3.value == .40) {
                move3.style.height = "20px";}
                  else if (volumeslider3.value == .20) {
                    move3.style.height = "10px";} 
    };

function play4() {  
var audio4 = document.getElementById("Loop4");
  if (audio4.paused){
    audio4.play();
    audio4.volume = 0.60;
    document.getElementById('playimage4').src="_images/pause.png";
    Running4();
  }
  else {
    audio4.pause();
    document.getElementById('playimage4').src="_images/play.png";
    Paused4();
  }
    audio4.addEventListener('ended', repeat);
  function repeat(){
  document.getElementById('playimage4').src="_images/repeat.png";
  document.getElementById("move4").style.webkitAnimationPlayState="paused";
  document.getElementById("move4").style.visibility = "hidden";
  }
};

var audioslider4 = document.getElementById("audioslider4");
  audioslider4.addEventListener("mousemove", slow4);

function slow4() {  
var audio4 = document.getElementById("Loop4");
  audio4.playbackRate = audioslider4.value / 1;
    var four = document.getElementById("four");
 if (audioslider4.value == 1) {
  four.style.webkitAnimationDuration = "12s";}
    else if (audioslider4.value == 1.25) {
        four.style.webkitAnimationDuration = "8s";} 
          else if (audioslider4.value == 1.5) {
            four.style.webkitAnimationDuration = "6s";}
              else if (audioslider4.value == .75) {
                four.style.webkitAnimationDuration = "20s";}
                  else if (audioslider4.value == .50) {
                    four.style.webkitAnimationDuration = "24s";} 
  var move4 = document.getElementById("move4");
 if (audioslider4.value == 1) {
  move4.style.webkitAnimationDuration = "5s";}
    else if (audioslider4.value == 1.25) {
        move4.style.webkitAnimationDuration = "3s";} 
          else if (audioslider4.value == 1.5) {
            move4.style.webkitAnimationDuration = "1s";}
              else if (audioslider4.value == .75) {
                move4.style.webkitAnimationDuration = "8s";}
                  else if (audioslider4.value == .50) {
                    move4.style.webkitAnimationDuration = "10s";}
};


var volumeslider4 = document.getElementById("volumeslider4");
  volumeslider4.addEventListener("mousemove", setvolume4);

function setvolume4(){
  var audio4 = document.getElementById("Loop4");
  audio4.volume = volumeslider4.value / 1;
       if (volumeslider4.value == 0.60) {
  move4.style.width = "30px";
  move4.style.height = "30px";}
    else if (volumeslider4.value == 0.80) {
        move4.style.width = "50px";
        move4.style.height = "50px";} 
          else if (volumeslider4.value == 1) {
            move4.style.width = "70px";
            move4.style.height = "70px";}
              else if (volumeslider4.value == .40) {
                move4.style.width = "20px";
                move4.style.height = "20px";}
                  else if (volumeslider4.value == .20) {
                    move4.style.width = "10px";
                    move4.style.height = "10px";} 
    };





	



 
