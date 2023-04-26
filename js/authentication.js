function checkValidValue(guess) {
    const number = +guess

    if (invalidGuess(number)) {
        if (guess.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Press button to play again</h3>
                <button id="play-again" class="btn-play">Play Again</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementGuess.innerHTML += '<div>Invalid Value</div>';
            return
        }
        
    }

    if (numberNotAllowed(number)) {
        elementGuess.innerHTML += `<div>Invalid Number: Say a number between ${lowerNumber} and ${higherNumber}</div>`
        return
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2>You got it right!</h2>
            <h3>The secret number was ${secretNumber}</h3>

            <button id="play-again" class="btn-play">Play Again</button>
        `
    } else if (number > secretNumber) {
        elementGuess.innerHTML += `
        <div>The secret number is lower <i class="fa-solid fa-down-long"></i></div>
    `} else {
        elementGuess.innerHTML += `
        <div>The secret number is higher <i class="fa-solid fa-up-long"></i></div>
    `}
}

function invalidGuess(number) {
    return Number.isNaN(number)
}

function numberNotAllowed(number) {
    return number > higherNumber || number < lowerNumber
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again') {
        window.location.reload()
    }
})