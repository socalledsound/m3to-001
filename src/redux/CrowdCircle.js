import { circleCoords, getAngles } from '../utils';

class CrowdCircle {
    constructor(id, numImages, centerX, centerY, radius, imageScaler){
        this.id = id;
        this.inc = 360/numImages;
        this.numImages = numImages;
        this.imageScaler = imageScaler
        this.radius = radius;
        this.center = {x: centerX, y: centerY};
        this.imageButtonSize = radius/imageScaler;
        this.points = circleCoords(numImages, centerX, centerY, radius);
        this.angles = getAngles(numImages);
    }


    getCircleCoords(){
        this.points = circleCoords(this.numImages, this.center.x, this.center.y, this.radius);
    }
}

export default CrowdCircle
