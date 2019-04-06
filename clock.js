let time = 0;
let paused = false;
const ticker = document.getElementById('ticker');
const playToggleBtn = document.getElementById('pause');

const refresh = () => {
    //if and only if NOT paused, then keep the timer going
    if (!paused){
        time++;
        ticker.innerHTML = time;
    }
};

//this causes the function refresh to happen every second (1000ms)
const tick = () => setInterval(refresh, 1000);
tick();