import MouseActionTypes from './Mouse.actions.types';

const INITIAL_MOUSE_STATE = {
    mousePos : {x : 0, y: 0},
    dragging : false,
}

export const mouseReducer = ( state = INITIAL_MOUSE_STATE, action) => {
    switch(action.type){
        case MouseActionTypes.UPDATE_MOUSE_POS :
            return {
                ...state,
                mousePos : {
                    x: action.payload.x,
                    y : action.payload.y
                },
            }
        default : 
            return {
                ...state
            }    
    }
}