import MouseActionTypes from './Mouse.actions.types';

export const updateMousePos = (x, y) => {
    return {
        type : MouseActionTypes.UPDATE_MOUSE_POS,
        payload : {
            x, y
        }
    }
}