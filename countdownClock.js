let realTime = 2;

let time = (realTime);
const addIt = document.getElementById("breakall");
const removeIt = document.getElementById("clockshow");

let workTime = 25;
let breakTime = 5;

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

                breakTime--;
                console.log("breakTime is " + breakTime);
                }
        }
        

    }

    else{
       

    }
    
}

const tickDown = () =>setInterval(refresh, 1000);
tickDown();