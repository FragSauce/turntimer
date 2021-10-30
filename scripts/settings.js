
Hooks.on('init', function() {
    game.settings.register("turntimer", "firstalerttime", {
        name: "First Alert Time",
            hint: "how many seconds have passed before the first alert.",
        scope: "world",
        config: true,
        default: 60,
        type: Integer
    })

    game.settings.register("turntimer", "finalalerttime", {
        name: "Final Alert Time",
            hint: "how many seconds have passed before the final alert which also stops the count.",
        scope: "world",
        config: true,
        default: 90,
        type: Integer
    })
    



});