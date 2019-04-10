//make 5 minutes in seconds
//let realTime = 60*5;
let realTime = 5;

//use pad start?

let time = (realTime);



let workTime = 25;
let breakTime = 5;
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
        time--;
        
       
        let leftover = time % 60;
        let minutesLeft = Math.floor(time/60);
        tickerMinutes.innerHTML = minutesLeft;
        tickerSeconds.innerHTML = leftover;
        console.log("time is "+ time);
        console.log("minutesLeft is " + minutesLeft);
        console.log("leftover is" + leftover);  

        if(time <= 0){
            
            time = 0;
            // ticker.innerHTML = time;
            document.body.style.backgroundColor = "red";

           
    


        }
    }

    else{
       

    }
    if(breakTime >= 0){
        breakTime--;
        console.log("breakTime is " + breakTime);
        }
}

const tickDown = () =>setInterval(refresh, 1000);
tickDown();