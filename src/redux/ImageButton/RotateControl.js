import { getControlPos } from '../../utils';
import { rotateControl } from '../../globalSettings';
class RotateControl {
    constructor(x, y, imageButtonSize, theta){
        this.pos =  getControlPos(x, y, imageButtonSize * rotateControl.positionScaler, theta);
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
}

export default RotateControl 
