import { combineReducers } from 'redux';
import { masterClockReducer } from './masterClock/masterClock.reducer';
import { resizeCanvasReducer } from './resizeCanvas/resizeCanvas.reducer';
import { gearAnimationReducer } from './gearAnimationReducer/gearAnimation.reducer';
import { mouseReducer } from './mouseReducer/mouseReducer';

export const rootReducer = combineReducers({
    masterClock : masterClockReducer,
    resizecanvas : resizeCanvasReducer,
    gearsAnimation : gearAnimationReducer,
    mouse : mouseReducer,
})