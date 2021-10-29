






async function updateCombatantEvent(combat, _update, _options, _userId) {
    
    console.log("turn changed")

}


Hooks.on('updateCombatant', updateCombatantEvent);

Hooks.on("ready", function() {
    console.log("This code runs once core initialization is ready and game data is available. 33333333333333333333333333333333333333333333333");
  });
