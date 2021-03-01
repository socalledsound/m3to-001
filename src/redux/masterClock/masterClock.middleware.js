// import CrowdSound from './CrowdSound';
import masterClockActionTypes from './masterClock.actions.types';
import { setTickTime, startTimer} from './masterClock.actions';
import Timer from './Timer';

const masterClockMiddleWare = store => {
    const timer = new Timer();

    return next => action => {

        switch (action.type){
           
            case masterClockActionTypes.INIT_TIMER : 
                timer.init();
                store.dispatch(startTimer());
                break;

            case masterClockActionTypes.GET_CURRENT_TICK_TIME : 
                store.dispatch(setTickTime(timer.getTime()));
                break;

            default :
                break;
        }
        next(action);
    }
}
export default masterClockMiddleWare