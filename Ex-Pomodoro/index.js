let minutes, seconds, counterInterval = undefined

const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

resetCounter()

function updateCounterElement() {
    minutesElement.innerHTML = minutes < 10 ? `0${minutes}` : minutes
    secondsElement.innerHTML = seconds < 10 ? `0${seconds}` : seconds
}

function startCounter() {
    if (counterInterval) return

    counterInterval = setInterval(() => {
        console.log("passou um segundo")
        const timeOver = !seconds && !minutes
        const secondsOver = !seconds

        if (timeOver) return destroyInterval()

        if (secondsOver) {
            seconds = 59
            --minutes;
            updateCounterElement()
            return
        }

        --seconds
        updateCounterElement()

    }, 1000);

}

function pauseCounter() {
    destroyInterval()
}

function destroyInterval() {
    clearInterval(counterInterval)
    counterInterval = undefined
}


function resetCounter() {
    destroyInterval()
    minutes = 25
    seconds = 00
    updateCounterElement()
}