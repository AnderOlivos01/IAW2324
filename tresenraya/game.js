var form=[];

var player1={
  figure: "X",
  turn: true
};
var player2={
  figure: "O",
  turn: false
};

create_board();
check_turn();


function create_board(){
  for(var i=0;i<9;i++){
    $('#game').append("<div class='box center' id='box_position"+i+
    "' onclick='fill_box(box_position"+i+",player1.turn,"+i+")'></div>");
  }
}

function fill_box(a,b,c){
  if(b==true){
    console.log(c);
    $(a).html("X");
    $(a).addClass("player1_class");
    check_win_w(c);
    change_turn();
    form[c]=player1.figure;
    console.log(form);
  }
  else{
    console.log(c);
    $(a).html("O");
    $(a).addClass("player2_class");
    change_turn();
    form[c]=player2.figure;
    console.log(form);
  }
}

function check_turn(){
  if(player1.turn==true){
    $('#player_turn').html("X turn");
  }
  else{
    $('#player_turn').html("O turn");
  }
}

function change_turn(){
  if(player1.turn==true){
    player1.turn=false;
    player2.turn=true;
    check_turn();
  }
  else{
    player1.turn=true;
    player2.turn=false;
    check_turn();
  }
}

function check_win_w(c){
  switch (c){
    case c=0 || c=1 || c=2:
      console.log("estás en la fila 1");
      break;
    case c>3 && c<5:
      console.log("estás en la fila 2");
      break;
    case c>6 && c<8:
      console.log("estás en la fila 3");
      break;
  }
}
function check_win_h(a){

}

function check_win_d(a){

}