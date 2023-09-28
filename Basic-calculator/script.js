const buttons = document.querySelectorAll('.buttons>button');
const result = document.getElementById('result')

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',()=>{
        const buttonValue = buttons[i].textContent;
        if(buttonValue === 'AC'){
            clearResult();
        }
        else if(buttonValue === '='){
            calculateResult();
        }
        else if(buttonValue === 'clear'){
            clearLastchar();
        }
        else{
            appendValue(buttonValue)
        }
    });
}

function clearResult(){
    result.value = '';
}
function calculateResult(){
    result.value = eval(result.value)   // eval() method is used for evaluate or calculate values
}
function appendValue(buttonValue){
    result.value += buttonValue
}

function clearLastchar(){
    let x = result.value.split('');
    x.pop();
    result.value = x.join('')
}