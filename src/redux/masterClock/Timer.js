import store from '../store';
import { updateTickTime } from '../masterClock/masterClock.actions';
class Timer  {
    constructor(){
        // this.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        // window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        this.tickTime = 0;
        this.tickStarted = false;
        
    }

    getCurrentTime(){
        return this.tickTime
    }

    init(){
        const ticker = () => {
            this.tickTime = this.tickTime + 1;
            // console.log(this.tickTime);
            store.dispatch(updateTickTime(this.tickTime));
            this.requestAnimation = window.requestAnimationFrame(ticker);
        }

        if(!this.tickStarted){
            this.tickStarted = true;
            ticker();
        }

    }

}
export default Timer