
import RotateControl from './RotateControl';
// import VolumeControl from './VolumeControl';
// import PitchControl from './PitchControl';
import { imageButton, volumeControl, pitchControl  } from '../../globalSettings';
import Slider from './Slider';

class ImageButton {
    constructor(idx, inc, x, y, imageButtonSize, theta){
        // console.log(x, y);
        this.idx = idx;
        this.theta = theta;
        this.inc = inc;
        this.pos = {x: x, y: y};
        this.size = imageButtonSize;
        this.active = false;
        this.tweaking = false;
        this.rotating = false;
        this.rotateDir = 1;
        this.imageTheta = 0;
        this.sizeScaler = imageButton.sizeScaler;
        this.stroke = imageButton.outlineColor;
        this.strokeWidth = '5';
        this.volumeControl = new Slider(idx, inc, x, y, imageButtonSize, volumeControl);
        this.pitchControl = new Slider(idx, inc, x, y, imageButtonSize, pitchControl);
        this.rotateControl = new RotateControl(idx, inc, x, y, imageButtonSize);
        this.tweaking = null;
        // this.volumeControl = new VolumeControl(idx, inc, x, y, imageButtonSize);

        // this.pitchControl = new PitchControl(idx, inc, x, y, imageButtonSize);  

        // if I bring back rectangular controls will need
        //this.controlRotateTheta = idx * inc
    }
}

export default ImageButton
