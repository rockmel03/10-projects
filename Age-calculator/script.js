const inputAge = document.querySelector('#input');
const formEl = document.querySelector('.container')
const result = document.querySelector('#result')

function calculateAge(value) {

    let currentYear = new Date().getFullYear()
    let userYear = new Date(value).getFullYear();
    let age = currentYear - userYear

    let currentMonth = new Date().getMonth()
    let userMonth = new Date(value).getMonth()

    if (currentMonth < userMonth) {
        age--
    }
    return age
}


formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    let Age = calculateAge(inputAge.value)
    if (Age >= 0) {
        result.innerHTML = `Your Age is ${Age} Years Old`
    } else {
        result.innerHTML = `please enter a valid age`
    }
})