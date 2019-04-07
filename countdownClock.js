console.log("working");

let time = 35*60;

const refresh = () => {
    time--;
    ticker.innerHTML = time;
   
}

const tickDown = () =>setInterval(refresh, 1000);
tickDown();