
export let [micro , seconds, minutes, hours] = [0,0,0,0]

export let displayTime = document.getElementById('watch')
export let startButton = document.getElementById('start')
export let resetButtons = document.getElementById('reset')
export let tourList = document.getElementById('tour')
export let timer 

export const showTime = ()=>{
    micro++
    if(micro == 100){
        micro = 0
        seconds++
    }
    
    if(seconds == 60){
        seconds = 0
        minutes++
        if(minutes == 60){
            minutes = 0
            hours++
     }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let mc = micro <10 ? "0"  +  micro : micro

  displayTime.innerHTML = h + ":" + m + ":" + s + ":"+ mc;
}

