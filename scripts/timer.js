let currentTime = 0;
let inter;
let reset = false;

Hooks.on('preUpdateCombat', function () {turnChange()});


Hooks.on("ready", function() {
    console.log("Turn Timer is loaded");
});

function updateUI() {
    var oldEles = document.getElementsByClassName("turntimer")
    
    if (oldEles.length != 0 ){
        for (var i = 0; i < oldEles.length; i++) {
            oldEles[i].remove()
        }
    }
    

    var elms = document.querySelectorAll("[id='combat-round']");

    for(var i = 0; i < elms.length; i++) {
        elms[i].innerHTML += "<p class='turntimer'>TIMER: 0</p>"
    }
}

Hooks.on('deleteCombat', () => {
    clearInterval(inter)
    resetTimer()
})

function resetTimer() {
    reset = true
    changeTimerColor("white")
}

function changeTimerColor(color) {
    var timers = document.getElementsByClassName("turntimer")
    
    if (timers.length != 0 ){
        for (var i = 0; i < timers.length; i++) {
            timers[i].style.color = color
        }
    }
}

function turnChange() {
    console.log("hey it works")
    resetTimer()
    clearInterval(inter);
    timerUI = document.getElementById("currentTimer")
    inter = setInterval(tickTimer, 1000);
}


async function tickTimer() {
    console.log(currentTime)
    console.log(reset)
    if (document.getElementsByClassName("turntimer").length != document.querySelectorAll("[id='combat-round']").length) {
        updateUI()
    } else {
        if (reset) {
            currentTime = 0
            reset = false
        } else {
            currentTime ++
        }

        var uiTimers = document.getElementsByClassName("turntimer")

        for (var i = 0; i < uiTimers.length; i++) {
            uiTimers[i].innerHTML = ("TIMER: " + currentTime);
            
        }
        
        if (currentTime == game.settings.get("turntimer", "firstalerttime")) {
            console.log("times ALMOST up")
            changeTimerColor("orange")
        }

        if (currentTime >= game.settings.get("turntimer", "finalalerttime")) {
            console.log("times up now roll what you need and then end turn")
            changeTimerColor("red")
            clearInterval(inter)
            resetTimer()
        }
    }
}


