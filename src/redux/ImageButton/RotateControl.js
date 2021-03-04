import { getControlPos, degreesToRadians } from '../../utils';
import { rotateControl } from '../../globalSettings';
class RotateControl {
    constructor(idx, inc, x, y, imageButtonSize){
        this.rotationCenterPos = {x: x, y: y};
        this.orginalTheta = idx * inc;
        this.parentSize = imageButtonSize; 
        this.pos = getControlPos(x, y, imageButtonSize * rotateControl.positionScaler, degreesToRadians(idx * inc));
        this.size = imageButtonSize/rotateControl.scaler;
        this.fill = rotateControl.fill;
        this.hoverFill = rotateControl.hoverFill;
        this.activeFill = rotateControl.activeFill;
        this.stroke = rotateControl.stroke;
        this.strokeWidth = rotateControl.strokeWidth;
        this.clicked = false;
        this.hover = false;
        this.dragging = false;   
    }

    updatePos = (theta) => {
        this.pos = getControlPos(this.rotationCenterPos.x, this.rotationCenterPos.y, this.parentSize * rotateControl.positionScaler, degreesToRadians((this.originalTheta) + theta));
    }

}

export default RotateControl 
