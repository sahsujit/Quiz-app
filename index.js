const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Where is janki temple located?",
    a: "kathmandu",
    b: "Dharan",
    c: "pokhara",
    d: "Janakpur",
    correct: "d",
},

{
    question: "When is pi day celebrated around the world?",
    a: "march 7",
    b: "march 9",
    c: "march 14",
    d: "march 10",
    correct: "c",
},

{
    question: "How many digits does the value of pi have?",
    a: "7",
    b: "9",
    c: "Infinite",
    d: "14",
    correct: "c",
},
{
    question: "What is the only number that has letters in alphabetical order?",
    a: "four",
    b: "forty",
    c: "thirty",
    d: "twelve",
    correct: "b",
},
{
    question: "Which country does volleybal originate form?",
    a: "China",
    b: "India",
    c: "England",
    d: "USA",
    correct: "d",
},

{
    question: "What is the average life of RBC?",
    a: "15 days",
    b: "20 days",
    c: "115 days",
    d: "120 days",
    correct: "d",
},
{
    question: "How many bones are there in the face?",
    a: "9",
    b: "12",
    c: "14",
    d: "15",
    correct: "c",
},
{
    question: "During which year did World War I begin?",
    a: "1814 A.D",
    b: "1914 A.D",
    c: "1918 A.D",
    d: "1915 A.D",
    correct: "b",
},
{
    question: "How many years did it take to build the Taj Mahal?",
    a: "20",
    b: "10",
    c: "21",
    d: "5",
    correct: "a",
},
{
    question: "Which animal is having the longest pregnancy period?",
    a: "Lion",
    b: "Elephant",
    c: "Cow",
    d: "Monkey",
    correct: "b",
},
{
    question: "which Country was abacus invented?",
    a: "USA",
    b: "China",
    c: "Russia",
    d: "India",
    correct: "b",
},
{
    question: "which is the hottest place in Nepal?",
    a: "Kathmandu",
    b: "Nepalgung",
    c: "pokhara",
    d: "janakpur",
    correct: "b",
},
{
    question: "What is the total sum of number 1 to 60?",
    a: "820",
    b: "840",
    c: "900",
    d: "1830",
    correct: "d",
},
{
    question: "Who is the director of 3 idiots movie?",
    a: "Rohit shetti",
    b: "S.Shankar",
    c: "Rajkumar Hirani",
    d: "Karan johar",
    correct: "c",
},
{
    question: "she`d rather repeat the lessson,.....?",
    a: "wouldn`t she",
    b: "will she",
    c: "shall she",
    d: "won't she",
    correct: "a",
},
{
    question: "which date is the international womans day celebrated?",
    a: "8 january",
    b: "9 march",
    c: "8 may",
    d: "8 march",
    correct: "d",
},





];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);