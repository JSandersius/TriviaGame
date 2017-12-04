



var timeLeft = 10;

var elem = document.getElementById("timeRemainingBox");

// $("#timeRemainingBox").append("<div>'sorry, out of time'</div>")

$("input[name='timeRemainingBox']").val(elem);


var timerId = setInterval(countdown, 1000);
function countdown() {
  if (timeLeft == 0) {
    setTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

function doSomething() {
    $("#timeRemainingBox").append("<div>Sorry, out of time</div>")
// 	$.alert('sorry, out of time');
//          clearInterval(countdown);
}


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
//////////////////////////////fuck\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

 $.fn.every = function(callback) {
  var numElements = this.length;
  return this.filter(callback).length == numElements;
};

$.fn.simpleQuiz = function(options) {
  if(!this.length) { return; };
  
  this.each(function() {
    var form = $(this);
    var submitButton = form.find(':submit');
    var questions = form.find('.question');
    var choices = form.find(':radio');

    var init = function() {
      choices.on('change', answerChanged);
      form.on('submit', answersSubmitted);

      answerChanged();
    };

    var answersSubmitted = function(event) {
      if(!hasPassed()) {
        event.preventDefault();
        alert('Please try again.');
      }
    };

    var score = function() {
      return form.find(':checked[data-correct]').length;
    };

    var hasPassed = function() {
      return score() == questions.length;
    };

    var hasCheckedElement = function() {
      return $(this).has(':checked').length;
    };

    var allQuestionsAnswered = function() {
      return questions.every(hasCheckedElement);
    };

    var answerChanged = function() {
      if(allQuestionsAnswered()) {
        submitButton.removeAttr('disabled');
      } else {
        submitButton.attr('disabled', 'disabled');
      }
    };

    init();
  });

};








