let currentTime = 0;
let inter;

Hooks.on('preUpdateCombat', function () {turnChange()});


Hooks.on("ready", function() {
    console.log("Turn Timer is loaded");
});

Hooks.on('deleteCombat', () => {
    clearIntervalinter(inter)
})



function turnChange() {
    console.log("hey it works")
    clearInterval(inter);
    currentTime.value = 0;
    timerUI = document.getElementById("currentTimer")
    inter = setInterval(tickTimer, 1000);
}


async function tickTimer() {
    currentTime++
    console.log(currentTime)
    //timerUI.value = currentTime
    if (currentTime == game.settings.get("turntimer", "firstalerttime")) {
        console.log("times ALMOST up")
    }
    if (currentTime >= game.settings.get("turntimer", "finalalerttime")) {
        console.log("times up now roll what you need and then end turn")
    }


}

async function renderTimerWindow() {
    class TimerWindow extends Application {
        static defaultOptions() {
            return mergeObject(super.defaultOptions, {
                template: `modules/turntimer/templates/timerWindow.html`,
                resizable: false,
                width: 300,
                height: 200,
                classes: ["timerWindow"],
                title: `Timer`
            });
        }
    }
    new TimerWindow().render(true);
}

