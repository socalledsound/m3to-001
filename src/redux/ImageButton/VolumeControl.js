import { degreesToRadians, getControlPos, getMarkCoords } from '../../utils';
import { volumeControl } from '../../globalSettings';
class VolumeControl {
    constructor (idx, inc, x, y, imageButtonSize ){
        this.pos = getControlPos(x, y, imageButtonSize * volumeControl.positionScaler, degreesToRadians(idx * inc));
        this.plusMarkPositions = getMarkCoords(1, 10, 10);
        this.size = imageButtonSize/volumeControl.scaler;
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
