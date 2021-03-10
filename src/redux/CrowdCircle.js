import { circleCoords, getAngles } from '../utils';

class CrowdCircle {
    constructor(id, numCrowdCircles, centerX, centerY, imageScaler, radius, rotationSpeed, backgroundCircleScaler, controlUnitScaler){
        this.id = id;
        this.inc = 360/numCrowdCircles;
        this.numCrowdCircles = numCrowdCircles;
        this.imageScaler = imageScaler;
        this.backgroundCircleScaler = backgroundCircleScaler;
        this.controlUnitScaler = controlUnitScaler;
        this.radius = radius;
        this.center = {x: centerX, y: centerY};
        this.imageButtonSize = radius/imageScaler;
        this.points = circleCoords(numCrowdCircles, centerX, centerY, radius);
        this.angles = getAngles(numCrowdCircles);
        this.rotationSpeed =  rotationSpeed;
    }


    getCircleCoords(){
        this.points = circleCoords(this.numCrowdCircles, this.center.x, this.center.y, this.radius);
    }
}

export default CrowdCircle
