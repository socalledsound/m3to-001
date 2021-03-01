import ResizeCanvasActionTypes from './resizeCanvas.actions.types';

export const resizeCanvas = (width, height) => {
    return {
        type: ResizeCanvasActionTypes.RESIZE_CANVAS,
        payload: {
            width,
            height
        }
    };
}
