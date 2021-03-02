import ImageButtonsActionTypes from './imageButtons.actions.types';

const INITIAL_IMAGE_BUTTONS_STATE = {
    imageButtons : null,
}

export const imageButtonsReducer = (state = INITIAL_IMAGE_BUTTONS_STATE, action) => {
    switch(action.type){
        case ImageButtonsActionTypes.ADD_IMAGE_BUTTONS_TO_REDUX :
            return {
                ...state,
                imageButtons : action.payload.imageButtons
            }
        default :
            return {
                ...state
            }    
    }
}