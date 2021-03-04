import { sounds } from '../sounds';
import { reverseBuffers } from './audio.utils';
import  store  from '../store';
const numSounds = sounds.length;

class CrowdSounds {
    constructor(){
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.masterVolume = this.audioContext.createGain();
        this.buffers = [];
        this.reversedBuffers = [];
        this.indexes = Array.from({ length : numSounds}, (el, i) => i);
        this.sources = Array.from({ length: numSounds});
        this.gainNodes = Array.from({ length : numSounds}, () => this.audioContext.createGain());
        this.playingSounds = Array.from({length : numSounds}, () => false);
        this.init();
    }

    init(){
        this.initSoundBuffers().then((buffers) => {
            this.buffers = buffers;
            this.reversedBuffers = reverseBuffers(buffers);
            // updateBuffers(buffers)
        });

    }

    initBuffer = async(url) => {
        const response = await fetch(url);
        const ab = await response.arrayBuffer();
        const buffer = await this.audioContext.decodeAudioData(ab);
        return buffer
    }

    initSoundBuffers = async () => {
        //this.initSoundBuffers().then( (buffers) => console.log(buffers)); 
        return Promise.all(sounds.map(soundFile => this.initBuffer(soundFile)));   
     }

    play(idx, audioParameters, dir){
        const imageButton = store.getState().imageButtonsSlice.imageButtons.filter(imageButton => imageButton.idx === idx)[0];
        const vol = imageButton.volumeControl.val;
        const rate = imageButton.pitchControl.val;
        // console.log(rate);
        this.gainNodes[idx].gain.value = vol;
        const buf = dir > 0 ? this.buffers[idx] : this.reversedBuffers[idx]; 
        // const offset = Math.abs(audioParameters.offset)%buf.duration;
        const offset = Math.abs(0)%buf.duration;
        this.sources[idx] = this.audioContext.createBufferSource();
        this.sources[idx].buffer = buf;
        // this.sources[idx].connect(this.context.destination);
        this.gainNodes[idx].connect(this.audioContext.destination);
        this.sources[idx].connect(this.gainNodes[idx]);
        this.sources[idx].loop = true;
        this.sources[idx].playbackRate.value = rate;
        this.sources[idx].start(0, offset);
        this.playingSounds[idx] = true;
    }


    
    stop = (idx) => {
        // console.log(idx);
        // console.log(this);
        // const imageButton = store.getState().imageButtonsSlice.imageButtons.filter(imageButton => imageButton.idx === idx)[0];
        // console.log(imageButton);
        this.sources[idx].stop(0);
        this.playingSounds[idx] = false;
    }

    trig(idx, audioParameters, dir){
        // console.log(idx, 'in trig');
        if(this.playingSounds[idx]){
            this.stop(idx);
        }
        else {
            this.play(idx, audioParameters, dir);
        }
    }

    trigAll(dir){
        // console.log(dir);
        this.indexes.forEach(idx => {   
            this.trig(idx, {vol : 1.0, rate: 1.0, offset: 0}, dir);
        })
    }

    updatePitch = (idx, val) => {
        // console.log(idx, 'updating pitch', val);
        // console.log(this.sources);
        this.sources[idx].playbackRate.value = val;
    }
    

    updateVolume = (idx, val) => {
        // console.log('updating volume', val);
        this.gainNodes[idx].gain.value = val;
    }
}

export default CrowdSounds