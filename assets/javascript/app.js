

// $("#timeRemainingBox").append("<div>'sorry, out of time'</div>")


var timeLeft = 2;

var elem = document.getElementById("timeRemainingBox");


$("input[name='timeRemainingBox']").val(elem);

var timerId = setInterval(countdown, 1000);
function countdown() {
  if (timeLeft === 0) {
    setTimeout(timerId);
    $("#timeRemainingBox").html("<div>Sorry, out of time</div>");
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
}
  }



// var doSomething;
// function whatever() {
//   if (!doSomething) {
//     doSomething = true;
//     // do the stuff
//   }
// }







//  $.fn.every = function(callback) {
//   var numElements = this.length;
//   return this.filter(callback).length == numElements;
// };

// $.fn.simpleQuiz = function(options) {
//   if(!this.length) { return; };
  
//   this.each(function() {
//     var form = $(this);
//     var submitButton = form.find(':submit');
//     var questions = form.find('.question');
//     var choices = form.find(':radio');

//     var init = function() {
//       choices.on('change', answerChanged);
//       form.on('submit', answersSubmitted);

//       answerChanged();
//     };

//     var answersSubmitted = function(event) {
//       if(!hasPassed()) {
//         event.preventDefault();
//         alert('Please try again.');
//       }
//     };

//     var score = function() {
//       return form.find(':checked[data-correct]').length;
//     };
//     	console.log(score)

//     var hasPassed = function() {
//       return score() == questions.length;
//     };

//     var hasCheckedElement = function() {
//       return $(this).has(':checked').length;
//     };

//     var allQuestionsAnswered = function() {
//       return questions.every(hasCheckedElement);
//     };


//     var answerChanged = function() {
//       if(allQuestionsAnswered()) {
//         submitButton.removeAttr('disabled');
//       } else {
//         submitButton.attr('disabled', 'disabled');
      

//       	var returnAnswers = function() {
//     	if (timeLeft == 0) 
//     		document.getElementById("timeRemainingBox");

//     	:checked[data-correct]
//     }


//     };

//   };

// };





//////////////////////////////////////////////////////////////////////////////////
////////////


/////////////

//Displaying the Quiz Results At this point, 
//we want to build out our showResults function to loop over the answers, 
//check them, and show the results.
//Here’s the function, which we’ll go through in detail next:

// function showResults(){

//   // gather answer containers from our quiz
//   const answerContainers = quizContainer.querySelectorAll('.answers');

//   // keep track of user's answers
//   let numCorrect = 0;

//   // for each question...
//   myQuestions.forEach( (currentQuestion, questionNumber) => {

//     // find selected answer
//     const answerContainer = answerContainers[questionNumber];
//     const selector = 'input[name=question'+questionNumber+']:checked';
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//     // if answer is correct
//     if(userAnswer===currentQuestion.correctAnswer){
//       // add to the number of correct answers
//       numCorrect++;

//       // color the answers green
//       answerContainers[questionNumber].style.color = 'lightgreen';
//     }
//     // if answer is wrong or blank
//     else{
//       // color the answers red
//       answerContainers[questionNumber].style.color = 'red';
//     }
//   });

//   // show number of correct answers out of total
//   resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
// }

















// //First, we’ll select all the answer containers in our quiz’s HTML. 
// //Then we’ll create variables to keep track of the user’s current answer 
// //and the total number of correct answers.

// // gather answer containers from our quiz
// const answerContainers = quizContainer.querySelectorAll('.answers');

// // keep track of user's answers
// let numCorrect = 0;

// // Now we can loop through each question and check the answers.

// // for each question...
// myQuestions.forEach( (currentQuestion, questionNumber) => {

//   // find selected answer
//   const answerContainer = answerContainers[questionNumber];
//   const selector = `input[name=question${questionNumber}]:checked`;
//   const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//   // if answer is correct
//   if(userAnswer===currentQuestion.correctAnswer){
//     // add to the number of correct answers
//     numCorrect++;

//     // color the answers green
//     answerContainers[questionNumber].style.color = 'lightgreen';
//   }
//   // if answer is wrong or blank
//   else{
//     // color the answers red
//     answerContainers[questionNumber].style.color = 'red';
//   }
// });

// //The general gist of this code is:
// //Find the selected answer in the HTML.
// //Handle what happens if the answer is correct.
// //Handle what happens if the answer is wrong.
// //Let’s look more closely at how we’re finding the selected answer in our HTML:

// // find selected answer
// const answerContainer = answerContainers[questionNumber];
// const selector = `input[name=question${questionNumber}]:checked`;
// const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// //First, we’re making sure we’re looking inside the answer container for the current question.
// //In the next line, we’re defining a CSS selector that will let us find which radio button is checked.
// //Then we’re using JavaScript’s querySelector to search for our CSS selector in the previously defined answerContainer. 
// //In essence, this means that we’ll find which answer’s radio button is checked.
// //Finally, we can get the value of that answer by using .value.

// //Dealing with Incomplete User Input
// //But what if the user left an answer blank? Then using .value would cause an error because you can’t get the value of something that’s not there. 
// //To solve this, we’ve added ||, which means “or” and {} which is an empty object. Now the overall statement says:
// //Get a reference to our selected answer element OR, if that doesn’t exist, use an empty object.
// //Get the value of whatever was in the first statement.
// //As a result, the value will either be the user’s answer or undefined, which means a user can skip a question without crashing our quiz.
// //Evaluating the Answers and Displaying the Result
// //The next statements in our answer-checking loop will let us handle correct and incorrect answers.

// // if answer is correct
// if(userAnswer===currentQuestion.correctAnswer){
//   // add to the number of correct answers
//   numCorrect++;

//   // color the answers green
//   answerContainers[questionNumber].style.color = 'lightgreen';
// }
// // if answer is wrong or blank
// else{
//   // color the answers red
//   answerContainers[questionNumber].style.color = 'red';
// }

// //If the user’s answer matches the correct choice, increase the number of correct answers by one and (optionally) color the set of choices green. 
// //If the answer is wrong or blank, color the answer choices red (again, optional).
// //Once the answer-checking loop is finished, we can show how many questions the user got right:

// // show number of correct answers out of total
// resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

///////////////////////////////////>>>>>>>>>>>>>>>>>>>>>>


// document.getElementById("MySelectBox").onchange = function() {
//     document.getElementById("triesleft").innerText = "You have " + triesLeft + " tries left.";

    ////// document.getElementById("timeRemainingBox").style.display = "block";
    // triesleft--;
// $("#startClock").click( function(){
//    var counter = 60;
//    setInterval(function() {
//      counter--;
//       if (counter >= 0) {
//          span = document.getElementById("timeRemainingBox");
//          span.innerHTML = counter;
//       }
//       if (counter === 0) {
//          alert('sorry, out of time');
//          clearInterval(counter);
//        }
//      }, 1000);
// });









