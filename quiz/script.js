const questions=[
    {
        question:"which function is used to dynamically allocate memory in C ?",
        answers:[
            {text:"free()" ,correct:false},
            {text:"malloc()" ,correct:true},
            {text:"calloc()" ,correct:false},
            {text:"realloc()" ,correct:false},
        ]
    },
    {
        question:"what is the defult return type of the main function in C?",
        answers:[
            {text:"void" ,correct:false},
            {text:"char" ,correct:false},
            {text:"float" ,correct:false},
            {text:"int" ,correct:true},
        ]
    },
    {
        question:"which of the following is used to prtint text on the screen in C ?",
        answers:[
            {text:"printf()" ,correct:true},
            {text:"cin" ,correct:false},
            {text:"println()" ,correct:false},
            {text:"cout" ,correct:false},
        ]
    },
    {
        question:"which function is used to read a string from the user in C ?",
        answers:[
            {text:"gets()" ,correct:false},
            {text:"fgets" ,correct:false},
            {text:"scanf()" ,correct:true},
            {text:"input()" ,correct:false},
        ]
    },
    {
        question:"which library function is used to find the length of a string in C?",
        answers:[
            {text:"strlen()" ,correct:true},
            {text:"size()" ,correct:false},
            {text:"strlength()" ,correct:false},
            {text:"length()" ,correct:false},
        ]
    },
    {
        question:"What is the default value of an uninitilized local variable in C?",
        answers:[
            {text:"0" ,correct:false},
            {text:"NULL" ,correct:false},
            {text:"Garbage value" ,correct:true},
            {text:"It depends on the compiler" ,correct:false},
        ]
    },
    {
        question:"which loop structure is guarented to execute atleast once in C ?",
        answers:[
            {text:"for loop" ,correct:false},
            {text:"while loop" ,correct:false},
            {text:"do-while loop" ,correct:true},
            {text:"All of above" ,correct:false},
        ]
    },
    {
        question:"which keyword  is used to define a constant variable in C ?",
        answers:[
            {text:"static" ,correct:false},
            {text:"const" ,correct:true},
            {text:"final" ,correct:false},
            {text:"constant" ,correct:false},
        ]
    },
    {
        question:"Which operator is used to access the value at the address stored in a pointer?",
        answers:[
            {text:"&" ,correct:false},
            {text:"->" ,correct:false},
            {text:"*" ,correct:true},
            {text:"%" ,correct:false},
        ]
    },
    {
        question:"which headerfile is required for using the printf() and scanf() function in C ?",
        answers:[
            {text:"stdlib.h" ,correct:false},
            {text:"stdio.h" ,correct:true},
            {text:"string.h" ,correct:false},
            {text:"math.h" ,correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+". "+ currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild
        (button);
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click" ,selectAnswer);
    });
}

function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct==="true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display="block"
}

nextButton.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        handlenextButton();
    }else{
        startQuiz();
    }
});

function showScore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play again";
    nextButton.style.display = "block";
}

function handlenextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

startQuiz();