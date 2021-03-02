import ImageButtonsActionTypes from './imageButtons.actions.types';

const addImageButtonsToRedux = (imageButtons) => {
        return {
            type: ImageButtonsActionTypes.ADD_IMAGE_BUTTONS_TO_REDUX,
            payload: {
                imageButtons
            }
        }
}