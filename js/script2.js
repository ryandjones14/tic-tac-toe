$(function(){


playerMove();

$('.square').on('click', function(){
  if($(this).children().hasClass('fa')){ //user can't play on same spot
    return false;
  }else if (xMoveCount%2!=0){ //Player O plays
    $(this).append('<i class="fa fa-circle-o"></i>');
    xMoveCount++;
    oMoveCount++;
    console.log(xMoveCount);
    console.log(oMoveCount);
  } else if (xMoveCount%2===0){ //Player X plays
    $(this).append('<i class="fa fa-times"></i>');
    xMoveCount++;
    oMoveCount++;
    console.log(xMoveCount);
    console.log(oMoveCount);
  }

  playerMove();
  checkColumns();
  checkRows();
  checkDiagonals();
  tieGame();
});

$('#reset-board').on('click', function(){
  $('.square').empty();
  xMoveCount=0;
  oMoveCount=0;
});

$('#reset-score').on('click', function(){
  $('.square').empty();
  xMoveCount=0;
  p1Score=0;
  $('#p1-score').html('0');
  p2Score=0;
  $('#p2-score').html('0');

});

$('#background-change').on('click', function(){
  changeBackground()
})

});


var xMoveCount=0;
var oMoveCount=0;

var p1Score=0;
var p2Score=0;

function tieGame(){
  if(xMoveCount===9){
    alert("tie");
    $('.square').empty();
    xMoveCount=0;
    oMoveCount=0;
  }else if (oMoveCount===10){
    alert("tie");
    $('.square').empty();
    xMoveCount=-1;
    oMoveCount=1;
  }
}

function checkColumns(){
  if ($('#a').children().hasClass("fa-times") && $('#b').children().hasClass("fa-times") && $('#c').children().hasClass("fa-times") || $('#d').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#f').children().hasClass("fa-times") || $('#g').children().hasClass("fa-times") && $('#h').children().hasClass("fa-times") && $('#i').children().hasClass("fa-times")){
      alert("X WINS!");
      $('.square').empty();
      p1Score++;
      $('#p1-score').html(p1Score);
      xMoveCount=-1;
      oMoveCount=1;
  }else if ($('#a').children().hasClass("fa-circle-o") && $('#b').children().hasClass("fa-circle-o") && $('#c').children().hasClass("fa-circle-o") || $('#d').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#f').children().hasClass("fa-circle-o") || $('#g').children().hasClass("fa-circle-o") && $('#h').children().hasClass("fa-circle-o") && $('#i').children().hasClass("fa-circle-o")){
      alert("O WINS!")
      $('.square').empty();
      p2Score++;
      $('#p2-score').html(p2Score);
      xMoveCount=0;
      oMoveCount=0;

  }
};

function checkRows(){
  if ($('#a').children().hasClass("fa-times") && $('#d').children().hasClass("fa-times") && $('#g').children().hasClass("fa-times") || $('#b').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#h').children().hasClass("fa-times") || $('#c').children().hasClass("fa-times") && $('#f').children().hasClass("fa-times") && $('#i').children().hasClass("fa-times")){
      alert("X WINS!");
      $('.square').empty();
      p1Score++;
      $('#p1-score').html(p1Score);
      xMoveCount=-1;
      oMoveCount=1;
  }else if ($('#a').children().hasClass("fa-circle-o") && $('#d').children().hasClass("fa-circle-o") && $('#g').children().hasClass("fa-circle-o") || $('#b').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#h').children().hasClass("fa-circle-o") || $('#c').children().hasClass("fa-circle-o") && $('#f').children().hasClass("fa-circle-o") && $('#i').children().hasClass("fa-circle-o")){
      alert("O WINS!")
      $('.square').empty();
      p2Score++;
      $('#p2-score').html(p2Score);
      xMoveCount=0;
      oMoveCount=0;
  }
};

function checkDiagonals(){
  if ($('#a').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#i').children().hasClass("fa-times") || $('#c').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#g').children().hasClass("fa-times")){
      alert("X WINS!");
      $('.square').empty();
      p1Score++;
      $('#p1-score').html(p1Score);
      xMoveCount=-1;
      oMoveCount=1;
  }else if ($('#a').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#i').children().hasClass("fa-circle-o") || $('#c').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#g').children().hasClass("fa-circle-o")){
      alert("O WINS!")
      $('.square').empty();
      p2Score++;
      $('#p2-score').html(p2Score);
      xMoveCount=0;
      oMoveCount=0;
  }
};

function playerMove(){
  if(oMoveCount%2!=0){
    console.log('howdy');
    $('#p1').removeClass('my-move');
    $('#p2').addClass('my-move');
  }else{
    console.log('hello');
    $('#p2').removeClass('my-move');
    $('#p1').addClass('my-move');
  }
};

function changeBackground(){
  var randomBackground=Math.floor(Math.random()*5);
  var backgroundChange=randomBackground.toString();
  $('body').removeClass().addClass("back"+backgroundChange);
};
