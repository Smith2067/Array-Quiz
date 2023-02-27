const questions = [
    {
        id: "questionOne",
        text: "Which of the following browsers supports HTML5 in its latest version?",
        answers: [
            {text: "Mozilla Firefox", correct: false, letter: "a"},
            {text: "Opera", correct: false, letter: "b"},
            {text: "Both of the above.", correct: true, letter: "c"},
            {text: "None of the above.", correct: false, letter: "d"}
        ],
        explanation: "Both of the above browsers supports HTML5."
    },
    {
        id: "questionTwo",
        text: "Which of the following tags represent a piece of content that is only slightly related to the rest of the page in HTML5?",
        answers: [
            {text: "section", correct: false, letter: "a"},
            {text: "article", correct: false, letter: "b"},
            {text: "aside", correct: true, letter: "c"},
            {text: "header", correct: false, letter: "d"}
        ],
        explanation: "'aside' tag represents a piece of content that is only slightly related to the rest of the page."
    },
    {
        id: "questionThree",
        text: "Which of the following input control represents a date and time (year, month, day, hour, minute, second, fractions of a second) encoded according to ISO 8601 with the time zone set to UTC in Web Form 2.0?",
        answers: [
            {text: "datetime", correct: true, letter: "a"},
            {text: "datetime-local", correct: false, letter: "b"},
            {text: "date", correct: false, letter: "c"},
            {text: "month", correct: false, letter: "d"}
        ],
        explanation: "'datetime' input control represents a date and time (year, month, day, hour, minute, second, fractions of a second) encoded according to ISO 8601 with the time zone set to UTC."
    },
    {
        id: "questionFour",
        text: "Which of the following is true about Session Storage in HTML5?",
	    answers: [
            {text: "HTML5 introduces the sessionStorage attribute which would be used by the sites to add data to the session storage.", correct: false, letter: "a"},
            {text: "It will be accessible to any page from the same site opened in that window i.e. session.", correct: false, letter: "b"},
            {text: "As soon as you close the window, the session would be lost.", correct: false, letter: "c"},
            {text: "All of the above.", correct: true, letter: "d"}
        ],
        explanation: "All of the above options are correct."
    },
    {
        id: "questionFive",
        text: "When a session storage data gets deleted in HTML5 __",
	    answers: [
            {text: "The Session Storage Data would be deleted by the browsers immediately after the session gets terminated.", correct: true, letter: "a"},
            {text: "If you want to clear all settings, you need to call localStorage.clear() method.", correct: false, letter: "b"},
            {text: "Both of the above.", correct: false, letter: "c"},
            {text: "None of the above.", correct: false, letter: "d"}
        ],
        explanation: "The Session Storage Data would be deleted by the browsers immediately after the session gets terminated."
    },
    {
        id: "questionSix",
        text: "Which of the following is true about the 'canvas' tag in HTML5?",
	    answers: [
            {text: "HTML5 element 'canvas' gives you an easy and powerful way to draw graphics using JavaScript.", correct: false, letter: "a"},
            {text: "It can be used to draw graphs, make photo compositions or do simple (and not so simple) animations.", correct: false, letter: "b"},
            {text: "Both of the above.", correct: true, letter: "c"},
            {text: "None of the above.", correct: false, letter: "d"}
        ],
        explanation: "Both of the above options are correct."
    },
    {
        id: "questionSeven",
        text: "Which of the following attributes triggers an abort event?",
	    answers: [
            {text: "offline", correct: false, letter: "a"},
            {text: "onabort", correct: true, letter: "b"},
            {text: "abort", correct: false, letter: "c"},
            {text: "onbeforeonload", correct: false, letter: "d"}
        ],
        explanation: "onabort − Triggers an abort event."
    },
    {
        id: "questionEight",
        text: "Which of the following attributes trigger an event when the window loses focus?",
	    answers: [
            {text: "onbeforeload", correct: false, letter: "a"},
            {text: "onblur", correct: true, letter: "b"},
            {text: "onlostfocus", correct: false, letter: "c"},
            {text: "lostfocus", correct: false, letter: "d"}
        ],
        explanation: "onblur − Triggers event when the window loses focus."
    },
    {
        id: "questionNine",
        text: "Which of the following attributes trigger an event when an element leaves a valid drop target?",
	    answers: [
            {text: "ondrag", correct: false, letter: "a"},
            {text: "ondragleave", correct: true, letter: "b"},
            {text: "ondragover", correct: false, letter: "c"},
            {text: "ondragstart", correct: false, letter: "d"}
        ],
        explanation: "ondragleave − Triggers event when an element leaves a valid drop target."
    },
    {
        id: "questionTen",
        text: "Which of the following attributes trigger an event when an element gets user input?",
	    answers: [
            {text: "onhaschange", correct: false, letter: "a"},
            {text: "oninput", correct: true, letter: "b"},
            {text: "ondata", correct: false, letter: "c"},
            {text: "onloadeddata", correct: false, letter: "d"}
        ],
        explanation: "oninput − Triggers event when an element gets user input."
    }
];

const quiz = document.getElementById("quiz");

questions.forEach(question => {
    quiz.innerHTML = quiz.innerHTML + 
    `<div id="${question.id}Div" class="questionContainer">
    <p id="${question.id}">${question.text}</p>
    <div>
    <input type="radio" name="${question.id}" value="${question.answers[0].correct}" id="${question.id + question.answers[0].letter}">
    <label for="${question.id + question.answers[0].letter}">${question.answers[0].letter}. ${question.answers[0].text}</label>
    </div>
    <div>
    <input type="radio" name="${question.id}" value="${question.answers[1].correct}" id="${question.id + question.answers[1].letter}">
    <label for="${question.id + question.answers[1].letter}">${question.answers[1].letter}. ${question.answers[1].text}</label>
    </div>
    <div>
    <input type="radio" name="${question.id}" value="${question.answers[2].correct}" id="${question.id + question.answers[2].letter}">
    <label for="${question.id + question.answers[2].letter}">${question.answers[2].letter}. ${question.answers[2].text}</label>
    </div>
    <div>
    <input type="radio" name="${question.id}" value="${question.answers[3].correct}" id="${question.id + question.answers[3].letter}">
    <label for="${question.id + question.answers[3].letter}">${question.answers[3].letter}. ${question.answers[3].text}</label>
    </div>
    <p id="${question.id}Explanation" style="display: none;" class="hidden">${question.explanation}</p>
    </div>`;
});

var score = 0;

function quizSubmit(){ 
    for (let j = 0; j < questions.length; j++){
        var x = document.getElementsByName(questions[j].id);
        x.forEach(radio =>{
            if (radio.checked == true){
                if (radio.value == "true"){
                    score = score + 1;
                    document.getElementById(questions[j].id+"Explanation").style.backgroundColor = "#96ffa4";
                }
                else{
                    document.getElementById(questions[j].id+"Explanation").style.backgroundColor = "#ff8080";
                }
            }
        })
    }
    document.getElementById('submit').style.display = "none";
    var hidden = document.getElementsByClassName('hidden');
    for(var i = 0; i < hidden.length; i++){
      hidden[i].style.display = "block";
      console.log(i);
    }

    document.getElementById("score").innerText = "Your score is " + score +" out of " + questions.length + ".";
}

document.getElementById('submit').addEventListener("click", quizSubmit);
