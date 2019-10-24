$(document).ready(function(){

var button = ''

$("#clickable1").click(function(){
  button = 1;
  click(button);
});

$("#clickable2").click(function(){
  button = 2;
  click(button);
});

$("#clickable3").click(function(){
  button = 3;
  click(button);
});



function click(button) {
  if (button == 1) {
    $('#hidden1').slideDown();
  }
  else if (button == 2) {
    $("#hidden2").slideDown();
  }

  else if (button == 3) {
    $('#hidden3').slideDown();
  }

};


});
