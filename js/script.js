$(function(){

var moveCount=0;

playerMove();

  $('.square').on('click', function() {
    if(moveCount%2===0){
      $(this).append('<i class="fa fa-times"></i>');
      moveCount++;
      console.log(moveCount);
    }else{
      $(this).append('<i class="fa fa-circle-o"></i>');
      moveCount++;
      console.log(moveCount);
    }



checkColumns();
checkRows();
checkDiagonals();

  });

});

moveCount=0;
var p1Score=0;
var p2Score=0;

// function play(){
//   checkColumns();
//   checkRows();
//   checkDiagonals();
//   moveCount=0;
//   //tieGame();
// }



function tieGame(){
  if(moveCount%9===0){
    alert("tie");
  }
}

function checkColumns(){
  if ($('#a').children().hasClass("fa-times") && $('#b').children().hasClass("fa-times") && $('#c').children().hasClass("fa-times") || $('#d').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#f').children().hasClass("fa-times") || $('#g').children().hasClass("fa-times") && $('#h').children().hasClass("fa-times") && $('#i').children().hasClass("fa-times")){
      console.log(moveCount);
      alert("X WINS!");
      $('.square').empty();
      p1Score++;
      $('#p1-score').html(p1Score);
      console.log("Board has been reset.")
  }else if ($('#a').children().hasClass("fa-circle-o") && $('#b').children().hasClass("fa-circle-o") && $('#c').children().hasClass("fa-circle-o") || $('#d').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#f').children().hasClass("fa-circle-o") || $('#g').children().hasClass("fa-circle-o") && $('#h').children().hasClass("fa-circle-o") && $('#i').children().hasClass("fa-circle-o")){
      console.log(moveCount);
      alert("O WINS!");
      $('.square').empty();
      p2Score++;
      $('#p2-score').html(p2Score);
  }
};

function checkRows(){
  if ($('#a').children().hasClass("fa-times") && $('#d').children().hasClass("fa-times") && $('#g').children().hasClass("fa-times") || $('#b').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#h').children().hasClass("fa-times") || $('#c').children().hasClass("fa-times") && $('#f').children().hasClass("fa-times") && $('#i').children().hasClass("fa-times")){
      console.log(moveCount);
      alert("X WINS!");
      $('.square').empty();
      p1Score++;
      $('#p1-score').html(p1Score);
      console.log("Board has been reset.")
  }else if ($('#a').children().hasClass("fa-circle-o") && $('#d').children().hasClass("fa-circle-o") && $('#g').children().hasClass("fa-circle-o") || $('#b').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#h').children().hasClass("fa-circle-o") || $('#c').children().hasClass("fa-circle-o") && $('#f').children().hasClass("fa-circle-o") && $('#i').children().hasClass("fa-circle-o")){
    console.log(moveCount);
      alert("O WINS!");
      $('.square').empty();
      p2Score++;
      $('#p2-score').html(p2Score);
      console.log("Board has been reset.")
  }
};

function checkDiagonals(){
  if ($('#a').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#i').children().hasClass("fa-times") || $('#c').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#g').children().hasClass("fa-times")){
      console.log(moveCount);
      alert("X WINS!");
      p1Score++;
      $('#p1-score').html(p1Score);
      console.log("Board has been reset.")
      $('.square').empty();
  }else if ($('#a').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#i').children().hasClass("fa-circle-o") || $('#c').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#g').children().hasClass("fa-circle-o")){
      console.log(moveCount);
      alert("O WINS!");
      p2Score++;
      $('#p2-score').html(p2Score);
      console.log("Board has been reset.")
      $('.square').empty();
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

function resetBoard(){
  // console.log("Board has been reset.")
  // $('.square').empty();
  moveCount=0;
}

