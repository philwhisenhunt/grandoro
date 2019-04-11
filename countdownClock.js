let realTime = 2;

let time = (realTime);
const addIt = document.getElementById("breakall");
const removeIt = document.getElementById("clockshow");
const hstatus = document.getElementById("hstatus");

let workTime = 25;
let breakTime = 1;

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
tickerMinutes.innerHTML = minutesLeft;
tickerSeconds.innerHTML = leftover;

let paused = false;
let working = true;
const playToggleBtn = document.getElementById("pause");
playToggleBtn.addEventListener("click", () => (paused = !paused));

const refresh = () => {
    if(!paused){
        if(time>0){
        time--;
        console.log("time is: " + time);
        //console.log("With pad start time is" + );
       
        let leftover = time % 60;
        let minutesLeft = Math.floor(time/60);
        tickerMinutes.innerHTML = minutesLeft;
        console.log("The minutesLeft variable is " + minutesLeft);
        tickerSeconds.innerHTML = leftover;
       }
       
        if(time <= 0){
            
            time = 0;
            
            document.body.style.backgroundColor = "red";
            //paused = true;

            if(breakTime >= 0 && time == 0 ){
                //addIt.style.visibility = "visible";
                //removeIt.style.visibility = "hidden";
                breakMinutes.innerHTML = Math.floor(time/60);
                breakSeconds.innerHTML = breakTime % 60;
                hstatus.innerHTML = "Breaking";

                breakTime--;
                console.log("breakTime is " + breakTime);
                }

                
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