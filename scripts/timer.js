let currentTime = 0;
let maxTime = 10
let inter;
let timerWindow = new TimerWindow()

Hooks.on('preUpdateCombat', turnChange());


Hooks.on("ready", function() {
    console.log("Turn Timer is loaded");
});

Hooks.on('deleteCombat', () => {
    clearIntervalinter(inter)
    timerWindow.render(false)
})



async function turnChange() {
    console.log("hey it works")
    timerWindow.render(true);
    clearInterval(inter);
    currentTime.value = 0;
    timerUI = document.getElementById("currentTimer")
    inter = setInterval(tickTimer, 1000);
}


async function tickTimer() {
    currentTime++
    timerUI.value = currentTime
    if (currentTime > maxTime) {
        console.log("times up")
        clearInterval(inter)
        //code to say a chat message that time is up.
    }
}

