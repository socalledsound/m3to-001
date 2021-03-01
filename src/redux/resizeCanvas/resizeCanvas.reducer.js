import ResizeCanvasActionTypes from './resizeCanvas.actions.types';
import { canvasWidth, canvasHeight } from '../../globalSettings';

const INITIAL_CANVAS_STATE = {
    svgWidth: canvasWidth,
    svgHeight: canvasHeight,
    initResize: false,
}

export const resizeCanvasReducer = (state = INITIAL_CANVAS_STATE, action) => {


    switch(action){
        case ResizeCanvasActionTypes.RESIZE_SCREEN :
            // console.log(state.birdBaseValues); 
            // const resizedBirdsArray = [...state.birdBaseValues].map(bb => new BirdData(bb, action.payload.width, action.payload.height));
            // console.log(resizedBirdsArray);
            return {
                ...state,
                svgWidth: action.payload.width,
                svgHeight: action.payload.height,
                initResize: true,
                // birds: resizedBirdsArray,
            }
            default :
            return {...state}
    }


}