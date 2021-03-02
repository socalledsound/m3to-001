import { getControlPos } from '../../utils';
import { rotateControl } from '../../globalSettings';
class RotateControl {
    constructor(x, y, imageButtonSize, distFromCenter, theta){
        this.pos =  getControlPos(x, y, distFromCenter, theta);
        this.size = imageButtonSize/rotateControl.scaler * 1.5;
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
