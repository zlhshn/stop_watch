import './style.scss';

let [micro, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById('watch');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset'); // Added resetButton
let tourList = document.getElementById('tour');
let timer;

const showTime = () => {
    micro++;
    if (micro == 100) {
        micro = 0;
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
    let mc = micro < 10 ? '0' + micro : micro;

    displayTime.innerHTML = h + ':' + m + ':' + s + ':' + mc;
};

const watchStart = () => {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(showTime, 10);
};

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
        [micro, seconds, minutes, hours] = [0, 0, 0, 0];
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


