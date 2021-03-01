import GearAnimationActionTypes from './gearAnimation.actions.types';

export const pauseAnimating = (idx) => {
    return {
        type: GearAnimationActionTypes.PAUSE_ANIMATING,
        payload : {
            idx
        }
    }
}

export const startAnimating = (idx) => {
    return {
        type: GearAnimationActionTypes.START_ANIMATING,
        payload : {
            idx
        }
    }
}

export const incrementTheta = (idx) => {
    return {
        type : GearAnimationActionTypes.INCREMENT_THETA,
        payload : {
            idx
        }
    }
}


// export const tickTime = (idx, time) => {
//     return {
//         type: GearAnimationActionTypes.TICK_TIME,
//         payload : {
//             idx,
//             time
//         }
//     }
// }