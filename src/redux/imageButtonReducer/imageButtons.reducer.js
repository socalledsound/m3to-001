import ImageButtonsActionTypes from './imageButtons.actions.types';

const INITIAL_IMAGE_BUTTONS_STATE = {
    imageButtons : [],
    tweakingIdx : null,
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
            // console.log(action.payload.imageButton);
            const newImageButtons = state.imageButtons
                                        .filter(imageButton => imageButton.idx !== action.payload.idx)
                                        .concat(action.payload.imageButton);
                return {
                    ...state,
                    imageButtons : newImageButtons,
                }
         case ImageButtonsActionTypes.RESET_IMAGE_BUTTON_ROTATE :
             const updatedImageButtons = 
                    state.imageButtons.map(imageButton => {
                        imageButton.rotating = false;
                        imageButton.active = false;
                        return imageButton
             })   
             return {
                 ...state,
                 imageButtons : updatedImageButtons,
                 tweakingIdx : null,
             } 

             case ImageButtonsActionTypes.RESET_IMAGE_BUTTON_CONTROL_STATES :
                const updatedImageButtonControls = 
                       state.imageButtons.map(imageButton => {
                           imageButton.rotateControl.active = false;
                           imageButton.rotateControl.hover = false;
                           imageButton.volumeControl.active = false;
                           imageButton.volumeControl.hover = false;
                           imageButton.pitchControl.active = false;
                           imageButton.pitchControl.hover = false;
                           return imageButton
                })   
                console.log('should reset');
                return {
                    ...state,
                    imageButtons : updatedImageButtonControls,
                    tweakingIdx : null,

                }      
             
        case ImageButtonsActionTypes.SET_TWEAKING_IDX :
            console.log('tweaking reducer');
            return {
                ...state,
                tweakingIdx : action.payload.idx
            } 

        case ImageButtonsActionTypes.SET_ROTATING_IDX :
            return {
                ...state,
                rotatingIdx : action.payload.idx
            } 
        case ImageButtonsActionTypes.SET_VOLUMING_IDX :
                return {
                    ...state,
                    volumingIdx : action.payload.idx
                } 
        case ImageButtonsActionTypes.SET_PITCHING_IDX :
            return {
                ...state,
                pitchingIdx : action.payload.idx
            }                     
             
        default :
            return {
                ...state
            }    
    }
}