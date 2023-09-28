const billAmountEl = document.getElementById('bill-amount')
const tipPercentEl = document.getElementById('tip-percentage')

const formEl = document.getElementById('tip-form');

formEl.addEventListener('submit',(e) => {
    e.preventDefault()
    let totalAmount = Number(billAmountEl.value) + Number(billAmountEl.value * tipPercentEl.value / 100)
    document.getElementById('total-amount').innerHTML = totalAmount
})