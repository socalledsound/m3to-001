import { circleCoords } from './utils';


export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;
export const gearSpeed = 0.3;
export const imageButtonOutlineColor = '#FF00FF';
console.log(canvasWidth/2);
// const leftOffset = 200;
const radius = canvasWidth/4.5;
const controlWidth = radius/8;
const controlHeight = radius/8;
//const centerX1 = canvasWidth/2 - canvasWidth/4 - radius - (controlWidth * 2) + leftOffset;
const centerX1 = canvasWidth/2; 

const centerY1 = canvasHeight/2.0;
//const centerX2 = canvasWidth/2 + canvasWidth/4 + radius + (controlWidth * 2) + leftOffset; 
const centerX2 = canvasWidth/2; 
console.log(canvasWidth/2);
console.log(canvasWidth/2 - canvasWidth/4 - radius)
console.log(centerX1, centerX2);
const centerY2 = canvasHeight/2.0;
export const numImages = 10;
const circleSizeScaler = 3.5;
const controlScaler = 6;

export const crowdCircle1 = {
    id: 0,
    numImages,
    inc : 360/numImages,
    radius,
    centerX : centerX1,
    centerY : centerY1,
    circleSize: radius/circleSizeScaler,
    controlScaler,
    controlWidth,
    controlHeight,
    controlFill : '#CCC',
    controlStroke : '#333',
    controlStrokeWidth: '2',
    points :  circleCoords(numImages, centerX1, centerY1, radius)
}


export const crowdCircle2 = {
    id: 10,
    numImages,
    inc : 360/numImages,
    radius,
    centerX : centerX2,
    centerY : centerY2,
    circleSize: radius/circleSizeScaler,
    controlScaler,
    controlWidth,
    controlHeight,
    controlFill : '#CCC',
    controlStroke : '#333',
    controlStrokeWidth: '2',
    points :  circleCoords(numImages, centerX1, centerY1, radius)
}

// export const crowdCircles = [crowdCircle1, crowdCircle2];
export const crowdCircles = [crowdCircle1];

// export const points = circleCoords(images.length, centerX, centerY, radius);