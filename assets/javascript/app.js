console.log("Javascript linked")
var setIntervalID;
var setTimeoutID;
var CorrectAnswer;
var Unanswer;
var IncorrectAnswer;
// var CountNumber=30;
var card = ("#quiz-area")


// setInterval(setTimeoutID,1000)

var CountStartNumber = 60;
var timeleft= 0;
var quiz = [{

    // question: "Which one is not part of the 3 main rock typles?",
    // answers: ["Sedimentary", "Igneous", "Metamorphic", "Sedentary"],
    // CorrectAnswer: "Sedentary",

    question: "Which country is not a part of Asia?",
    answers: ["China", "Russia", "India", "Cuba"],
    CorrectAnswer: "Cuba",

    question: "Which shark was not mentioned in the Baby Shark song?",
    answers: ["Baby", "Grandpa", "Mom", "Aunt"],
    CorrectAnswer: "Aunt",

    question: "Who is not a member of Big Bang?",
    answers: ["T.O.P", "GDRAGON", "RM", "Seungri"],
    CorrectAnswer: "RM",

    // // question: "What is 2+2?",
    // // answers: ["1", "5", "6", "3"],
    // // CorrectAnswer: "5",

    // // question: "How many books were there in the Crazy Rich Asians series?",
    // // answers: ["1","3","5","2"],
    // // CorrectAnswer: "3",

    // question: "Which is not an Ariana Grande song?",
    // answers: ["Greedy","God is a Woman","The Way","Body Count"],
    // CorrectAnswer: "Body Count",
}];



// Display the question once "Start" Button is Clicked


$(document).ready(function () {

    var questionNumber=0;
    

    function AnswerList() {
        
        for (i = 0; i <= 3; i++) {
            // var questionNumber=0;
            // $(".answers").append(quiz[0].answers[i]);
            $(".answers").append("<button class='list'>"+quiz[questionNumber].answers[i]+"</button>");
            $(".answers").append("<ul></ul>")  
            $(".list").on("click", function (){
                if (quiz.answers==quiz.CorrectAnswer){
                    CorrectAnswer++;
                }
                else if (quiz.answers!==quiz.CorrectAnswer){
                    IncorrectAnswer++;

                }
                else {
                    Unanswer++;
                }
                questionNumber++;
            })
            console.log(quiz);
            // get answer array
        }
        
    }
    function QuestionDisplay() {
        $(".questionArea").text(quiz[questionNumber].question)
        console.log(quiz)
        // get the question array
    }
    
    var interval= setInterval(Timer, 1000);

    function Timer(){
        var timer= $("#timer")
        CountStartNumber--;
        timer.html("Timer:" + CountStartNumber)
        if (CountStartNumber===timeleft){
            alert("time is up");
            clearInterval(interval);
            CountStartNumber=0;
        }

    }

    // Answers should appear below the question once "Start" button is clicked
    // Start the actual game
    function startgame () {
        Timer();
        QuestionDisplay(); 
        AnswerList();
        
    };

        // the function works and is not stack overflow is not exceeded when I pseudocode this part of the code

    function endgame(){
        $("<div></div>").append("Correct:" + CorrectAnswer, "Incorrect" + IncorrectAnswer, "Unanswered:" + Unanswer)
    }


    // setIntervalID=setInterval(getQuestion, 30000)

    // $(".quiz-area").on(click, [questions])

    // $("#smallheader").html(setIntervalID)
    // console.log(setIntervalID) 
    // i don't know why I wrote this//to look cool?>

    // Once button is clicked the startgame function is called
    $("#buttonclick").on("click", function () {
        startgame();
        $(this).hide();
        console.log(this);
        console.log("start button clicked")
    });

    // $(".header1").click(function(){
    //     $("<button>Start</button>").click(startgame())
    //     console.log(this)
    // })

});
