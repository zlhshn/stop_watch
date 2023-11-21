import { timer } from "./variables.js"
import { startButton } from "./variables.js"
import { showTime } from "./variables.js"
import { displayTime } from "./variables.js"
import { resetButtons } from "./variables.js"
import { micro,minutes,seconds,hours } from "./variables.js"
// import { watchStart,start } from './src/start.js'




export let stop = startButton.addEventListener('click',(e)=>{

    if(e.target.classlist.contains('start')){

        clearInterval(timer)
    }
})


export let  getTour = ()=>{

clearInterval(timer)

let [micro , seconds, minutes, hours] = [0,0,0,0]
displayTime.innerHTML = "00:00:00:00"
tourList.innerHTML = ''

}
