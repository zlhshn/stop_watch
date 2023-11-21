import './style.scss';

let [salise, seconds, minutes, hours] = [0, 0, 0, 0];


let displayTime = document.getElementById('watch');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset'); // Added resetButton
let tourList = document.getElementById('tour');
let timer = 0

const showTime = () => {
    salise++;
    if (salise == 100) {
        salise = 0;
        seconds++;
    }

    if (seconds == 60) {
        seconds = 0;
        minutes++;

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let sl = salise < 10 ? '0' + salise : salise;

    displayTime.innerHTML = h + ':' + m + ':' + s+ ':' + sl;
};





const watchStart = () => {
    if (timer !== 0) {
        clearInterval(timer);
    }
    timer = setInterval(showTime, 10);
};




// startButton.addEventListener('click',()=>{

//     watchStart()
// })


// resetButton.addEventListener('click',()=>{
//     clearInterval(timer);
//     displayTime.innerHTML  = '00:00:00:00'

// })


startButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('dur')) {
        clearInterval(timer);
        e.target.classList.remove('dur');
        startButton.innerHTML = 'Start';
        resetButton.innerHTML = 'Reset';
    } else {
        e.target.classList.add('dur');
        startButton.innerHTML = 'Stop';
        resetButton.innerHTML = 'Tour';
        watchStart();
    }
});


let tour = 1; // Initialize tour outside the event listener

resetButton.addEventListener('click', (e) => {
    if (e.target.innerHTML === 'Reset') {
        clearInterval(timer);
        [salise, seconds, minutes, hours] = [0, 0, 0, 0];
        displayTime.innerHTML = '00:00:00:00';
        tourList.innerHTML = '';
        tour = 1; // Reset tour count
    } else if (e.target.innerHTML === 'Tour') {
        // You might want to modify this part as needed
        tourList.innerHTML += `<li>
            <div><span class="tour">${tour}.</span>tour</div>
            <span class="tourNumber">${displayTime.innerHTML}</span>
        </li>`;
        ++tour; // Increment tour count
    }
});




const numberHours = document.querySelector('.number-hours')
const clockbarseconds = document.querySelector('.clock-bar-seconds')

const numbersElement = []

for (let i = 5; i <= 60; i += 5){

    numbersElement.push(`<span style="--index:${i}*5"><p>${i}</p></span>`)
}


    numberHours.insertAdjacentHTML ("afterbegin", numbersElement.join(""));


 const clockbarsecondsElement = []
for (let i = 1; i <= 60; i++){

    clockbarsecondsElement.push(`<span style="--index:${i}"><p>|</p></span>`)
}


clockbarseconds.insertAdjacentHTML ("afterbegin", clockbarsecondsElement.join(""));
    
