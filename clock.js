const workTime = 30;
const breakTime = 15;
let time = 0;
let paused = false;
let working = true;
const ticker = document.getElementById('ticker');
const playToggleBtn = document.getElementById('pause');

const status = document.getElementById('status');

playToggleBtn.addEventListener("click", () => (paused = !paused));

const refresh = () => {
    //if and only if NOT paused, then keep the timer going
    if (!paused){

        if (working){
            if(time>=workTime){
                working = false;
                time = 0;
            }
        } else{
            if(time >= breakTime){
                working = true;
                time = 0;
            }
        }

        time++;
        ticker.innerHTML = time;
        status.innerHTML = working ? "Do working things" : "Relax";
    }
};

//this causes the function refresh to happen every second (1000ms)
const tick = () => setInterval(refresh, 1000);
tick();