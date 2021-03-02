import { playCircleSettings } from '../globalSettings';

class PlayCircle {
    constructor(x, y, size){
        this.pos = {x: x, y: y};
        this.size = size;
        this.fill = playCircleSettings.fill;
        this.activeFill = playCircleSettings.activeFill;
        this.hoverFill = playCircleSettings.hoverFill;
        this.hovered = false;
        this.active = false;
    }
}

export default PlayCircle