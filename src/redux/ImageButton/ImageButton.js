class ImageButton {
    constructor(){
        this.theta = 0;
        this.sizeScaler = 1.0;
        this.rotateControl = new RotateControl();
        this.volumeControl = new VolumeControl();
        this.pitchControl = new PitchControl();
        
    }
}

export default ImageButton