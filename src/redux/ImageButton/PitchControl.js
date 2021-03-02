import { getControlPos } from '../../utils';
import { pitchControl } from '../../globalSettings';

class PitchControl {
    constructor (x, y, imageButtonSize, theta){
        this.pos = getControlPos(x, y, imageButtonSize * pitchControl.positionScaler, theta);
        this.size = imageButtonSize/pitchControl.scaler;
        this.fill = pitchControl.fill;
        this.hoverFill = pitchControl.hoverFill;
        this.activeFill = pitchControl.activeFill;
        this.stroke = pitchControl.stroke;
        this.strokeWidth = pitchControl.strokeWidth;
        this.clicked = false;
        this.hover = false;
        this.dragging = false;
        this.pitchScaler = 1.0;
    }
}
export default PitchControl
