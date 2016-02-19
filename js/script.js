$(function(){

var moveCount=0;

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

  checkColumns();

});



});
moveCount=0;

function tieGame(){
  if(moveCount===9){
    alert("tie");
  }
}

function checkColumns(){
  if ($('#a').children().hasClass("fa-times") && $('#b').children().hasClass("fa-times") && $('#c').children().hasClass("fa-times") || $('#d').children().hasClass("fa-times") && $('#e').children().hasClass("fa-times") && $('#f').children().hasClass("fa-times") || $('#g').children().hasClass("fa-times") && $('#h').children().hasClass("fa-times") && $('#i').children().hasClass("fa-times")){
    alert("X WINS!");
    $('#a').remove('<i class="fa fa-times"></i>');
  }else if ($('#a').children().hasClass("fa-circle-o") && $('#b').children().hasClass("fa-circle-o") && $('#c').children().hasClass("fa-circle-o") || $('#d').children().hasClass("fa-circle-o") && $('#e').children().hasClass("fa-circle-o") && $('#f').children().hasClass("fa-circle-o") || $('#g').children().hasClass("fa-circle-o") && $('#h').children().hasClass("fa-circle-o") && $('#i').children().hasClass("fa-circle-o")){
      alert("O WINS!")
  }else{
    tieGame();
  }
};

function checkRows(){

}


