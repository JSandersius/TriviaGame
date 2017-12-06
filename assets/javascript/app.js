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





$.fn.every = function(callback) { //////$.fn.every = function(callback)
    var numElements = this.length;
    return this.filter(callback).length == numElements;
};

$.fn.simpleQuiz = function(options) {
        if (!this.length) { return; };

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
                        if (!hasPassed()) {
                            event.preventDefault();
                            alert('Please try again.');
                        }
                    };

                    var score = function() {
                        return form.find(':checked[data-correct]').length;
                    };
                    console.log(score)

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
                        if (allQuestionsAnswered()) {
                            submitButton.removeAttr('disabled');
                        } else {
                            submitButton.attr('disabled', 'disabled');


                            var returnAnswers = function() {
                                if (timeLeft == 0)
                                    document.getElementById("timeRemainingBox");

                                : checked[data - correct]
                            }


                        };

                    };

                };







