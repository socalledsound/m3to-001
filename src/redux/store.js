import { createStore, applyMiddleware } from 'redux';
import audioMiddleWare from './audio/audio.middleware';
import masterClockMiddleWare from './masterClock/masterClock.middleware';
import { rootReducer } from './rootReducer';

const store = createStore(
    rootReducer,
    applyMiddleware(audioMiddleWare, masterClockMiddleWare)
);

export default store