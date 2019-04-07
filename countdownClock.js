console.log("working");

let time = 35*60;
let paused = false;
let working = true;

const refresh = () => {
    if(!paused){
        if(working){
            
        }
    }
    time--;
    ticker.innerHTML = time;
   
}

const tickDown = () =>setInterval(refresh, 1000);
tickDown();