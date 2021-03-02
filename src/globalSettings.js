import { circleCoords } from './utils';

//general
export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;
export const numImages = 10;
export const numButtons = numImages;

//gear
const radius = canvasWidth/7;
const imageScaler = 4;
export const gearSpeed = 0.3;

//playCircle
export const playCircleSettings = {
    fill : '#FFF',
    hoverFill : '#FF00FF',
    activeFill : '#00FF00',
    stroke : '#000',
    strokeWidth : '2',
}




// imageButton
export const imageButtonOutlineColor = '#FF00FF';


//image button controls
export const rotateControl = {
    fill : '#CCC',
    hoverFill : '#FF0000aa',
    activeFill : '#FF0000',
    stroke : '#333',
    strokeWidth : '2',
    scaler : 4,
    size : radius/8  * 1.5,
    positionScaler : 0.65, 
}

export const volumeControl = {
    fill : '#555',
    hoverFill : '#FF00FF33',
    activeFill : '#FF00FF',
    stroke : '#000',
    strokeWidth : '2',
    scaler : 3,
    size : radius/3 * 2,
    positionScaler : 1.9,
}

export const pitchControl = {
    fill : '#666',
    hoverFill : '#FFFF0077',
    activeFill : '#FFFF00',
    stroke : '#000',
    strokeWidth : '2',
    scaler : 3,
    size : radius/3 * 2,
    positionScaler : 3.0,
}

// controlScaler,
// controlWidth,
// controlHeight,
// controlFill,
// controlStroke,
// controlStrokeWidth,



//const centerX1 = canvasWidth/2 - canvasWidth/4 - radius - (controlWidth * 2) + leftOffset;
//const centerX2 = canvasWidth/2 + canvasWidth/4 + radius + (controlWidth * 2) + leftOffset; 

// const centerX2 = canvasWidth/2; 
// const centerY2 = canvasHeight/2.0;

const centerX1 = canvasWidth/2; 
const centerY1 = canvasHeight/2.0;

const crowdCircle1 = {
    id: 0,
    numImages,
    inc : 360/numImages,
    radius,
    centerX : centerX1,
    centerY : centerY1,
    imageButtonSize: radius/imageScaler,
    points :  circleCoords(numImages, centerX1, centerY1, radius)
}


// export const crowdCircle2 = {
//     id: 10,
//     numImages,
//     inc : 360/numImages,
//     radius,
//     centerX : centerX2,
//     centerY : centerY2,
//     circleSize: radius/circleSizeScaler,
//     controlScaler,
//     controlWidth,
//     controlHeight,
//     controlFill : '#CCC',
//     controlStroke : '#333',
//     controlStrokeWidth: '2',
//     points :  circleCoords(numImages, centerX1, centerY1, radius)
// }

// export const crowdCircles = [crowdCircle1, crowdCircle2];
export const crowdCircles = [crowdCircle1];

// export const points = circleCoords(images.length, centerX, centerY, radius);