



export function getTimerWindow() {
    class TimerWindow extends Application {
        static get defaultOptions() {
            return mergeObject(super.defaultOptions, {
                template: `modules/${module.id}/templates/timerWindow.html`,
                resizable: false,
                width: 300,
                height: 200,
                classes: ["timerWindow"],
                title: `Timer`
            });
        }
    }
    return new TimerWindow();
}

