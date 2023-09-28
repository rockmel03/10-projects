const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');
const timerEl = document.getElementById('timer');


let interval;
let timeleft = 1500;
function updateTimer(){
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    let formatedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`

    timerEl.innerText = formatedTime;
}


function startTimer(){
    interval = setInterval(() => {
        timeleft--
        updateTimer()
        if(timeleft===0){
            clearInterval(interval)
            alert(`Times's up!`)
            timeleft = 1500;
        }
    }, 1000);

    startEl.disabled = true;
    stopEl.disabled = false;
}
function stopTimer(){
    clearInterval(interval)
    
    startEl.disabled = false;
    stopEl.disabled = true;
}
function resetTimer(){
    clearInterval(interval)
    timeleft = 1500;
    startEl.disabled = false;
    stopEl.disabled = true;

    timerEl.innerText = `${(Math.floor(timeleft/60)).toString().padStart(2,"0")}:${(timeleft%60).toString().padStart(2,"0")}`;
    //or you can write insted of above line next line will same result
    // timerEl.innerText = '25:00'
}


startEl.addEventListener('click',()=>{
    startTimer()
});
stopEl.addEventListener('click',()=>{
    stopTimer()
});
resetEl.addEventListener('click',()=>{
    resetTimer()
});