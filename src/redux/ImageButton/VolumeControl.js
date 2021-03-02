import { getControlPos } from '../../utils';
import { volumeControl } from '../../globalSettings';
class VolumeControl {
    constructor (x, y, imageButtonSize, distFromCenter, theta){
        this.pos = getControlPos(x, y, distFromCenter, theta);
        this.size = imageButtonSize/volumeControl.scaler * 2;
        this.fill = volumeControl.fill;
        this.hoverFill = volumeControl.hoverFill;
        this.activeFill = volumeControl.activeFill;
        this.stroke = volumeControl.stroke;
        this.strokeWidth = volumeControl.strokeWidth;
        this.clicked = false;
        this.hover = false;
        this.dragging = false;
        this.volScaler = 1.0;
       
    }
}
export default VolumeControl
