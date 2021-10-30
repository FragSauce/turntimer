let currentTime = 0;
let inter;

Hooks.on('preUpdateCombat', function () {turnChange()});


Hooks.on("ready", function() {
    console.log("Turn Timer is loaded");
    updateUI()
});

function updateUI() {
    document.getElementsByClassName("turntimer").forEach(element => {
        element.remove()
    })

    var elms = document.querySelectorAll("[id='combat-round']");

    for(var i = 0; i < elms.length; i++) {
        elms[i].innerHTML += "<p class='turntimer'>TIMER: 0</p>"
    }
}

Hooks.on('deleteCombat', () => {
    clearInterval(inter)
    currentTime = 0;
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
    if (document.getElementsByClassName("turntimer").length != document.querySelectorAll("[id='combat-round']").length) {
        updateUI()
    } else {
        document.getElementsByClassName("turntimer").array.forEach(element => {
            element.value("TIMER: " + currentTime)
        });
        if (currentTime == game.settings.get("turntimer", "firstalerttime")) {
            console.log("times ALMOST up")
        }
        if (currentTime >= game.settings.get("turntimer", "finalalerttime")) {
            console.log("times up now roll what you need and then end turn")
            clearInterval(inter)
        }
    }
}


