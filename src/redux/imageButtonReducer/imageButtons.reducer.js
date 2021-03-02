import ImageButtonsActionTypes from './imageButtons.actions.types';

const INITIAL_IMAGE_BUTTONS_STATE = {
    imageButtons : [],
}

export const imageButtonsReducer = (state = INITIAL_IMAGE_BUTTONS_STATE, action) => {
    switch(action.type){
        case ImageButtonsActionTypes.ADD_IMAGE_BUTTON_TO_REDUX :
            // const imageButtonsToUpdate = ;
            return {
                ...state,
                imageButtons : [...state.imageButtons].concat(action.payload.imageButton)
            }
        case ImageButtonsActionTypes.UPDATE_IMAGE_BUTTON :
            const newImageButtons = state.imageButtons
                                        .filter(imageButton => imageButton.idx !== action.payload.idx)
                                        .concat(action.payload.imageButton);
                return {
                    ...state,
                    imageButtons : newImageButtons,
                }
         case ImageButtonsActionTypes.RESET_IMAGE_BUTTON_STATES :
             const updatedImageButtons = 
                    state.imageButtons.map(imageButton => {
                        imageButton.rotateControl.active = false;
                        imageButton.rotateControl.hover = false;
                        imageButton.volumeControl.active = false;
                        imageButton.volumeControl.hover = false;
                        imageButton.pitchControl.active = false;
                        imageButton.pitchControl.hover = false;
                        return imageButton
             })   
             return {
                 ...state,
                 imageButtons : updatedImageButtons
             }       
        default :
            return {
                ...state
            }    
    }
}