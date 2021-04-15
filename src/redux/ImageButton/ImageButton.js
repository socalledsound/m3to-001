// import { degreesToRadians, radiansToDegrees } from '../../utils';
import RotateControl from './RotateControl';
// import VolumeControl from './VolumeControl';
// import PitchControl from './PitchControl';
// import { centerX, centerY, crowdCircleRadius, imageButton, volumeControl, pitchControl  } from '../../globalSettings';
import { imageButton, volumeControl, pitchControl  } from '../../globalSettings';
import Slider from './Slider';
// import CrowdCircle from '../CrowdCircle';

class ImageButton {
    constructor(idx, inc, x, y, imageButtonSize, theta){
        // console.log(x, y);
        this.idx = idx;
        this.imageIdx = 0;
        this.numImages = imageButton.numImages;
        this.changeImageCounter = 0;
        this.changeImageCounterRest = imageButton.imgTransitionSpeed;
        this.theta = theta;
        this.inc = inc;
        this.pos = {x: x, y: y};
        // this.orientationTheta = radiansToDegrees(Math.atan2(this.pos.y - centerY, this.pos.x - centerX));
        this.orientationTheta = idx * inc;
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

    updateControls(){

    }




    // incrementImageIdx = () => {
    //     this.imageIdx = (this.imageIdx + 1)%this.numImages;
    //     console.log(this.imageIdx);
    // }
}

export default ImageButton
