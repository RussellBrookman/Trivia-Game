$( document ).ready(function() {
  console.log( "document loaded" );

  $(".game").hide();
  $(".finalScore").hide();
  $(".theAnswer").hide();
  $(".gameOver").hide();
 
  var timer;
  var questionNumber = 0;
  var match = 0;

  var questionsAndAnswers = [
    {
      question: "In Maried With Children what did Al do everyday when got home from work?",
      answers: ["Told a story about how he hated work", "Kissed his wife", "Put his hands down his pance", "Told his children he loves them"],
      correctAnswer: 0
    },
    {
      question: "In The West Wing who was in charge of the white house's message?",
      answers: ["Josh", "Toby", "CJ", "Sam"],
      correctAnswer: 1
    },
    {
      question: "In the Wonder Years, what happened at the end of the first eppisode?",
      answers: ["Keven kisses Whinnie", "His brother called him a but head", "Whinnies brother dies", "The family has dinner"],
      correctAnswer: 0
    },
    {
      question: "What was better, Voltron or Power Rangers?",
      answers: ["Voltron", "Power Rangers", "Who cares? Cartoons are stupid and Power Rangers are making the next generation stupider", "I'm a tool"],
      correctAnswer: 2
    },
    {
      question: "What was Pokimon?",
      answers: ["A genious marketing campaign by Nintendo to get your kids to buy a bunch of crap", "A really cool way to spend time in the park with your friends", "A ball with a pocket monster in it", "A bunch of Gameboy games for children"],
      correctAnswer: 0
    },
    {
      question: "In Smallville, what happened in the last eppisode of season 1?",
      answers: ["Lana tells Clark that she loves him", "A tornato", "Chloe gets left at a dance and punches clark in the face", "Pete finds out that Clark has special powers"],
      correctAnswer: 1
    },
    {
      question: "What show does Stan Marsh come from?",
      answers: ["The Simpsons", "South Park", "The Goldburgs", "Futurama"],
      correctAnswer: 1
    },
    {
      question: "Who never came back when Full House did a reunion on Net Flix called Fuller House",
      answers: ["Danny", "Stephony", "DJ", "Michel"],
      correctAnswer: 3
    },
    {
      question: "What is the first name of the main character in Get Smart?",
      answers: ["William", "Berny", "Maxwell", "Agent 99"],
      correctAnswer: 2
    },
    {
      question: "What was the first video on MTV?", 
      answers: ["I want my MTV", "Thriller", "The Blues Brothers solo", "Video Killed the Radio Star"],
      correctAnswer: 3
    }
  ];

  $(".start").on("click", function() {
    $('.start').hide();
    gameStart();
  });

  function gameStart(){
    questionNumber = 0;
    match = 0;
    $(".game").show();
    countdownTimer.start();
    renderQuestions(questionNumber);
  }

  var countdownTimer = {
    time : 20,
    reset: function() {
      this.time = 20;
      // createing and attaching a new <span> which shows 'secons remaining' <h3>
      $('.timer').html('<h3> <span class="timeLeft"> ' + this.time + '</span> seconds remaining </h3>');
    },
    start: function() {
      counter = setInterval(countdownTimer.count, 1000);	
    },
    stop: function() {
      clearInterval(counter);
    },
    count: function() {
      countdownTimer.time--;
      if (countdownTimer.time > 0) {
        $('.timer').html('<h3><span id="timeLeft">' + countdownTimer.time + '</span> seconds remaining</h3>');
      } else {
        wrong();
        questionNumber++;
        if (questionNumber < questionsAndAnswers.length) {
          renderQuestions(questionNumber);
        } else {
          timer = setTimeout(function() {
            passInMatch(match);
          }, 2000);
        }
      }
    }
  };

  function renderQuestions(i) {
    countdownTimer.reset();
    $(".questions").html("<span>" + questionsAndAnswers[i].question + "</span");
    $("#answerA").html("<div>" + questionsAndAnswers[i].answers[0] + "</div>");
    $("#answerB").html("<div>" + questionsAndAnswers[i].answers[1] + "</div>");
    $("#answerC").html("<div>" + questionsAndAnswers[i].answers[2] + "</div>");
    $("#answerD").html("<div>" + questionsAndAnswers[i].answers[3] + "</div>");	
  }
  
  function wrong(){
    countdownTimer.stop();
    $(".game").hide();
    $(".theAnswer").html("<div> Wrong! The answer was " + questionsAndAnswers[questionNumber].answers[questionsAndAnswers[questionNumber].correctAnswer] + ".</div>");
    $(".theAnswer").show();
    $(".score").html("Score: " + match);
    timer = setTimeout(function() {
      countdownTimer.start();
      $(".game").show();
      $(".theAnswer").hide();
    }, 2000);
  }
  
  function right() {
    match++
    countdownTimer.stop();
    $(".game").hide();
    $(".theAnswer").html("<div> Correct! The answer was " + questionsAndAnswers[questionNumber].answers[questionsAndAnswers[questionNumber].correctAnswer] + ".</div>");
    $(".theAnswer").show();
    $(".score").html("Score: " + match);
    timer = setTimeout(function() {
      countdownTimer.start();
      $(".game").show();
      $(".theAnswer").hide();
    }, 2000);
  }
  
  function passInMatch(x) {
    clearTimeout(timer);
    countdownTimer.stop();
    $(".game").hide();
    $(".theAnswer").hide();
    $(".gameOver").show();
    $(".finalScore").html("<div> You scored " + x + " out of " + questionsAndAnswers.length + " . </div>");
    $(".finalScore").show();
  }
  
  $('.ans').on('click', function() {
  // check the answer
   //sets the user input to an index number so we can compare to answer
    var playerAnswer;
    if(this.id == "answerA") {
      playerAnswer = 0;
    } else if(this.id == "answerB") {
      playerAnswer = 1;
    } else if(this.id == "answerC") {
      playerAnswer = 2;
    } else if(this.id == "answerD") {
      playerAnswer = 3;
    }
    // answer check
    if (playerAnswer === questionsAndAnswers[questionNumber].correctAnswer) {
      right();
    } else {   wrong();}
  
    //next question start
    questionNumber++;
    if (questionNumber < questionsAndAnswers.length) {
      renderQuestions(questionNumber);	
    } else {
      timer = setTimeout(function() {
        passInMatch(match);
      }, 2000);
    }
  });
  
  $(".reset").on("click", function() {
    $(".gameOver").hide();
    gameStart();
  });
});
