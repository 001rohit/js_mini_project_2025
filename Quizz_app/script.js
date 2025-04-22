const  quizeData=[
    {
        id:1,
        question:"How old is Florin?",
        a:"10",
        b:"17",
        c:"26",
        d:"110",
        correct:"26"
    },
    {
        id:2,
        question:"what is the most used programming language in 2019?",
        a:"java",
        b:"c",
        c:"Python",
        d:"Javascript",
        correct:"Javascript"
    },
    {
        id:3,
        question:"Who is the President of US?",
        a:"Florin Pop",
        b:"Donal Trump",
        c:"Ivan Saldano",
        d:"Mihai Andrei",
        correct:"Donal Trump"
    },
    {
        id:4,
        question:"What does HTML stand for?",
        a:"Hypertext Markup Language",
        b:"Cascading Style sheet",
        c:"Jason Object  Notation",
        d:"Application Programming Interfece",
        correct:"Hypertext Markup Language"
    }
]
const question = document.querySelector(".question");
const option1 = document.querySelector(".opt1");
const option2 = document.querySelector(".opt2");
const option3 = document.querySelector(".opt3");
const option4 = document.querySelector(".opt4");
const ansElement = document.querySelectorAll(".answare")
const submitBtn = document.querySelector("#btn")
// console.log(question.textContent)
// console.log(option1.textContent)
// console.log(option2.textContent)

// console.log(submitBtn)

let currentQuestion = 0;    
let score = 0;  
console.log(ansElement)
// console.log(quizeData[currentQuestion].question)
// console.log(quizeData[currentQuestion].a)
// console.log(quizeData[currentQuestion].b)
// console.log(quizeData[currentQuestion].c)
// console.log(quizeData[currentQuestion].d)

question.textContent = `Question ${quizeData[currentQuestion].id}: ${quizeData[currentQuestion].question}`;
option1.textContent = quizeData[currentQuestion].a;
option2.textContent = quizeData[currentQuestion].b;
option3.textContent = quizeData[currentQuestion].c;
option4.textContent = quizeData[currentQuestion].d;

console.log(typeof ansElement)
submitBtn.addEventListener("click",()=>{
    const checkedAns = document.querySelector("input[type=radio]:checked");
    console.log(checkedAns.nextElementSibling.textContent)
    console.log(quizeData[currentQuestion].correct);
    
    if(checkedAns==null){
        alert("Please select an answer")
    }
    else{
        if(checkedAns.nextElementSibling.textContent === quizeData[currentQuestion].correct){
            score++;
    }
    currentQuestion++;
    if(currentQuestion<quizeData.length){
        question.textContent = `Question ${quizeData[currentQuestion].id}: ${quizeData[currentQuestion].question}`;
        option1.textContent = quizeData[currentQuestion].a;
        option2.textContent = quizeData[currentQuestion].b;
        option3.textContent = quizeData[currentQuestion].c;
        option4.textContent = quizeData[currentQuestion].d;
        checkedAns.checked =false;
    }
    else{
        alert(`Quiz completed! Your score is ${score} out of ${quizeData.length}`);
        location.reload(); // Reload the page to restart the quiz
    }
}})

// function quize(){
//      quizeData.map((data,index)=>{
//         question.innerHTML = data.question;
//         option1.innerHTML = data.a;
//         option2.innerHTML = data.b;
//         option3.innerHTML = data.c;
//         option4.innerHTML = data.d;
//         console.log("correct answer is: " + data.correct);
//         console.log("===================================");
//      });
// }
// quize();
// let showData1 = quizeData[Math.floor(Math.random() * quizeData.length)];
// console.log(showData1);

