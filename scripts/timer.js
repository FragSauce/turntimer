import {TimerWindow} from "./timerWindow.js"


let currentTime = 0;
let maxTime = 60
let inter;
let window = new TimerWindow()

Hooks.on('preUpdateCombat', turnChange());


Hooks.on("ready", function() {
    console.log("Turn Timer is loaded");
});

Hooks.on('deleteCombat', async () => {
    clearIntervalinter(inter)
    window.render(false)
})



turnChange = async () => {
    window.render(true);
    clearInterval(inter);
    currentTime.value = 0;
    timerUI = document.getElementById("currentTimer")
    inter = setInterval(tickTimer, 1000);
}


tickTimer = async () => {
    currentTime++
    timerUI.value = currentTime
    if (currentTime > maxTime) {
        clearInterval(inter)
        //code to say a chat message that time is up.
    }
}

