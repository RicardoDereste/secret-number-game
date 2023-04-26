const lowerNumber = 1
const higherNumber = 1000

const secretNumber = generateRandomNumber()

function generateRandomNumber() {
    return parseInt(Math.random() * higherNumber + 1)
}

console.log('Secret Number:', secretNumber)

const elementLowerNumber = document.getElementById('lower-number')
elementLowerNumber.innerHTML = lowerNumber

const elementHigherNumber = document.getElementById('higher-number')
elementHigherNumber.innerHTML = higherNumber