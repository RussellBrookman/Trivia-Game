	$( document ).ready(function() {
    console.log( "document loaded" );
});
 
	$( window ).on( "load", function() {
    console.log( "window loaded" );
});
	/*
	3. the answer you click on, light up on click
	4. a counter that says how many answers they have chosen. When they get to the 10th question alert, "last one"
	5. on the click I need an allert that tells the player if they have chosen a right or wrong answer and make that alert disapear in 2 seconds
	6. if they have a right or wrong answer, add to one of the counters and the counter of total answers chosen
	7. make a functional reset button
	8. put in the graphics
	9. see if you can make that reset button into a start reset button. 
	*/
// 	1. a series of questions and answers and put them into an array with one answer labled correct
var questionsAndAnswers = {
	question1: {
		question: "In Maried With Children what did Al do everyday when got home from work?",
		correctAnswer: "Told a story about how he hated work",
		incorrectAnswers: ["Kissed his wife", "Put his hands down his pance", "Told his children he loves them"]
	},
	question2: {
		question: "In The West Wing who was in charge of the white house's message?",
		correctAnswer: "Toby",
		incorrectAnswers: ["Josh", "CJ", "Sam"]
	},
	question3: {
		question: "In the Wonder Years, what happened at the end of the first eppisode?",
		correctAnswer: "Kevin kissed Whinnie",
		incorrectAnswers: ["His brother called him a but head", "Whinnies brother dies", "The family has dinner"]
	},
	question4: {
		question: "What was better, Voltron or Power Rangers?",
		correctAnswer: "Who cares? Cartoons are stupid and Power Rangers are making the next generation stupider",
		incorrectAnswers: ["Voltron", "Power Rangers", "I'm a tool"]
	},
	question5: {
		question: "What was Pokimon?",
		correctAnswer: "A genious marketing campaign by Nintendo to get your kids to buy a bunch of crap",
		incorrectAnswers: ["A really cool way to spend time in the park with your friends", "A ball with a pocket monster in it", "A bunch of Gameboy games for children"]
	},
	question6: {
		question: "In Smallville, what happened in the last eppisode of season 1?",
		correctAnswer: "A tornato",
		incorrectAnswers: ["Lana tells Clark that she loves him", "Chloe gets left at a dance and punches clark in the face", "Pete finds out that Clark has special powers"]
	},
	question7: {
		question: "What show does Stan Marsh come from?",
		correctAnswer: "South Park",
		incorrectAnswers: ["The Simpsons", "The Goldburgs", "Futurama"]
	},
	question8: {
		question: "Who never came back when Full House did a reunion on Net Flix called Fuller House",
		correctAnswer: "Michel", 
		incorrectAnswers: ["Danny", "Stephony", "DJ"]
	},
	question9: {
		question: "What is the first name of the main character in Get Smart?",
		correctAnswer: "Maxwell?",
		incorrectAnswers: ["William", "Berny", "Agent 99"]
	},
	question10: {
		question: "What was the first video on MTV?", 
		correctAnswer: "Video Killed the Radio Star",
		incorrectAnswers: ["I want my MTV", "Thriller", "The Blues Brothers solo"]
	}
};

var seen = [];
var totAn = 0;
var wroAn = 0;
var rigAn = 0;


function askingQuestions(obj) {
	$('#totalAns').append(totAn);
	$('#rightAns').append(rigAn);
	$('#wrongAns').append(wroAn);
	var timCount = 10;
	var tC = $('#timer').append(timCount);

	while (timCount <= 0) { 
	    setTimeout(function(timCount){ 
	    	var timCount = -1; tC; 
	    }, 1000); 
	    return;
	}

	setTimeout(function(tim){ 
		questionTwo(questionsAndAnswers); 
		alert('out of time');  
	}, 10000);
	var ca = questionsAndAnswers.question1.correctAnswer;
	var ia = questionsAndAnswers.question1.incorrectAnswers;
	$('.questions').text(questionsAndAnswers.question1.question);
	$("#answerB").text(questionsAndAnswers.question1.correctAnswer);
	$("#answerA").text(questionsAndAnswers.question1.incorrectAnswers[0]);
	$("#answerC").text(questionsAndAnswers.question1.incorrectAnswers[1]);
	$("#answerD").text(questionsAndAnswers.question1.incorrectAnswers[2]);	 

      		var aB = $("#answerA");
      		var bB = $("#answerB");
      		var cB = $("#answerC");
      		var dB = $("#answerD");
      			
	(bB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('Correct!');
      	var totAn = +1;
      	var rigAn = +1;
      	totAn.push(totAn);
      	rigAn.push(rigAn);
      	window.clearTimeout(timCount);
      	questionTwo(questionsAndAnswers);
    });
	(aB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	totAn.push(totAn);
      	wroAn.push(rigAn);      	
      	window.clearTimeout(timCount);
      	questionTwo(questionsAndAnswers);
    });
    (cB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	totAn.push(totAn);
      	wroAn.push(rigAn); 
      	window.clearTimeout(timCount);
      	questionTwo(questionsAndAnswers);      	
    });
    (dB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	totAn.push(totAn);
      	wroAn.push(rigAn);       	
      	window.clearTimeout(timCount);
      	questionTwo(questionsAndAnswers);      	      	
    });

};
askingQuestions(questionsAndAnswers);
// change 4
function questionTwo(obj){
	var timCount = 10;
	var tC = $('#timer').append(timCount);

	while (timCount <= 0) { 
	    setTimeout(function(timCount){ 
	    	var timCount = -1; tC; 
	    }, 1000); 
	    return;
	}

	setTimeout(function(tim){ 
		// change 1
		questionThree(questionsAndAnswers); 
		alert('out of time');  
	}, 10000);

	var ca = questionsAndAnswers.question1.correctAnswer;
	var ia = questionsAndAnswers.question1.incorrectAnswers;
	// change 2
	$('.questions').text(questionsAndAnswers.question2.question);
	$("#answerC").text(questionsAndAnswers.question2.correctAnswer);
	$("#answerA").text(questionsAndAnswers.question2.incorrectAnswers[0]);
	$("#answerB").text(questionsAndAnswers.question2.incorrectAnswers[1]);
	$("#answerD").text(questionsAndAnswers.question2.incorrectAnswers[2]);	 

      		var aB = $("#answerA");
      		var bB = $("#answerB");
      		var cB = $("#answerC");
      		var dB = $("#answerD");
      // change 3			
	(cB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('your correct');
      	var totAn = +1;
      	var rigAn = +1;
      	window.clearTimeout(timCount);
      	// change 5
      	questionThree(questionsAndAnswers);
    });
	(aB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	window.clearTimeout(timCount);
      	questionThree(questionsAndAnswers);
    });
    (bB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionThree(questionsAndAnswers);  	
    });
    (dB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;     
      	window.clearTimeout(timCount);
      	questionThree(questionsAndAnswers); 	
    });
};
// change 4
function questionThree(obj){
	var timCount = 10;
	var tC = $('#timer').append(timCount);

	while (timCount <= 0) { 
	    setTimeout(function(timCount){ 
	    	var timCount = -1; tC; 
	    }, 1000); 
	    return;
	}

	setTimeout(function(tim){ 
		// change 1
		questionFour(questionsAndAnswers); 
		alert('out of time');  
	}, 10000);

	var ca = questionsAndAnswers.question1.correctAnswer;
	var ia = questionsAndAnswers.question1.incorrectAnswers;
	// change 2
	$('.questions').text(questionsAndAnswers.question3.question);
	$("#answerD").text(questionsAndAnswers.question3.correctAnswer);
	$("#answerA").text(questionsAndAnswers.question3.incorrectAnswers[0]);
	$("#answerB").text(questionsAndAnswers.question3.incorrectAnswers[1]);
	$("#answerC").text(questionsAndAnswers.question3.incorrectAnswers[2]);	 

      		var aB = $("#answerA");
      		var bB = $("#answerB");
      		var cB = $("#answerC");
      		var dB = $("#answerD");
      // change 3			
	(dB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('your correct');
      	var totAn = +1;
      	var rigAn = +1;
      	window.clearTimeout(timCount);
      	      	// change 5
      	questionFour(questionsAndAnswers);
    });
	(aB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	window.clearTimeout(timCount);
      	questionFour(questionsAndAnswers);
    });
    (bB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionFour(questionsAndAnswers);  	
    });
    (cB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionFour(questionsAndAnswers);  	
    });
};
function questionFour(obj){
	var timCount = 10;
	var tC = $('#timer').append(timCount);

	while (timCount <= 0) { 
	    setTimeout(function(timCount){ 
	    	var timCount = -1; tC; 
	    }, 1000); 
	    return;
	}

	setTimeout(function(tim){ 
		// change 1
		questionFive(questionsAndAnswers); 
		alert('out of time');  
	}, 10000);

	var ca = questionsAndAnswers.question1.correctAnswer;
	var ia = questionsAndAnswers.question1.incorrectAnswers;
	// change 2
	$('.questions').text(questionsAndAnswers.question4.question);
	$("#answerB").text(questionsAndAnswers.question4.correctAnswer);
	$("#answerA").text(questionsAndAnswers.question4.incorrectAnswers[0]);
	$("#answerD").text(questionsAndAnswers.question4.incorrectAnswers[1]);
	$("#answerC").text(questionsAndAnswers.question4.incorrectAnswers[2]);	 

      		var aB = $("#answerA");
      		var bB = $("#answerB");
      		var cB = $("#answerC");
      		var dB = $("#answerD");
      // change 3			
	(bB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('your correct');
      	var totAn = +1;
      	var rigAn = +1;
      	window.clearTimeout(timCount);
      	      	// change 5
      	questionFive(questionsAndAnswers);
    });
	(aB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	window.clearTimeout(timCount);
      	questionFive(questionsAndAnswers);
    });
    (dB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionFive(questionsAndAnswers);  	
    });
    (cB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionFive(questionsAndAnswers);  	
    });
};
function questionFive(obj){
	var timCount = 10;
	var tC = $('#timer').append(timCount);

	while (timCount <= 0) { 
	    setTimeout(function(timCount){ 
	    	var timCount = -1; tC; 
	    }, 1000); 
	    return;
	}

	setTimeout(function(tim){ 
		// change 1
		questionSix(questionsAndAnswers); 
		alert('out of time');  
	}, 10000);

	var ca = questionsAndAnswers.question1.correctAnswer;
	var ia = questionsAndAnswers.question1.incorrectAnswers;
	// change 2
	$('.questions').text(questionsAndAnswers.question5.question);
	$("#answerA").text(questionsAndAnswers.question5.correctAnswer);
	$("#answerB").text(questionsAndAnswers.question5.incorrectAnswers[0]);
	$("#answerD").text(questionsAndAnswers.question5.incorrectAnswers[1]);
	$("#answerC").text(questionsAndAnswers.question5.incorrectAnswers[2]);	 

      		var aB = $("#answerA");
      		var bB = $("#answerB");
      		var cB = $("#answerC");
      		var dB = $("#answerD");
      // change 3			
	(aB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('your correct');
      	var totAn = +1;
      	var rigAn = +1;
      	window.clearTimeout(timCount);
      	      	// change 5
      	questionSix(questionsAndAnswers);
    });
	(bB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	window.clearTimeout(timCount);
      	questionSix(questionsAndAnswers);
    });
    (dB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionSix(questionsAndAnswers);  	
    });
    (cB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionSix(questionsAndAnswers);  	
    });
};
function questionSix(obj){
	var timCount = 10;
	var tC = $('#timer').append(timCount);

	while (timCount <= 0) { 
	    setTimeout(function(timCount){ 
	    	var timCount = -1; tC; 
	    }, 1000); 
	    return;
	}

	setTimeout(function(tim){ 
		// change 1
		questionSeven(questionsAndAnswers); 
		alert('out of time');  
	}, 10000);

	var ca = questionsAndAnswers.question1.correctAnswer;
	var ia = questionsAndAnswers.question1.incorrectAnswers;
	// change 2
	$('.questions').text(questionsAndAnswers.question6.question);
	$("#answerC").text(questionsAndAnswers.question6.correctAnswer);
	$("#answerB").text(questionsAndAnswers.question6.incorrectAnswers[0]);
	$("#answerD").text(questionsAndAnswers.question6.incorrectAnswers[1]);
	$("#answerA").text(questionsAndAnswers.question6.incorrectAnswers[2]);	 

      		var aB = $("#answerA");
      		var bB = $("#answerB");
      		var cB = $("#answerC");
      		var dB = $("#answerD");
      // change 3			
	(cB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('your correct');
      	var totAn = +1;
      	var rigAn = +1;
      	window.clearTimeout(timCount);
      	      	// change 5
      	questionSeven(questionsAndAnswers);
    });
	(bB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	window.clearTimeout(timCount);
      	questionSeven(questionsAndAnswers);
    });
    (dB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionSeven(questionsAndAnswers);  	
    });
    (aB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionSeven(questionsAndAnswers);  	
    });
};
function questionSeven(obj){
	var timCount = 10;
	var tC = $('#timer').append(timCount);

	while (timCount <= 0) { 
	    setTimeout(function(timCount){ 
	    	var timCount = -1; tC; 
	    }, 1000); 
	    return;
	}

	setTimeout(function(tim){ 
		// change 1
		questionEight(questionsAndAnswers); 
		alert('out of time');  
	}, 10000);

	var ca = questionsAndAnswers.question1.correctAnswer;
	var ia = questionsAndAnswers.question1.incorrectAnswers;
	// change 2
	$('.questions').text(questionsAndAnswers.question7.question);
	$("#answerD").text(questionsAndAnswers.question7.correctAnswer);
	$("#answerB").text(questionsAndAnswers.question7.incorrectAnswers[0]);
	$("#answerA").text(questionsAndAnswers.question7.incorrectAnswers[1]);
	$("#answerC").text(questionsAndAnswers.question7.incorrectAnswers[2]);	 

      		var aB = $("#answerA");
      		var bB = $("#answerB");
      		var cB = $("#answerC");
      		var dB = $("#answerD");
      // change 3			
	(dB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('your correct');
      	var totAn = +1;
      	var rigAn = +1;
      	window.clearTimeout(timCount);
      	      	// change 5
      	questionEight(questionsAndAnswers);
    });
	(bB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	window.clearTimeout(timCount);
      	questionEight(questionsAndAnswers);
    });
    (cB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionEight(questionsAndAnswers);  	
    });
    (aB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionEight(questionsAndAnswers);  	
    });
};
function questionEight(obj){
	var timCount = 10;
	var tC = $('#timer').append(timCount);

	while (timCount <= 0) { 
	    setTimeout(function(timCount){ 
	    	var timCount = -1; tC; 
	    }, 1000); 
	    return;
	}

	setTimeout(function(tim){ 
		// change 1
		questionNine(questionsAndAnswers); 
		alert('out of time');  
	}, 10000);

	var ca = questionsAndAnswers.question1.correctAnswer;
	var ia = questionsAndAnswers.question1.incorrectAnswers;
	// change 2
	$('.questions').text(questionsAndAnswers.question8.question);
	$("#answerB").text(questionsAndAnswers.question8.correctAnswer);
	$("#answerD").text(questionsAndAnswers.question8.incorrectAnswers[0]);
	$("#answerA").text(questionsAndAnswers.question8.incorrectAnswers[1]);
	$("#answerC").text(questionsAndAnswers.question8.incorrectAnswers[2]);	 

      		var aB = $("#answerA");
      		var bB = $("#answerB");
      		var cB = $("#answerC");
      		var dB = $("#answerD");
      // change 3			
	(bB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('your correct');
      	var totAn = +1;
      	var rigAn = +1;
      	window.clearTimeout(timCount);
      	      	// change 5
      	questionNine(questionsAndAnswers);
    });
	(aB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	window.clearTimeout(timCount);
      	questionNine(questionsAndAnswers);
    });
    (dB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionNine(questionsAndAnswers);  	
    });
    (cB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionNine(questionsAndAnswers);  	
    });
};
function questionNine(obj){
	var timCount = 10;
	var tC = $('#timer').append(timCount);

	while (timCount <= 0) { 
	    setTimeout(function(timCount){ 
	    	var timCount = -1; tC; 
	    }, 1000); 
	    return;
	}

	setTimeout(function(tim){ 
		// change 1
		questionTen(questionsAndAnswers); 
		alert('out of time');  
	}, 10000);

	var ca = questionsAndAnswers.question1.correctAnswer;
	var ia = questionsAndAnswers.question1.incorrectAnswers;
	// change 2
	$('.questions').text(questionsAndAnswers.question9.question);
	$("#answerD").text(questionsAndAnswers.question9.correctAnswer);
	$("#answerB").text(questionsAndAnswers.question9.incorrectAnswers[0]);
	$("#answerA").text(questionsAndAnswers.question9.incorrectAnswers[1]);
	$("#answerC").text(questionsAndAnswers.question9.incorrectAnswers[2]);	 

      		var aB = $("#answerA");
      		var bB = $("#answerB");
      		var cB = $("#answerC");
      		var dB = $("#answerD");
      // change 3			
	(dB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('your correct');
      	var totAn = +1;
      	var rigAn = +1;
      	window.clearTimeout(timCount);
      	      	// change 5
      	questionTen(questionsAndAnswers);
    });
	(aB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	window.clearTimeout(timCount);
      	questionTen(questionsAndAnswers);
    });
    (bB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionTen(questionsAndAnswers);  	
    });
    (cB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	questionTen(questionsAndAnswers);  	
    });
};
function questionTen(obj){
	var timCount = 10;
	var tC = $('#timer').append(timCount);

	while (timCount <= 0) { 
	    setTimeout(function(timCount){ 
	    	var timCount = -1; tC; 
	    }, 1000); 
	    return;
	}

	setTimeout(function(tim){ 
		// change 1
		gameOver(); 
		alert('out of time');  
	}, 10000);

	var ca = questionsAndAnswers.question1.correctAnswer;
	var ia = questionsAndAnswers.question1.incorrectAnswers;
	// change 2
	$('.questions').text(questionsAndAnswers.question10.question);
	$("#answerA").text(questionsAndAnswers.question10.correctAnswer);
	$("#answerB").text(questionsAndAnswers.question10.incorrectAnswers[0]);
	$("#answerD").text(questionsAndAnswers.question10.incorrectAnswers[1]);
	$("#answerC").text(questionsAndAnswers.question10.incorrectAnswers[2]);	 

      		var aB = $("#answerA");
      		var bB = $("#answerB");
      		var cB = $("#answerC");
      		var dB = $("#answerD");
      // change 3			
	(aB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('your correct');
      	var totAn = +1;
      	var rigAn = +1;
      	window.clearTimeout(timCount);
      	      	// change 5
      	gameOver();
    });
	(dB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;
      	window.clearTimeout(timCount);
      	gameOver();
    });
    (bB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	gameOver();  	
    });
    (cB).on('click', function(){
      	$(this).css('filter', 'invert(100%)');
      	alert('you really think so');
      	var totAn = +1;
      	var wroAn = +1;    
      	window.clearTimeout(timCount);
      	gameOver();  	
    });
};
function gameOver() {
 	if (rigAn < wroAn){
 		alert("You won! You're amazing!");
 	} else if (rigAn > wroAn) {
 		alert("You lost! A smarter person would have won.")
 	} else {
 		alert("Five right.. Hmmm... Maybe you should play again.")
 	}
};

/*	yes.onclick = function(){
    	box.style.backgroundColor = "red";
	}

no.onclick = function(){
    box.style.backgroundColor = "green";
}*/
/*      		var cai = ca.indexOf(this);
      		if (cai === -1) {
     			alert('correct!');
      		} else {
   				alert('you suck!');
      			} else {
      				return;
    		} */

//obj.style.color=""

//function traverseObj(obj) {
// -1, in this case, means its not in the array of seen.
/*	for(var index = 0; index < Object.keys(obj).length; index++)
		var ca = (questionsAndAnswers.question1.correctAnswer);
		var ia = (questionsAndAnswers.question1.incorrectAnswers);*/
		// (function(key) {
			// makes sure the question is not repeated. -1 means it never occurs in the indexOf method.
//		if(seen.indexOf(Object.keys(obj)[index]) === -1) {
			// logs the question to the console
//			console.log(obj[Object.keys(obj)[index]]);
			// put the questions into there buttons
/*			obj.forEach(obj[Object.keys(obj)[index]]) {
				$("#answerA").text(ca + ia);
			}*/
//			$(selector).val(function(index,currentvalue))
			// pushes the question asked into the var seen
//			seen.push(Object.keys(obj)[index]);
			// makes sure only one question is asked
/*			break;
		}*/
//		console.log(key, obj[key]);
//	}	
		// calling the function
//traverseObj(questionsAndAnswers);
			// $(".questions").text(questionsAndAnswers.question1.question);
			// $("#answerA").text(questionsAndAnswers.question1.correctAnswer);
			// $("#answerB").text(questionsAndAnswers.question1.incorrectAnswers[0]);
			// $("#answerC").text(questionsAndAnswers.question1.incorrectAnswers[1]);
			// $("$answerD").text(questionsAndAnswers.question1.incorrectAnswers[2]);
//console.log(questionsAndAnswers.question1.question);
// 	2. a randomizer for the questions and answers together
/*	function randomQandA(questionsAndAnswers) {
		var i = questionsAndAnswers;
		var qRand = "";
		for(i = 0; i <= i.length; i++) {
			qRand = i[Math.floor(Math.random() * i.length)] 
			$(".question").text(qRand);
//				$(".questions").text(questionsAndAnswers.question1.question);	
			    /*$(".answerB").text(questionsAndAnswers.question1.incorrectAnswers[0]);
			    $(".answerC").text(questionsAndAnswers.question1.incorrectAnswers[1]);
			    $(".answerD").text(questionsAndAnswers.question1.incorrectAnswers[2]);*/
/*		}
	}*/
/*	function qAndA(questionsAndAnswers) {
		i = questionsAndAnswers;
		while (i = 0, i <= i.length, i++) {
			i.forEach(function(questionsAndAnswers, quest, question) {
  			$(".questions").text(i.quest.question);
  			});
		};
	}*/