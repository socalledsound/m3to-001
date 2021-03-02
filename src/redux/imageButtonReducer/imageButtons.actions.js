import ImageButtonsActionTypes from './imageButtons.actions.types';

export const addImageButtonToRedux = (imageButton) => {
        return {
            type: ImageButtonsActionTypes.ADD_IMAGE_BUTTON_TO_REDUX,
            payload: {
                imageButton
            }
        }
}

export const updateImageButton = (idx, imageButton) => {
    return {
        type : ImageButtonsActionTypes.UPDATE_IMAGE_BUTTON,
        payload : {
            idx, imageButton
        }
    }
}

export const resetImageButtonStates = () => {
    return {
        type : ImageButtonsActionTypes.RESET_IMAGE_BUTTON_STATES
    }
}