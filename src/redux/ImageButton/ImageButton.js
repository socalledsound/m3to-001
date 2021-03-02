import { degreesToRadians } from '../../utils';
import RotateControl from './RotateControl';
import VolumeControl from './VolumeControl';
import PitchControl from './PitchControl';
import { imageButtonOutlineColor } from '../../globalSettings';

class ImageButton {
    constructor(idx, inc, x, y, imageButtonSize){
        console.log(x, y);
        this.idx = idx;
        this.inc = inc;
        this.pos = {x: x, y: y};
        this.size = imageButtonSize;
        this.active = false;
        this.imageTheta = 0;
        this.sizeScaler = 1.0;
        this.stroke = imageButtonOutlineColor;
        this.strokeWidth = '5';
        this.rotateControl = new RotateControl(x, y, imageButtonSize, imageButtonSize/1.5, degreesToRadians(idx * inc));
        this.volumeControl = new VolumeControl(x, y, imageButtonSize, imageButtonSize  * 1.5, degreesToRadians(idx * inc));
        this.pitchControl = new PitchControl(x, y, imageButtonSize, imageButtonSize  * 2.5, degreesToRadians(idx * inc));  

        // if I bring back rectangular controls will need
        //this.controlRotateTheta = idx * inc
    }
}

export default ImageButton
