
import { timer } from "./variables.js"
import { startButton } from "./variables.js"
import { showTime } from "./variables.js"
import { displayTime } from "./variables.js"
import { resetButtons } from "./variables.js"



export const watchStart = ()=>{

    // if(timer !== null){
    //     clearInterval(timer)
    // }
  timer =  setInterval(showTime,10)
}

export let start = startButton.addEventListener('click',(e)=>{

    e.target.classList.add('dur')
    startButton.innerHTML = 'Stop'
    resetButtons.innerHTML = 'Tour'
    watchStart()
   
    
})

export const startTimer = startButton.addEventListener('click', (e) => {
    e.target.classList.add('dur');
    startButton.innerHTML = 'Stop';
    resetButtons.innerHTML = 'Tour';
    watchStart();
});