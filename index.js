$(".wel,.change").animate({letterSpacing:'6px'});
$(".registerr").click(function(){
var newFirst = prompt("Please enter your name");
$(".start").addClass("btnstart");
$(".stop").addClass("btnstop");
$(".restart").addClass("btnrestart");
$("input").removeClass("btn2");
var firstSlice = (newFirst.slice(0,1));
var capsLock = (firstSlice.toUpperCase(0,1));
var restWord = (newFirst.slice(1,newFirst.length));
var newFrame = (capsLock+restWord);
$(".change").text(newFrame);
$(".change").animate({right: '25px'},{left:'36px'});
});
$(".Aboutu").click(function(){
  $(".wel").addClass("para");
  $(".change").addClass("hid");
  $(".library").addClass("lib-height");
var textFirst =  $(".wel").text("There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.")
textFirst.animate({letterSpacing:'6px'});
});
window.onload = function () {

  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.querySelector('.btnstart');
  var buttonStop = document.querySelector('.btnstop');
  var buttonReset = document.querySelector('.btnrestart');
  var Interval ;

  buttonStart.onclick = function() {

    // clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }

    buttonStop.onclick = function() {
       clearInterval(Interval);
  }


  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }



  function startTimer () {
    tens++;

    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9){
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

  }


}
