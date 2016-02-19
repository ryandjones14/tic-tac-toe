$(function(){

var moveCount=0;

playerMove();

$('.square').on('click', function() {
  if(moveCount%2===0){
    $(this).append('<i class="fa fa-times"></i>');
    moveCount++;
    console.log(moveCount);
  }else if (moveCount%1===0){
    $(this).append('<i class="fa fa-circle-o"></i>');
    moveCount++;
    console.log(moveCount);
  }

  playerMove();
  checkColumns();
  checkRows();
  checkDiagonals();
  tieGame();
});



});

moveCount=0;
var p1Score=0;
var p2Score=0;

function tieGame(){
  if(moveCount===9){
    alert("tie");
  }
}

function checkColumns(){
  if ($('#a').children().hasClass("fa-times") && $('#b').children().hasClass("fa-times") && $('#c').children().hasClass("fa-times") || $('#d').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#f').children().hasClass("fa-times") || $('#g').children().hasClass("fa-times") && $('#h').children().hasClass("fa-times") && $('#i').children().hasClass("fa-times")){
      alert("X WINS!");
      $('.square').empty();
      p1Score++;
      $('#p1-score').html(p1Score);
  }else if ($('#a').children().hasClass("fa-circle-o") && $('#b').children().hasClass("fa-circle-o") && $('#c').children().hasClass("fa-circle-o") || $('#d').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#f').children().hasClass("fa-circle-o") || $('#g').children().hasClass("fa-circle-o") && $('#h').children().hasClass("fa-circle-o") && $('#i').children().hasClass("fa-circle-o")){
      alert("O WINS!")
      $('.square').empty();
      p2Score++;
      $('#p2-score').html(p2Score);
  }
};

function checkRows(){
  if ($('#a').children().hasClass("fa-times") && $('#d').children().hasClass("fa-times") && $('#g').children().hasClass("fa-times") || $('#b').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#h').children().hasClass("fa-times") || $('#c').children().hasClass("fa-times") && $('#f').children().hasClass("fa-times") && $('#i').children().hasClass("fa-times")){
      alert("X WINS!");
      $('.square').empty();
      p1Score++;
      $('#p1-score').html(p1Score);
  }else if ($('#a').children().hasClass("fa-circle-o") && $('#d').children().hasClass("fa-circle-o") && $('#g').children().hasClass("fa-circle-o") || $('#b').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#h').children().hasClass("fa-circle-o") || $('#c').children().hasClass("fa-circle-o") && $('#f').children().hasClass("fa-circle-o") && $('#i').children().hasClass("fa-circle-o")){
      alert("O WINS!")
      $('.square').empty();
      p2Score++;
      $('#p2-score').html(p2Score);
  }
};

function checkDiagonals(){
  if ($('#a').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#i').children().hasClass("fa-times") || $('#c').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#g').children().hasClass("fa-times")){
      alert("X WINS!");
      $('.square').empty();
      p1Score++;
      $('#p1-score').html(p1Score);
  }else if ($('#a').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#i').children().hasClass("fa-circle-o") || $('#c').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#g').children().hasClass("fa-circle-o")){
      alert("O WINS!")
      $('.square').empty();
      p2Score++;
      $('#p2-score').html(p2Score);
  }
};

function playerMove(){
  if(moveCount%2===0){
    console.log('howdy');
    $('#p1').toggleClass('my-move')
  }else{
    console.log('hello');
    $('#p2').toggleClass('my-move');
  }
};
