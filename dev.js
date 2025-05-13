// Timer function in JavaScript
function startTimer(durationInSeconds) {
    let timer = durationInSeconds;
    const interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;

        console.log(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

        if (timer <= 0) {
            clearInterval(interval);
            console.log("Timer finished!");
        } else {
            timer--;
        }
    }, 1000);
}

// Example usage: Start a 5-minute timer
startTimer(5 * 60);