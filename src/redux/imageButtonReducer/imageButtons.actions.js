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

export const resetImageButtonControlStates = () => {
    return {
        type : ImageButtonsActionTypes.RESET_IMAGE_BUTTON_CONTROL_STATES
    }
}

export const setTweakingIdx = (idx) => {
    return {
        type : ImageButtonsActionTypes.SET_TWEAKING_IDX,
        payload : {
            idx
        }
    }
}

export const setRotatingIdx = (idx) => {
    return {
        type : ImageButtonsActionTypes.SET_ROTATING_IDX,
        payload : {
            idx
        }
    }
}

export const setVolumingIdx = (idx) => {
    return {
        type : ImageButtonsActionTypes.SET_VOLUMING_IDX,
        payload : {
            idx
        }
    }
}

export const setPitchingIdx = (idx) => {
    return {
        type : ImageButtonsActionTypes.SET_PITCHING_IDX,
        payload : {
            idx
        }
    }
}