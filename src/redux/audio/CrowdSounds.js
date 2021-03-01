import { sounds } from '../sounds';
const numSounds = sounds.length;

class CrowdSounds {
    constructor(){
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.buffers = [];
        this.sources = Array.from({ length: numSounds});
        this.playingSounds = Array.from({length : numSounds}, () => false);
        this.init();
    }

    init(){
        this.initSoundBuffers().then((buffers) => {
            this.buffers = buffers;
            // this.reversedBuffers = reverseBuffers(buffers);
            // updateBuffers(buffers)
        });

    }

    initBuffer = async(url) => {
        const response = await fetch(url);
        const ab = await response.arrayBuffer();
        const buffer = await this.context.decodeAudioData(ab);
        return buffer
    }

    initSoundBuffers = async () => {
        //this.initSoundBuffers().then( (buffers) => console.log(buffers)); 
        return Promise.all(sounds.map(soundFile => this.initBuffer(soundFile)));   
     }

    play(idx){
        console.log('playing', idx);
        this.sources[idx] = this.context.createBufferSource();
        this.sources[idx].buffer = this.buffers[idx];
        this.sources[idx].connect(this.context.destination);
        this.sources[idx].loop = true;
        // this.sources[idx].playbackRate.value = 1/(idx+1);
        this.sources[idx].start(0);
        this.playingSounds[idx] = true;
    }

    stop(idx){
        this.sources[idx].stop(0);
        this.playingSounds[idx] = false;
    }

    trig(idx){
        if(this.playingSounds[idx]){
            this.stop(idx);
        }
        else {
            this.play(idx);
        }
    }
}

export default CrowdSounds