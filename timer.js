class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener("click", this.start);
        
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 20); //  step up a timer
    };
    
    pause = () => {
        clearInterval(this.interval); // stop the timer ... by using 'this' it refers to the timer in start function
    }
    tick = () => {
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
        // before "=" we call the setter to update that value
       // after the ""=" we call the getter to retrieve that value
       this.timeRemaining = this.timeRemaining - 0.02;
        if(this.onTick){
            this.onTick(this.timeRemaining);
        }
        }
       
    };
    // coz of "get" it will automaticaly invoked the function and retrieve the value of it
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time){
         this.durationInput.value = time.toFixed(2);
     }
}