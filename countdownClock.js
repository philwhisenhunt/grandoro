let workTime = 20;
let setTime = workTime;
let breakTime = 0;
let overTime = 0;
let storedBreakTime = 0;
let storedWorkTime = 0;
const addIt = document.getElementById("breakall");
const removeIt = document.getElementById("clockshow");
const hstatus = document.getElementById("hstatus");
const pauseResume = document.getElementById("pause_resume");
const breakCount = document.getElementById("totalBreaked");
const workCount = document.getElementById("totalWorked");
let addedTime = false;
let allTime = 0;



//paused is separate
let status = "working";
status = "onbreak"
//status = "paused";


//make a working or breaking status, or make a third one for paused. 
//make as a string
let seconds = workTime % 60;
let minutesLeft = Math.floor(workTime/60);
// console.log(minutesLeft);

tickerMinutes.innerHTML = minutesLeft.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
tickerSeconds.innerHTML = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let paused = false;
let working = true;

const playToggleBtn = document.getElementById("pause_resume");
const workBreakBtn = document.getElementById("workBreak");
playToggleBtn.addEventListener("click", () => (paused = !paused));


//workBreakBtn.addEventListener("click", () => (working = !working));
workBreakBtn.addEventListener("click", function togglePause(){
    working = !working;
    console.log("storedBreakTime before was " + storedBreakTime);
    console.log("BreakTime is " + breakTime);
    storedBreakTime = storedBreakTime + breakTime;
    storedWorkTime = storedWorkTime + overTime;
    workTime = 0;
    overTime = 0;
    breakTime = 0;
    addedTime = false;
    // console.log("storedBreakTime after is " + storedBreakTime);
    // console.log("storedWorkTime after is " + storedWorkTime);

});

const refresh = () => {
    if(!paused){
        workBreakBtn.style.visibility = "visible";


        

        if(working){
            if(workTime <= 0){
                
                if(!addedTime){
                    
                    storedWorkTime = storedWorkTime + setTime;
                    console.log("storedWorkTime is " + storedWorkTime);
                    addedTime = true;
                }
                

                overTime++;
               // console.log("overTime is: " + overTime);
                document.body.style.backgroundColor = "black";
                hstatus.innerHTML = "Working Overtime";
                tickerMinutes.innerHTML = (Math.floor(overTime/60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}));
                tickerSeconds.innerHTML = (overTime % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

                workTime = setTime;
                console.log('workTime is ' + workTime + 'and setTime is ' + setTime);
                
                
            }

            else{
                workTime--;
                //console.log("workTime is: " + workTime);
                document.body.style.backgroundColor = "black";
                hstatus.innerHTML = "Working";
                pauseResume.innerHTML = "Pause";
                workBreakBtn.innerHTML = "Break";
                
                //console.log("With pad start time is" + );
            
                let seconds = workTime % 60;
                let minutesLeft = Math.floor(workTime/60);
                // minutesLeft = Math.abs(minutesLeft);
                tickerMinutes.innerHTML = minutesLeft.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
                //console.log("The minutesLeft variable is " + minutesLeft);
                tickerSeconds.innerHTML = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

                breakCount.innerHTML = storedBreakTime;

            }
            
       }
       
        else{
            
            document.body.style.backgroundColor = "#00ace6";
            breakTime++;
            breakMinutes.innerHTML = (Math.floor(breakTime/60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}));
            breakSeconds.innerHTML = (breakTime % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            hstatus.innerHTML = "Breaking";
            workBreakBtn.innerHTML = "Resume Work";

            
            //console.log("breakTime is " + breakTime);
            workCount.innerHTML =  storedWorkTime;


                
        }
        // if(breakTime < 0 && time == 0){
        //     breakTime = 0;
        //     console.log("At this moment breakTime is " + breakTime);
        //     document.body.style.backgroundColor = "#98ff98";
        //     hstatus.innerHTML = "Neither working nor breaking";
        // }
        
        console.log("Alltime is " + allTime);
        console.log("storedBreakTime is " + storedBreakTime);
        console.log("storedWorkTime is " + storedWorkTime);
        allTime++;

    }

    else{
       //do nothing
       hstatus.innerHTML = "Paused";
       workBreakBtn.style.visibility = "hidden";
       //console.log("At this moment breakTime is " + breakTime);
       document.body.style.backgroundColor = "#404040";
       pauseResume.innerHTML = "Resume";

    }
    
}

const tickDown = () =>setInterval(refresh, 1000);
tickDown();