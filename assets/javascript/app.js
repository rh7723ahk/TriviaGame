//This keeps track of the scores
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let choice;
let countStartNumber = 0;
let timeLeft = 30;


//Questions Array
var questions = [{
  q: "How many seasons are there of Fresh Prince?",
  answer: ['5', '6', '8', '10'],
  correct: "6",
  images: "assets/images/freshprince.jpg"
}, {
  q: "What acress played Uncle Phil?",
  answer: ['Will Smith', 'Geoffrey', 'Joseph Marcell', 'James Avery'],
  correct: "James Avery",
  images: "assets/images/freshprince.jpg"
}, {
  q: "Which part of LA is the bank's residence?",
  answer: ['Downtown', 'Hollywood', 'Bel Air', 'Beverly Hills'],
  correct: "Bel Air",
  images: "assets/images/freshprince.jpg"
}];

function timer(){
  $(".timer").html("<b>" + timeLeft + " Seconds left</b>");
  function less(){
    if (timeLeft == 0) {
      $(".timer").html("<b>0 Seconds left</b>");
      alert("Time is up");
      unanswered++;
      $(".score").html("<div>Correct: "+ correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered +" </div>");
      clearTimeout(tid);    
    } else {
      timeLeft--;
      $(".timer").html("<b>" + timeLeft + " Seconds left</b>");
      console.log(timeLeft);
    }
  }
 let tid = setInterval(less, 1000);
}

function nextQuestion(){
  timeLeft = 30;
    timer();

  for (var i = 0; i < questions.length; i++) {

     $(".question").html('<h2>' + questions[i].q + '</h2>' );

     $(".answer").html('<form>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[0]+'">  ' + questions[i].answer[0] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[1]+'">  ' + questions[i].answer[1] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[2]+'">  ' + questions[i].answer[2] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[3]+'">  ' + questions[i].answer[3] + '</p>');
      function chosen(){
        alert('Clicked '+ questions[i].answer[i]);
        choice = document.getElementById("myRadio").value;
        console.log(choice);
      }
   }  
}

function startGame(){
  alert("You will have 30 seconds for each question. \n You can now begin the game");
  nextQuestion();
}

function reset(){
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  choice = null;
  countStartNumber = 0;
  $(".timer").html("<div></div>");
  $(".score").html("<div></div>");
  $(".question").html("<div></div>");
  $(".answer").html("<div></div>");
}


$('.start').click(startGame);
$('.resetbtn').click(reset);