/* call the el by id */ 

const daysEl = document.getElementById('days');
const hourseEl = document.getElementById('hourse');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

/* Countdown timer function */ 

const newYear = '1 jan 2021';

function CountdownTimer() {

    /* Set the times */

    const newYearTime = new Date(newYear);
    const currentTime = new Date()
    const totaleSeconds = Math.floor((newYearTime - currentTime) / 1000);

    /* convert seconds to minutes , hourse ... */

    const seconds = Math.floor(totaleSeconds) % 60;
    const minutes = Math.floor(totaleSeconds / 60) % 60;
    const hourse = Math.floor(totaleSeconds / 3600) % 24;
    const days = Math.floor(totaleSeconds / 3600 / 24 );
    
    /* show  results in screen */ 

    daysEl.innerHTML = days;
    hourseEl.innerHTML = hourse; 
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    
};
CountdownTimer()

setInterval(CountdownTimer , 1000);