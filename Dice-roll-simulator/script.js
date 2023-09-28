const btnEl = document.querySelector('#roll-button')
const diceEl = document.querySelector('.dice')
const resultList = document.querySelector('#roll-history')

let lastResults = []

function rollDice() {
    const randNum = parseInt(Math.random() * 6 + 1)
    let diceFace = getResult(randNum)
    diceEl.innerHTML = diceFace
    lastResults.push(diceFace)

    resultList.innerHTML = ' '
    lastResults.forEach((lstRslt, index) => {
        resultList.innerHTML += `<li>Roll ${index + 1} <span>${lastResults[index]} </span></li>`
    })
    checkClearBtn()
}



function getResult(randNum) {
    switch (randNum) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 2:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return '&#9856'
    }
}


function checkClearBtn() {
    if (lastResults.length === 0) {
        document.querySelector('#clear-button').style.display = 'none'
    } else {
        document.querySelector('#clear-button').style.display = 'inline-block'

    }
}

btnEl.addEventListener('click', () => {
    diceEl.classList.add('roll-animation')
    setTimeout(() => {
        diceEl.classList.remove('roll-animation')
        rollDice()
    }, 1500)

})

document.querySelector('#clear-button').addEventListener('click', () => {
    resultList.innerHTML = '';
    lastResults = []
    checkClearBtn();
})