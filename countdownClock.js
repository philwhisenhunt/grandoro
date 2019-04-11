let realTime = 2;

let time = (realTime);
const addIt = document.getElementById("breakall");
const removeIt = document.getElementById("clockshow");
const hstatus = document.getElementById("hstatus");

let workTime = 25;
let breakTime = 0;

//paused is separate
let status = "working";
status = "onbreak"
//status = "paused";


//make a working or breaking status, or make a third one for paused. 
//make as a string
let leftover = time % 60;
let minutesLeft = Math.floor(time/60);
console.log(minutesLeft);
//gets the time to start at the right thing
// ticker.innerHTML = time;
tickerMinutes.innerHTML = minutesLeft.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
tickerSeconds.innerHTML = leftover.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let paused = false;
let working = true;

const playToggleBtn = document.getElementById("pause");
const workBreakBtn = document.getElementById("workBreak")
playToggleBtn.addEventListener("click", () => (paused = !paused));
workBreakBtn.addEventListener("click", () => (working = !working));

const refresh = () => {
    if(!paused){

        if(working){
        time--;
        console.log("time is: " + time);
        //console.log("With pad start time is" + );
       
        let leftover = time % 60;
        let minutesLeft = Math.floor(time/60);
        tickerMinutes.innerHTML = minutesLeft.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        console.log("The minutesLeft variable is " + minutesLeft);
        tickerSeconds.innerHTML = leftover.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
       }
       
        else{
            
            document.body.style.backgroundColor = "#00ace6";
            breakTime++;
            breakMinutes.innerHTML = (Math.floor(time/60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}));
            breakSeconds.innerHTML = (breakTime % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            hstatus.innerHTML = "Breaking";

            
            console.log("breakTime is " + breakTime);
                

                
        }
        if(breakTime < 0 && time == 0){
            breakTime = 0;
            console.log("At this moment breakTime is " + breakTime);
            document.body.style.backgroundColor = "#98ff98";
            hstatus.innerHTML = "Neither working nor breaking";
        }
        

    }

    else{
       //do nothing

    }
    
}

const tickDown = () =>setInterval(refresh, 1000);
tickDown();