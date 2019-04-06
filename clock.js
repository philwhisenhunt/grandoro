let time = 0;
console.log(time);

const refresh = () =>{
    time++;
    console.log(time);
}
//this causes the function refresh to happen every second (1000ms)
const tick = () => setInterval(refresh, 1000);
tick();