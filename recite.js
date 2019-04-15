let time = 0;

const count = () => {
time++;
}

const countdown = () => setInterval(refresh, 1000);
countdown();
