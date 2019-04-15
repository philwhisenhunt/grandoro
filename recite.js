let time = 0;

const count = () => {
time++;
console.log(time);
}

const countdown = () => setInterval(count, 1000);
countdown();
