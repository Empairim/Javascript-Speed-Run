const num1 = Math.ceil(Math.random() * 10) /*adding *10 makes it generate a num between 1 and ten instead of 1 and 0*/
const num2 = Math.ceil(Math.random() * 10)

const questionEl = document.getElementById('question')

const formEl = document.getElementById('form')

const inputEl = document.getElementById('input')

const scoreEl = document.getElementById('score')


let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAnswer = num1 * num2

formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value
    if (userAns === correctAnswer) {
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }
});

function updateLocalStorage() {
    localStorage.setItem("score",JSON.stringify(score))
}

/*the + turns the input from a string to an int*/

