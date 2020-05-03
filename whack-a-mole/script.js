const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
})
let randomPosition = square[Math.floor(Math.random() * square.length)]
randomPosition.classList.add('mole')

hitPosition = randomPosition.id
}

square.forEach(squar => {
    squar.addEventListener('mouseup', ()=> {
        if (squar.id === hitPosition) {
            result = result + 1
            score.textContent = result
            
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0 ) {
        clearInterval(timerId)
        alert(`Game Over !! Your final score is ${result}`)
    }
}
let timerId = setInterval(countDown, 1000)
