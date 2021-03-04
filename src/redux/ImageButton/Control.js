import { degreesToRadians, getControlPos, getMarkCoords, mapVal } from '../../utils';

class Control {
    constructor (idx, inc, x, y, imageButtonSize, settings ){
        this.rotationCenterPos = {x: x, y: y};
        this.originalTheta = idx * inc;
        this.parentSize = imageButtonSize; 
        this.settings = settings;
        this.pos = getControlPos(x, y, imageButtonSize * settings.positionScaler, degreesToRadians(idx * inc));
        this.plusMarkPositions = getMarkCoords(1, 10, 10);
        this.size = imageButtonSize/settings.scaler;
        this.fill = settings.fill;
        this.hoverFill = settings.hoverFill;
        this.activeFill = settings.activeFill;
        this.stroke = settings.stroke;
        this.strokeWidth = settings.strokeWidth;
        this.clicked = false;
        this.hover = false;
        this.dragging = false;
        // this.volScaler = 1.0;
        this.val = 1.0
       
    }

    getVal = ( val ) => {
        const offset = val - this.originalTheta;
        return mapVal(offset, -45, 45, 2.0, 0.0);
         
    }

    updatePos = (theta) => {
        console.log(theta - this.originalTheta);
        this.val = this.getVal(theta);
        console.log(this.val);
        this.pos = getControlPos(
                        this.rotationCenterPos.x, 
                        this.rotationCenterPos.y, 
                        this.parentSize * this.settings.positionScaler, 
                        degreesToRadians(this.originalTheta + theta)
                        );
    }


}
export default Control
