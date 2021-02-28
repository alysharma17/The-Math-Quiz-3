function add_player() {
    player1_name = document.getElementById("player_1_login").value;
    player2_name = document.getElementById("player_2_login").value;
  
      localStorage.setItem("player_1_name", player1_name);
      localStorage.setItem("player_2_name", player2_name);
  
      window.location = "game_page.html";
  }
   function send() {
  number1=document.getElementById("number1").value;
  number2=document.getElementById("number2").value;
  actual_answer=parseInt(number1) * parseInt(number2);
  question_number="<h4>" + number1 + " X " + number2 + "</h4>"; //the question
  input_box="<br> Answer: <input type='text' id='input_check_box'>"; //the input
  check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"; //the button
  row= question_number + input_box + check_button; //the row
  document.getElementById("output").innerHTML=row;
  document.getElementById("number_").value=" ";
  document.getElementById("number2").value=" ";
   }
var player1_score=0;
var player2_score=0;