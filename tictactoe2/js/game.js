/*Create the array with the forms*/

var form=[];
let maximo = 9;

/*Create the players with default values*/

var player1={
  figure: "X",
  turn: true
};
var player2={
  figure: "O",
  turn: false
};

function start_game(){

  $("#container-mode").css({"display":"none"});
  $("#container-create-user").css({"display":"none"});
  $("#end-game").css({"display":"none"});
  $("#game-name").css({"display":"none"});
  $("#container-game").css({"display":"flex"});
  $("#player-turn").css({"display":"block"});
  $("#game").css({"display":"grid"});

/*Create the array with the forms*/

form=[];
maximo = 9;

/*Create the players with default values*/

player1={
  figure: "X",
  turn: true
};
player2={
  figure: "O",
  turn: false
};

/*Start the game*/

create_board();
check_turn();
}



function create_board(){ /*This function creates the board*/
  for(var i=0;i<9;i++){
    $('#game').append("<div class='box center' id='box_position"+i+
    "' onclick='fill_box(box_position"+i+",player1,"+i+")'></div>");
  }
}

function fill_box(a,b,c){ /*This function fills the divs and call the check_win functions*/
  maximo--;
  $(a).removeAttr('onclick');

  if(b.turn==true){

    /*Add the X to the board */
    $(a).html("X");
    $(a).addClass("player1-class");

    /*Add the figure X to the "form" array*/
    form[c]=b.figure;


    /*Check if X win horizontal*/
    check_win_h(c,b.figure);
  }
  else{
    
    /*Add the X to the board */
    $(a).html("O");
    $(a).addClass("player2-class");

    /*Add the figure O to the "form" array*/
    form[c]=player2.figure;

    /*Check if O win horizontal*/
    check_win_h(c,player2.figure);
  }
}

function check_turn(){ /*This function checks who has the turn*/
  if(player1.turn==true){
    $('#player-turn').html("X turn");
  }
  else{
    $('#player-turn').html("O turn");
  }
}

function change_turn(){ /*This function change the turn when we checked the possible wins*/
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

function change_green(a,b,c,figure){
    setTimeout(function(){$(a).css('background-color','lightgreen')},0);
    setTimeout(function(){$(b).css('background-color','lightgreen')},200);
    setTimeout(function(){$(c).css('background-color','lightgreen')},400);
    setTimeout(show_end,1100,figure);
}

function check_win_h(c,figure){ /*This function checks the possible horizontal wins*/
  if(c<3){ //ROW 1
    if(form[0]==figure && form[1]==figure && form[2]==figure){
      change_green(box_position0,box_position1,box_position2,figure);
    }
    else {check_win_v(c,figure);}
  }
  else{
    if(c>=3 && c<=5){ //ROW 2
      if(form[3]==figure && form[4]==figure && form[5]==figure){
        change_green(box_position3,box_position4,box_position5,figure);
      }
      else {check_win_v(c,figure);}
    }
    else{
      if(c>5){ //ROW 3
        if(form[6]==figure && form[7]==figure && form[8]==figure){
          change_green(box_position6,box_position7,box_position8,figure);
        }
        else {check_win_v(c,figure);}
      }
    }
  }
}

function check_win_v(c,figure){ /*This function checks the possible vertical wins*/
  if(c==0 || c==3 || c==6){ //COLUMN 1
    if(form[0]==figure && form[3]==figure && form[6]==figure){
      change_green(box_position0,box_position3,box_position6,figure);
    }
    else {check_win_d(c,figure);}
  }
  else{
    if(c==1 || c==4 || c==7){ //COLUMN 2
      if(form[1]==figure && form[4]==figure && form[7]==figure){
        change_green(box_position1,box_position4,box_position7,figure);
      }
      else {check_win_d(c,figure);}
    }
    else{
      if(c==2 || c==5 || c==8){ //COLUMN 3
        if(form[2]==figure && form[5]==figure && form[8]==figure){
          change_green(box_position2,box_position5,box_position8,figure);
        }
        else {check_win_d(c,figure);}
      }
    }
  }
}

function check_win_d(c,figure){ /*This function checks the possible diagonal wins*/
  if(c==0 || c==4 || c==8){ //DIAGONAL 1
    if(form[0]==figure && form[4]==figure && form[8]==figure){
      change_green(box_position0,box_position4,box_position8,figure);
    }
    else {check_draw();}
  }
  else{
    if(c==2 || c==4 || c==6){ //DIAGONAL 2
      if(form[2]==figure && form[4]==figure && form[6]==figure){
        change_green(box_position2,box_position4,box_position6,figure);
      }
      else {check_draw();}
    }
    else{check_draw();}
  }
}

function show_end(a){ /*This function shows the winner and the end div*/
  $('#game').empty()
  $('#game').css({"display":"none"});
  $('#player-turn').css({"display":"none"});
  $('#end-game').css({"display":"flex"});
  $('#winner').css({"display":"block"});
  $('#child-winner').text(a);
}

function restart(){
form=[];

player1={
  figure: "X",
  turn: true
};
player2={
  figure: "O",
  turn: false
};
maximo = 9;

$('#game').css({"display":"grid"});
$('#player-turn').css({"display":"block"});
$('#end-game').css({"display":"none"});


create_board();
check_turn();
}

function check_draw(){
  if (maximo == 0) {
    show_end(null);
    $('#winner').css({"display":"none"});
    $('#child-winner').text("DRAW");
  }
  else{
    change_turn();
  }
}